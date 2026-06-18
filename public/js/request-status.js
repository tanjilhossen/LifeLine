/* =========================================================
   LifeLine — Request Status / Tracking Page
   Smart serial donor queue — web-only, no app touch
   ========================================================= */

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (c) => (
        { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[c]
    ));
}

let   token            = '';
let   countdownTimer   = null;
let   remainingSeconds = 0;
let   pollInterval     = null;
let   pollCount        = 0;
let   lastQueueStatus  = null;

/* ── Date formatting ─────────────────────────────────── */
function formatDate(value) {
    if (!value) return 'N/A';
    return new Date(value).toLocaleString('bn-BD', { dateStyle: 'medium', timeStyle: 'short' });
}

function formatRemaining(secs) {
    const s = Math.max(0, Math.round(Number(secs) || 0));
    if (s <= 0) return 'শেষ';
    const m = Math.floor(s / 60);
    const r = s % 60;
    return m > 0 ? `${m} মিনিট ${r} সেকেন্ড` : `${r} সেকেন্ড`;
}

/* ── Badge HTML ──────────────────────────────────────── */
function statusBadge(status) {
    const map = {
        'Accepted':    ['badge-accepted',  '✅ Accepted'],
        'Rejected':    ['badge-rejected',  '❌ Rejected'],
        'No Response': ['badge-noresponse','⏰ No Response'],
        'Queued':      ['badge-queued',    '📋 Queued'],
        'Pending':     ['badge-active',    '🔴 Active'],
    };
    const [cls, label] = map[status] || ['badge-queued', status];
    return `<span class="badge ${cls}">${label}</span>`;
}

/* ── Timer card ──────────────────────────────────────── */
function startLocalCountdown(initSeconds) {
    if (countdownTimer) clearInterval(countdownTimer);
    remainingSeconds = Math.max(0, Math.round(Number(initSeconds) || 0));
    const timerVal = document.getElementById('timerValue');
    const timerBar = document.getElementById('timerBar');
    const maxSecs  = 5 * 60; // REQUEST_EXPIRY_MINUTES

    function tick() {
        if (!timerVal) return;
        timerVal.textContent = formatRemaining(remainingSeconds);
        const pct = (remainingSeconds / maxSecs) * 100;
        if (timerBar) timerBar.style.width = `${Math.min(100, pct)}%`;
        if (remainingSeconds > 0) remainingSeconds--;
    }
    tick();
    countdownTimer = setInterval(tick, 1000);
}

function stopCountdown() {
    if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
    const timerVal = document.getElementById('timerValue');
    const timerBar = document.getElementById('timerBar');
    if (timerVal) timerVal.textContent = '--';
    if (timerBar) timerBar.style.width = '0%';
}

/* ── Queue Banner ────────────────────────────────────── */
function renderQueueBanner(queueState, request) {
    const banner  = document.getElementById('queueBanner');
    const icon    = document.getElementById('bannerIcon');
    const label   = document.getElementById('bannerLabel');
    const msg     = document.getElementById('bannerMessage');
    const timerWrap = document.getElementById('timerWrap');

    // Remove all state classes
    banner.className = 'queue-banner';
    banner.classList.add(`state-${queueState.status}`);

    const icons = {
        completed: '✅',
        active:    '🔴',
        queued:    '⏳',
        exhausted: '❌',
    };
    icon.textContent    = icons[queueState.status] || '🔍';
    label.textContent   = queueState.label;
    msg.textContent     = queueState.message;

    // Show/hide timer
    if (queueState.status === 'active' && request.remainingSeconds > 0) {
        timerWrap.classList.remove('hidden');
        startLocalCountdown(request.remainingSeconds);
    } else {
        timerWrap.classList.add('hidden');
        stopCountdown();
    }

    // Pulse animation for active
    if (queueState.status === 'active') {
        banner.classList.add('pulse-active');
    }
}

/* ── Summary grid ────────────────────────────────────── */
function renderSummary(summary) {
    document.getElementById('totalCount').textContent    = summary.total;
    document.getElementById('acceptedCount').textContent = summary.accepted;
    document.getElementById('pendingCount').textContent  = summary.pending;
    document.getElementById('queuedCount').textContent   = summary.queued || 0;
    document.getElementById('closedCount').textContent   = (summary.rejected || 0) + (summary.noResponse || 0);
}

/* ── Request details panel ───────────────────────────── */
function renderDetails(request, queueState) {
    document.getElementById('pageTitle').textContent = `${escapeHtml(request.bloodGroup)} রক্তের রিকোয়েস্ট`;
    document.getElementById('requestMeta').textContent =
        `${escapeHtml(request.district || request.location)} জেলা • ${formatDate(request.createdAt)}`;

    const badge = document.getElementById('requestStatusBadge');
    const statusMap = {
        completed: ['badge-accepted', '✅ Completed'],
        active:    ['badge-active',   '🔴 Active'],
        queued:    ['badge-queued',   '⏳ Queued'],
        exhausted: ['badge-rejected', '❌ No Donor'],
    };
    const [cls, text] = statusMap[queueState.status] || ['badge-queued', queueState.label];
    badge.className   = `badge ${cls}`;
    badge.textContent = text;

    document.getElementById('requestDetails').innerHTML = `
        <div class="detail-row"><dt>🏥 হাসপাতাল</dt><dd>${escapeHtml(request.hospitalName)}</dd></div>
        <div class="detail-row"><dt>📍 লোকেশন</dt><dd>${escapeHtml(request.location)}</dd></div>
        <div class="detail-row"><dt>🩸 রক্তের গ্রুপ</dt><dd><strong class="blood-tag">${escapeHtml(request.bloodGroup)}</strong></dd></div>
        <div class="detail-row"><dt>⏰ কখন লাগবে</dt><dd>${escapeHtml(request.neededTime)}</dd></div>
        <div class="detail-row"><dt>🏷️ রোগীর ধরন</dt><dd>${escapeHtml(request.patientDisease)}</dd></div>
        <div class="detail-row"><dt>📞 যোগাযোগ</dt><dd><a href="tel:${escapeHtml(request.contactNumber)}" class="phone-link">📱 ${escapeHtml(request.contactNumber)}</a></dd></div>
    `;
}

/* ── Donor list ──────────────────────────────────────── */
function renderDonors(donors, queueState) {
    const list = document.getElementById('donorList');

    if (!donors.length) {
        list.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔍</div>
                <p>${escapeHtml(queueState.message)}</p>
            </div>`;
        return;
    }

    list.innerHTML = donors.map((donor, idx) => {
        const dist        = donor.distanceKm != null ? `${Number(donor.distanceKm).toFixed(2)} km দূরে` : 'দূরত্ব অজানা';
        const timeInfo    = donor.respondedAt
            ? `সাড়া দিয়েছেন: ${formatDate(donor.respondedAt)}`
            : donor.notifiedAt
                ? `পাঠানো হয়েছে: ${formatDate(donor.notifiedAt)}`
                : 'অপেক্ষমান';
        const phoneHtml   = donor.phone
            ? `<a class="call-btn" href="tel:${escapeHtml(donor.phone)}">📞 কল করুন</a>`
            : '';
        const isActive    = donor.responseStatus === 'Pending';
        const liveStatus  = donor.donorLiveStatus === 'Available'
            ? '<span class="live-dot available"></span>Available'
            : '<span class="live-dot busy"></span>Busy';

        return `
        <div class="donor-card ${isActive ? 'card-active' : ''}" id="donor-${idx}">
            <div class="order-pill ${isActive ? 'pill-active' : ''}">${escapeHtml(String(donor.notifyOrder || '-'))}</div>
            <div class="donor-body">
                <div class="donor-top">
                    <h3 class="donor-name">${escapeHtml(donor.name)}</h3>
                    ${statusBadge(donor.responseStatus)}
                </div>
                <div class="donor-meta">
                    <span>📍 ${escapeHtml(donor.location || 'অজানা')}</span>
                    <span>📏 ${escapeHtml(dist)}</span>
                    <span>🕐 ${escapeHtml(timeInfo)}</span>
                    <span class="live-status">${liveStatus}</span>
                </div>
                ${phoneHtml}
            </div>
        </div>`;
    }).join('');
}

/* ── Main load ───────────────────────────────────────── */
async function loadStatus() {
    pollCount++;
    const donorList = document.getElementById('donorList');

    if (!token) {
        donorList.innerHTML = '<div class="error-box">❌ ট্র্যাকিং token পাওয়া যায়নি।</div>';
        stopPolling();
        return;
    }

    try {
        const res    = await fetch(`/api/request-status?token=${encodeURIComponent(token)}`);
        const result = await res.json();

        if (!result.success) {
            donorList.innerHTML = `<div class="error-box">❌ ${escapeHtml(result.message)}</div>`;
            document.getElementById('requestMeta').textContent = result.message;
            stopPolling();
            return;
        }

        const { request, summary, donors, queueState } = result.data;

        // Detect state change for animation flash
        if (lastQueueStatus && lastQueueStatus !== queueState.status) {
            flashBanner();
        }
        lastQueueStatus = queueState.status;

        renderQueueBanner(queueState, request);
        renderDetails(request, queueState);
        renderSummary(summary);
        renderDonors(donors, queueState);

        document.getElementById('lastUpdated').textContent =
            `আপডেট: ${new Date().toLocaleTimeString('bn-BD')}`;

        // Stop polling if terminal state
        if (queueState.status === 'completed' || queueState.status === 'exhausted') {
            stopPolling();
            showTerminalNotice(queueState);
        }

    } catch (err) {
        console.error('loadStatus error:', err);
        // Don't stop polling on network errors — retry
    }
}

function flashBanner() {
    const banner = document.getElementById('queueBanner');
    banner.style.transition = 'none';
    banner.style.transform  = 'scale(1.02)';
    setTimeout(() => {
        banner.style.transition = 'transform 0.4s ease';
        banner.style.transform  = 'scale(1)';
    }, 50);
}

function showTerminalNotice(queueState) {
    const notice = document.getElementById('terminalNotice');
    if (!notice) return;
    notice.textContent = queueState.status === 'completed'
        ? '✅ রক্তদাতা পাওয়া গেছে! এই page আর auto-refresh হবে না।'
        : '❌ এই জেলায় আর কোনো donor নেই। এই page আর auto-refresh হবে না।';
    notice.className = queueState.status === 'completed'
        ? 'terminal-notice notice-success'
        : 'terminal-notice notice-error';
    notice.classList.remove('hidden');
}

function stopPolling() {
    if (pollInterval) { clearInterval(pollInterval); pollInterval = null; }
}

/* ── Search & View Toggles ───────────────────────────── */
function initViews() {
    const params = new URLSearchParams(window.location.search);
    token = params.get('token') || '';
    const phoneParam = params.get('phone') || '';

    const searchContainer = document.getElementById('searchContainer');
    const trackingContainer = document.getElementById('trackingContainer');
    const navSearchBtn = document.getElementById('navSearchBtn');

    if (token) {
        searchContainer.classList.add('hidden');
        trackingContainer.classList.remove('hidden');
        navSearchBtn.classList.remove('hidden');
        
        loadStatus();
        if (!pollInterval) {
            pollCount = 0;
            pollInterval = setInterval(loadStatus, 5000);
        }
    } else {
        stopPolling();
        trackingContainer.classList.add('hidden');
        searchContainer.classList.remove('hidden');
        navSearchBtn.classList.add('hidden');

        if (phoneParam) {
            const phoneInput = document.getElementById('searchPhoneInput');
            if (phoneInput && !phoneInput.value) {
                phoneInput.value = phoneParam;
                searchRequests();
            }
        }
    }
}

async function searchRequests() {
    const phoneInput = document.getElementById('searchPhoneInput');
    const searchError = document.getElementById('searchError');
    const myRequestsWrapper = document.getElementById('myRequestsWrapper');
    const myRequestsList = document.getElementById('myRequestsList');
    const submitBtn = document.getElementById('searchSubmitBtn');

    const phone = (phoneInput.value || '').trim();
    if (!phone) {
        showSearchError('একটি মোবাইল নম্বর টাইপ করুন।');
        return;
    }

    searchError.classList.add('hidden');
    submitBtn.disabled = true;
    submitBtn.textContent = 'খোঁজা হচ্ছে...';

    try {
        const res = await fetch(`/api/my-requests?phone=${encodeURIComponent(phone)}`);
        const result = await res.json();

        if (!result.success) {
            showSearchError(result.message);
            myRequestsWrapper.classList.add('hidden');
            return;
        }

        const requests = result.data || [];
        if (requests.length === 0) {
            showSearchError('এই মোবাইল নম্বরের কোনো রক্তের আবেদন পাওয়া যায়নি।');
            myRequestsWrapper.classList.add('hidden');
            return;
        }

        renderRequestsList(requests);
    } catch (err) {
        console.error('Search request failed:', err);
        showSearchError('সার্ভারে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'অনুসন্ধান';
    }
}

function showSearchError(msg) {
    const searchError = document.getElementById('searchError');
    searchError.textContent = '❌ ' + msg;
    searchError.classList.remove('hidden');
}

function renderRequestsList(requests) {
    const myRequestsWrapper = document.getElementById('myRequestsWrapper');
    const myRequestsList = document.getElementById('myRequestsList');
    
    myRequestsList.innerHTML = requests.map(req => {
        let badgeCls = 'badge-queued';
        let badgeLabel = req.display_status;
        
        if (req.display_status === 'Active') {
            badgeCls = 'badge-active';
            badgeLabel = '🔴 Active';
        } else if (req.display_status === 'Completed') {
            badgeCls = 'badge-accepted';
            badgeLabel = '✅ Completed';
        } else if (req.display_status === 'Expired') {
            badgeCls = 'badge-rejected';
            badgeLabel = '⏰ Expired';
        } else if (req.display_status === 'Cancelled') {
            badgeCls = 'badge-rejected';
            badgeLabel = '❌ Cancelled';
        }

        return `
            <div class="request-item-card" onclick="trackRequest('${escapeHtml(req.tracking_token)}')">
                <div class="request-header">
                    <span class="blood-tag">${escapeHtml(req.blood_group)}</span>
                    <span class="badge ${badgeCls}">${badgeLabel}</span>
                </div>
                <div class="request-body">
                    <div style="font-weight: 700; color: var(--slate-900); margin-bottom: 4px;">🏥 ${escapeHtml(req.hospital_name)}</div>
                    <div class="muted small">📍 লোকেশন: ${escapeHtml(req.location)}</div>
                    <div class="muted small">⏰ প্রয়োজন: ${escapeHtml(req.needed_time)}</div>
                </div>
                <div class="request-footer">
                    <span>আবেদন: ${formatDate(req.created_at)}</span>
                    <span style="color: var(--blue); font-weight: 800;">ট্র্যাক করুন ➔</span>
                </div>
            </div>
        `;
    }).join('');

    myRequestsWrapper.classList.remove('hidden');
}

function trackRequest(trackingToken) {
    const newUrl = `${window.location.pathname}?token=${encodeURIComponent(trackingToken)}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
    initViews();
}

// Expose trackRequest globally for onclick attributes
window.trackRequest = trackRequest;

/* ── Boot / Setup ────────────────────────────────────── */
document.getElementById('searchSubmitBtn').addEventListener('click', searchRequests);
document.getElementById('searchPhoneInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchRequests();
});

const navSearchBtn = document.getElementById('navSearchBtn');
if (navSearchBtn) {
    navSearchBtn.addEventListener('click', () => {
        const newUrl = window.location.pathname;
        window.history.pushState({ path: newUrl }, '', newUrl);
        document.getElementById('searchPhoneInput').value = '';
        document.getElementById('searchError').classList.add('hidden');
        document.getElementById('myRequestsWrapper').classList.add('hidden');
        initViews();
    });
}

initViews();
window.addEventListener('popstate', initViews);
