/**
 * language.js — LifeLine Language Toggle System (Bangla / English)
 * Usage:
 *   1. Add data-bn="বাংলা" data-en="English" to any text element.
 *   2. Include this script. It auto-reads localStorage and applies the saved lang.
 *   3. Call window.setLanguage('bn') or window.setLanguage('en') to switch.
 *   4. Place lang toggle button elements with id="langBtnBn" and id="langBtnEn".
 */
(function () {
    'use strict';

    const STORAGE_KEY = 'll_lang';
    const DEFAULT_LANG = 'bn';

    /* ── INJECT TOGGLE BUTTON STYLES ── */
    function injectLangStyles() {
        if (document.getElementById('llLangStyles')) return;
        const s = document.createElement('style');
        s.id = 'llLangStyles';
        s.textContent = `
            .ll-lang-toggle {
                display: flex;
                align-items: center;
                gap: 4px;
                background: rgba(255, 255, 255, 0.06);
                border: 1px solid rgba(255, 255, 255, 0.12);
                border-radius: 10px;
                padding: 4px;
            }
            .ll-lang-btn {
                padding: 5px 12px;
                border-radius: 7px;
                border: none;
                background: transparent;
                color: rgba(255, 255, 255, 0.55);
                font-size: 0.78rem;
                font-weight: 700;
                cursor: pointer;
                font-family: 'Hind Siliguri', 'Inter', sans-serif;
                transition: all 0.2s;
                letter-spacing: 0.3px;
            }
            .ll-lang-btn.active {
                background: linear-gradient(135deg, #be123c, #e11d48);
                color: #fff;
                box-shadow: 0 2px 10px rgba(225, 29, 72, 0.35);
            }
            .ll-lang-btn:hover:not(.active) {
                color: #fff;
                background: rgba(255, 255, 255, 0.08);
            }
            @media (max-width: 768px) {
                .ll-lang-toggle { display: none; } /* hidden in nav — shown in drawer */
            }
        `;
        document.head.appendChild(s);
    }

    /* ── CREATE TOGGLE BUTTON IF NOT PRESENT ── */
    function ensureToggleButton() {
        if (document.getElementById('llLangToggle')) return;
        const navLinks = document.querySelector('.nav-links');
        if (!navLinks) return;

        const wrap = document.createElement('div');
        wrap.id = 'llLangToggle';
        wrap.className = 'll-lang-toggle';
        wrap.setAttribute('role', 'group');
        wrap.setAttribute('aria-label', 'ভাষা পরিবর্তন');
        wrap.innerHTML = `
            <button class="ll-lang-btn" id="langBtnBn" aria-label="বাংলায় দেখুন">বাং</button>
            <button class="ll-lang-btn" id="langBtnEn" aria-label="View in English">EN</button>
        `;

        /* Insert before first nav button */
        const firstBtn = navLinks.querySelector('a');
        if (firstBtn) {
            navLinks.insertBefore(wrap, firstBtn);
        } else {
            navLinks.appendChild(wrap);
        }

        document.getElementById('langBtnBn').addEventListener('click', () => setLanguage('bn'));
        document.getElementById('langBtnEn').addEventListener('click', () => setLanguage('en'));
    }

    /* ── APPLY LANGUAGE TO DOM ── */
    function applyLanguage(lang) {
        const attr = lang === 'en' ? 'data-en' : 'data-bn';
        const elements = document.querySelectorAll('[data-bn], [data-en]');
        elements.forEach(el => {
            const val = el.getAttribute(attr);
            if (val === null) return; // attribute not present for this lang
            /* Preserve child elements — only update text nodes */
            if (el.children.length === 0) {
                el.textContent = val;
            } else {
                /* For mixed content, update using innerHTML carefully */
                const htmlAttr = lang === 'en' ? 'data-en-html' : 'data-bn-html';
                const htmlVal = el.getAttribute(htmlAttr);
                if (htmlVal) el.innerHTML = htmlVal;
                else el.textContent = val;
            }
        });

        /* Sync placeholder attributes */
        document.querySelectorAll('[data-bn-placeholder], [data-en-placeholder]').forEach(el => {
            const key = lang === 'en' ? 'data-en-placeholder' : 'data-bn-placeholder';
            const val = el.getAttribute(key);
            if (val) el.setAttribute('placeholder', val);
        });

        /* Update html lang attribute */
        document.documentElement.lang = lang === 'en' ? 'en' : 'bn';

        /* Update toggle buttons */
        document.querySelectorAll('.ll-lang-btn, .drawer-lang-btn').forEach(btn => {
            if (btn.id === 'langBtnBn' || btn.id === 'drawerLangBn') {
                btn.classList.toggle('active', lang === 'bn');
            }
            if (btn.id === 'langBtnEn' || btn.id === 'drawerLangEn') {
                btn.classList.toggle('active', lang === 'en');
            }
        });
    }

    /* ── SET LANGUAGE (public API) ── */
    function setLanguage(lang) {
        if (lang !== 'bn' && lang !== 'en') lang = DEFAULT_LANG;
        localStorage.setItem(STORAGE_KEY, lang);
        applyLanguage(lang);
        /* Notify nav-mobile if open */
        if (window.navMobile) window.navMobile.updateLangBtns(lang);
    }

    /* ── GET CURRENT LANGUAGE ── */
    function getLanguage() {
        return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    }

    /* ── INIT ── */
    function init() {
        injectLangStyles();
        ensureToggleButton();
        applyLanguage(getLanguage());
    }

    /* Expose public API */
    window.setLanguage = setLanguage;
    window.getLanguage = getLanguage;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
