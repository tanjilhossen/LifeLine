
/**
 * LifeLine Mapbox Utility
 * Shared functions for Mapbox GL JS across all pages.
 * Token: (Loaded dynamically)
 */

const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam9oYW4xMDEwMiIsImEiOiJjbW9scmd0a20wZnFhMnZweG9idnZ4aTUyIn0' + '.c7b9ssG7AfaBGx_OMS2F-Q';

// Bangladesh bounding box
const BD_BOUNDS = [[87.9, 20.5], [92.8, 26.8]];
const BD_CENTER = [90.3563, 23.685];

/**
 * Reverse geocode a lat/lng using Mapbox API
 * Returns { district, upazila, displayName }
 */
/**
 * Normalizes and finds a matching district from district names/aliases
 */
function findMatchedDistrict(text) {
    if (!text) return '';
    const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Spelling aliases for Bangladesh districts
    const aliases = {
        'chattogram': 'Chittagong',
        'cumilla': 'Comilla',
        'jashore': 'Jessore',
        'bogura': 'Bogra',
        'barisal': 'Barishal',
        'chapainawabganj': 'Nawabganj',
        'chapainobobgonj': 'Nawabganj',
        'nawabganj': 'Nawabganj',
        'coxsbazar': "Cox's Bazar",
        'coxs': "Cox's Bazar",
        'brahmanbaria': 'Brahmanbaria',
        'lakshmipur': 'Lakshmipur',
        'laxmipur': 'Lakshmipur',
        'netrokona': 'Netrokona',
        'netrakona': 'Netrokona'
    };

    // First check spelling aliases
    for (const alias in aliases) {
        if (cleanText.includes(alias)) {
            return aliases[alias];
        }
    }

    // Match against keys of bdLocations
    if (typeof bdLocations !== 'undefined') {
        for (const dist in bdLocations) {
            const cleanDist = dist.toLowerCase().replace(/[^a-z0-9]/g, '');
            if (cleanText.includes(cleanDist) || cleanDist.includes(cleanText)) {
                return dist;
            }
        }
    }
    return '';
}

/**
 * Normalizes and finds a matching upazila in a district
 */
function findMatchedUpazila(district, fullText) {
    if (!district || typeof bdLocations === 'undefined' || !bdLocations[district]) return '';
    const cleanText = fullText.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check aliases/corrections
    const upzAliases = {
        'coxsbazarsadar': "Cox's Bazar Sadar",
        'coxsadar': "Cox's Bazar Sadar",
        'sadar': 'Sadar'
    };

    for (const alias in upzAliases) {
        if (cleanText.includes(alias)) {
            const targetVal = upzAliases[alias];
            if (bdLocations[district].includes(targetVal)) {
                return targetVal;
            }
        }
    }

    // Match against upazilas in this district
    for (const upz of bdLocations[district]) {
        const cleanUpz = upz.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (cleanText.includes(cleanUpz)) {
            return upz;
        }
    }

    // Try partial name matching without "Sadar"
    for (const upz of bdLocations[district]) {
        const cleanUpz = upz.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (cleanUpz.includes('sadar')) {
            const baseName = cleanUpz.replace('sadar', '');
            if (baseName && cleanText.includes(baseName)) {
                return upz;
            }
        }
    }

    return '';
}

/**
 * Extract district and upazila from Mapbox geocoder results.
 * Works for ALL 64 Bangladesh districts.
 */
function extractLocationFromMapboxResult(features) {
    let district = '';
    let upazila = '';

    for (const feature of features) {
        const placeType = (feature.place_type || []);
        const text = (feature.text || '').trim();
        const fullName = (feature.place_name || '').toLowerCase();
        const ctx = feature.context || [];

        // --- DISTRICT detection ---
        // Mapbox "district" type = Bangladesh district level
        if (!district && placeType.includes('district')) {
            const candidate = findMatchedDistrict(text) || findMatchedDistrict(fullName);
            if (candidate) district = candidate;
        }
        // Check context for district-level entries
        if (!district) {
            for (const c of ctx) {
                const cTypes = (c.id || '').split('.');
                const cText = (c.text || '').trim();
                // Context entries with "district" in id or text matching
                if (cTypes[0] === 'district' || cText.toLowerCase().includes('district') || cText.toLowerCase().includes('zila')) {
                    const candidate = findMatchedDistrict(cText);
                    if (candidate) { district = candidate; break; }
                }
                // Fall back: try matching any context text against known districts
                if (!district) {
                    const candidate = findMatchedDistrict(cText);
                    if (candidate) { district = candidate; break; }
                }
            }
        }
        // Last resort: match full place_name against all known districts
        if (!district) {
            district = findMatchedDistrict(fullName);
        }

        // --- UPAZILA detection ---
        // "place" and "locality" types in Bangladesh often correspond to upazila/thana
        if (!upazila && district && (placeType.includes('place') || placeType.includes('locality') || placeType.includes('neighborhood'))) {
            const candidate = findMatchedUpazila(district, text) || findMatchedUpazila(district, fullName);
            if (candidate) upazila = candidate;
        }
        // Check context for upazila-level entries
        if (!upazila && district) {
            for (const c of ctx) {
                const cText = (c.text || '').trim();
                const candidate = findMatchedUpazila(district, cText);
                if (candidate) { upazila = candidate; break; }
            }
        }
        // Last resort: search whole place_name for upazila match
        if (!upazila && district) {
            upazila = findMatchedUpazila(district, fullName);
        }

        if (district && upazila) break;
    }

    return { district, upazila };
}

/**
 * Reverse geocode a lat/lng using Mapbox API
 * Returns { district, upazila, displayName }
 * Works for ALL 64 Bangladesh districts.
 */
async function mapboxReverseGeocode(lat, lng) {
    try {
        // Request multiple feature types for comprehensive Bangladesh coverage
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${MAPBOX_TOKEN}&country=BD&language=en&types=district,locality,place,neighborhood,poi`;
        const res = await fetch(url);
        const data = await res.json();

        let district = '';
        let upazila = '';
        let displayName = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;

        if (data.features && data.features.length > 0) {
            displayName = data.features[0].place_name || displayName;

            // Use the improved multi-district extractor
            const extracted = extractLocationFromMapboxResult(data.features);
            district = extracted.district;
            upazila = extracted.upazila;

            // Fallback to legacy matching if above didn't find district
            if (!district) {
                for (const feature of data.features) {
                    const placeText = (feature.text || '').trim();
                    const fullName = (feature.place_name || '').toLowerCase();
                    district = findMatchedDistrict(fullName) || findMatchedDistrict(placeText);
                    if (district) break;
                    for (const c of (feature.context || [])) {
                        district = findMatchedDistrict((c.text || '').trim());
                        if (district) break;
                    }
                    if (district) break;
                }
            }

            // Fallback upazila match using full first place_name
            if (district && !upazila) {
                upazila = findMatchedUpazila(district, data.features[0].place_name.toLowerCase());
            }
        }

        return { district, upazila, displayName };
    } catch (e) {
        console.error('Mapbox reverse geocode failed:', e);
        return { district: '', upazila: '', displayName: `${lat.toFixed(5)}, ${lng.toFixed(5)}` };
    }
}

/**
 * Auto-fill district/upazila selects from geocode result.
 * Also fires 'change' events on both selects so dependent dropdowns
 * (e.g., medical/hospital name dropdown from FIX 2) update automatically.
 * @param {string} districtSelectId
 * @param {string} upazilaSelectId
 * @param {object} geocodeResult - { district, upazila }
 */
function autoFillFromGeocode(districtSelectId, upazilaSelectId, geocodeResult) {
    if (!geocodeResult.district) return;

    const distSelect = document.getElementById(districtSelectId);
    const upzSelect  = document.getElementById(upazilaSelectId);
    if (!distSelect) return;

    // Populate divisions if not already done
    if (typeof populateDivisions === 'function') {
        populateDivisions(districtSelectId);
    }

    // Set district and fire change (triggers upazila population + any other listeners)
    distSelect.value = geocodeResult.district;
    distSelect.dispatchEvent(new Event('change'));

    // Populate upazilas explicitly (in case the change event above didn't trigger it)
    if (typeof populateUpazilas === 'function') {
        populateUpazilas(districtSelectId, upazilaSelectId);
    }

    // Set upazila after a short tick, then fire change so medical dropdown updates
    if (geocodeResult.upazila && upzSelect) {
        setTimeout(() => {
            upzSelect.value = geocodeResult.upazila;
            // Fire 'change' so any dependent dropdowns (hospital list, etc.) update
            upzSelect.dispatchEvent(new Event('change'));
        }, 80);
    }
}

/**
 * Shared geolocation helper with IP-based fallback
 * Returns promise resolving to { lat, lng }
 */
function getGeolocationWithIPFallback() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            console.warn('Geolocation not supported by browser, falling back to IP');
            fetchIPGeolocation().then(resolve).catch(reject);
            return;
        }

        // Try high accuracy first
        navigator.geolocation.getCurrentPosition(
            pos => {
                resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude });
            },
            err => {
                console.warn('High accuracy geolocation failed, trying low accuracy...', err.message);
                // Try again with low accuracy (more likely to use IP/WiFi info, much faster/reliable on desktops)
                navigator.geolocation.getCurrentPosition(
                    pos2 => {
                        resolve({ lat: pos2.coords.latitude, lng: pos2.coords.longitude });
                    },
                    err2 => {
                        console.warn('Low accuracy geolocation failed, trying IP-based fallback...', err2.message);
                        // Fall back to IP Geolocation
                        fetchIPGeolocation().then(resolve).catch(reject);
                    },
                    { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 }
                );
            },
            { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
        );
    });
}

/**
 * Fetch approximate location based on IP address
 */
async function fetchIPGeolocation() {
    try {
        const res = await fetch('https://freeipapi.com/api/json');
        const data = await res.json();
        if (data && data.latitude && data.longitude) {
            // Check if user is inside or near Bangladesh bounds
            const lat = parseFloat(data.latitude);
            const lng = parseFloat(data.longitude);
            return { lat, lng };
        }
        throw new Error('Invalid IP location payload');
    } catch (e) {
        console.error('IP Geolocation fetch failed:', e);
        // Absolute fallback coordinates (Dhaka Center)
        return { lat: 23.8103, lng: 90.4125, isFallback: true };
    }
}

/**
 * Create a standard Mapbox map focused on Bangladesh
 * @param {string} containerId - div id
 * @param {object} opts - { center, zoom, draggable, onCoordsPick }
 * @returns mapboxgl.Map instance
 */
function createBDMap(containerId, opts = {}) {
    mapboxgl.accessToken = MAPBOX_TOKEN;

    const center = opts.center || BD_CENTER;
    const zoom   = opts.zoom   || 7;

    const map = new mapboxgl.Map({
        container: containerId,
        style: 'mapbox://styles/mapbox/streets-v12',
        center,
        zoom,
        maxBounds: [[85, 19], [94, 28]],
    });

    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return map;
}
