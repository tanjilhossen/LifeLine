/**
 * nav-mobile.js — LifeLine Mobile Hamburger Navigation
 * Reusable across all pages. Include after notify.js.
 * Injects hamburger button + mobile drawer into any nav.
 */
(function () {
    'use strict';

    /* ── INJECT STYLES ── */
    function injectNavMobileStyles() {
        if (document.getElementById('navMobileStyles')) return;
        const style = document.createElement('style');
        style.id = 'navMobileStyles';
        style.textContent = `
            /* Hamburger button */
            #navHamburger {
                display: none;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 5px;
                width: 42px;
                height: 42px;
                background: rgba(255, 255, 255, 0.07);
                border: 1px solid rgba(255, 255, 255, 0.13);
                border-radius: 10px;
                cursor: pointer;
                padding: 0;
                transition: background 0.2s, border-color 0.2s;
                flex-shrink: 0;
            }
            #navHamburger:hover {
                background: rgba(255, 255, 255, 0.13);
                border-color: rgba(255, 255, 255, 0.25);
            }
            #navHamburger .bar {
                display: block;
                width: 20px;
                height: 2px;
                background: rgba(255, 255, 255, 0.9);
                border-radius: 2px;
                transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                            opacity 0.2s ease,
                            width 0.25s ease;
                transform-origin: center;
            }
            #navHamburger.open .bar:nth-child(1) {
                transform: translateY(7px) rotate(45deg);
            }
            #navHamburger.open .bar:nth-child(2) {
                opacity: 0;
                width: 0;
            }
            #navHamburger.open .bar:nth-child(3) {
                transform: translateY(-7px) rotate(-45deg);
            }

            /* Mobile drawer overlay */
            #navMobileDrawer {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 9998;
            }
            #navMobileDrawer.open {
                display: block;
            }

            /* Backdrop */
            #navDrawerBackdrop {
                position: absolute;
                inset: 0;
                background: rgba(6, 11, 24, 0.6);
                backdrop-filter: blur(6px);
                -webkit-backdrop-filter: blur(6px);
                animation: backdropFadeIn 0.3s ease both;
            }
            @keyframes backdropFadeIn {
                from { opacity: 0; }
                to   { opacity: 1; }
            }

            /* Drawer panel */
            #navDrawerPanel {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                background: rgba(10, 15, 30, 0.97);
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(24px);
                -webkit-backdrop-filter: blur(24px);
                padding: 0 1.25rem 1.5rem;
                transform: translateY(-100%);
                transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                z-index: 9999;
            }
            #navMobileDrawer.open #navDrawerPanel {
                transform: translateY(0);
            }

            /* Drawer header row */
            #navDrawerHeader {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 70px;
            }
            #navDrawerLogo {
                display: flex;
                align-items: center;
                gap: 10px;
                text-decoration: none;
            }
            .drawer-logo-icon {
                width: 38px;
                height: 38px;
                background: linear-gradient(135deg, #be123c, #e11d48);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                box-shadow: 0 4px 14px rgba(225, 29, 72, 0.4);
            }
            .drawer-logo-text {
                font-family: 'Inter', sans-serif;
                font-size: 1.4rem;
                font-weight: 900;
                color: #fff;
            }
            .drawer-logo-text span { color: #e11d48; }

            #navDrawerClose {
                width: 36px;
                height: 36px;
                background: rgba(255, 255, 255, 0.07);
                border: 1px solid rgba(255, 255, 255, 0.12);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-size: 1.2rem;
                color: rgba(255, 255, 255, 0.7);
                transition: all 0.2s;
            }
            #navDrawerClose:hover {
                background: rgba(225, 29, 72, 0.15);
                border-color: rgba(225, 29, 72, 0.3);
                color: #e11d48;
            }

            /* Divider */
            .drawer-divider {
                height: 1px;
                background: rgba(255, 255, 255, 0.07);
                margin-bottom: 1.25rem;
            }

            /* Drawer nav links */
            #navDrawerLinks {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .drawer-nav-link {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 13px 18px;
                border-radius: 14px;
                border: 1px solid rgba(255, 255, 255, 0.08);
                background: rgba(255, 255, 255, 0.04);
                color: rgba(255, 255, 255, 0.85);
                text-decoration: none;
                font-family: 'Hind Siliguri', 'Inter', sans-serif;
                font-size: 1rem;
                font-weight: 600;
                transition: all 0.22s;
                animation: drawerLinkIn 0.35s ease both;
            }
            .drawer-nav-link:nth-child(1) { animation-delay: 0.06s; }
            .drawer-nav-link:nth-child(2) { animation-delay: 0.1s; }
            .drawer-nav-link:nth-child(3) { animation-delay: 0.14s; }
            .drawer-nav-link:nth-child(4) { animation-delay: 0.18s; }
            .drawer-nav-link:nth-child(5) { animation-delay: 0.22s; }

            @keyframes drawerLinkIn {
                from { opacity: 0; transform: translateX(-16px); }
                to   { opacity: 1; transform: translateX(0); }
            }
            .drawer-nav-link:hover {
                background: rgba(255, 255, 255, 0.09);
                border-color: rgba(255, 255, 255, 0.2);
                color: #fff;
                transform: translateX(4px);
            }
            .drawer-nav-link.drawer-link-red {
                background: linear-gradient(135deg, rgba(190, 18, 60, 0.2), rgba(225, 29, 72, 0.15));
                border-color: rgba(225, 29, 72, 0.3);
                color: #fca5a5;
            }
            .drawer-nav-link.drawer-link-red:hover {
                background: linear-gradient(135deg, rgba(190, 18, 60, 0.35), rgba(225, 29, 72, 0.3));
                border-color: rgba(225, 29, 72, 0.5);
                color: #fff;
            }
            .drawer-nav-link.drawer-link-green {
                background: rgba(16, 185, 129, 0.08);
                border-color: rgba(16, 185, 129, 0.2);
                color: #6ee7b7;
            }
            .drawer-nav-link.drawer-link-green:hover {
                background: rgba(16, 185, 129, 0.18);
                border-color: rgba(16, 185, 129, 0.4);
                color: #fff;
            }
            .drawer-link-icon { font-size: 1.2rem; flex-shrink: 0; }

            /* Language toggle in drawer */
            .drawer-lang-row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 18px;
                margin-top: 10px;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.07);
                border-radius: 14px;
                animation: drawerLinkIn 0.35s ease 0.26s both;
            }
            .drawer-lang-label {
                font-size: 0.85rem;
                color: rgba(255, 255, 255, 0.5);
                font-family: 'Inter', sans-serif;
            }
            .drawer-lang-toggle {
                display: flex;
                gap: 6px;
            }
            .drawer-lang-btn {
                padding: 6px 14px;
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                background: rgba(255, 255, 255, 0.05);
                color: rgba(255, 255, 255, 0.6);
                font-size: 0.82rem;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.2s;
                font-family: 'Hind Siliguri', sans-serif;
            }
            .drawer-lang-btn.active {
                background: linear-gradient(135deg, #be123c, #e11d48);
                border-color: transparent;
                color: #fff;
                box-shadow: 0 2px 10px rgba(225, 29, 72, 0.3);
            }
            .drawer-lang-btn:hover:not(.active) {
                background: rgba(255, 255, 255, 0.1);
                color: #fff;
            }

            /* Show hamburger at mobile */
            @media (max-width: 768px) {
                #navHamburger {
                    display: flex;
                }
            }
        `;
        document.head.appendChild(style);
    }

    /* ── BUILD DRAWER HTML ── */
    function buildDrawer(links) {
        const drawer = document.createElement('div');
        drawer.id = 'navMobileDrawer';
        drawer.setAttribute('role', 'dialog');
        drawer.setAttribute('aria-modal', 'true');
        drawer.setAttribute('aria-label', 'মোবাইল নেভিগেশন মেনু');

        const currentLang = localStorage.getItem('ll_lang') || 'bn';

        drawer.innerHTML = `
            <div id="navDrawerBackdrop"></div>
            <div id="navDrawerPanel">
                <div id="navDrawerHeader">
                    <a href="/" id="navDrawerLogo">
                        <div class="drawer-logo-icon">🩸</div>
                        <span class="drawer-logo-text">Life<span>Line</span></span>
                    </a>
                    <button id="navDrawerClose" aria-label="মেনু বন্ধ করুন" title="বন্ধ করুন">✕</button>
                </div>
                <div class="drawer-divider"></div>
                <nav id="navDrawerLinks">
                    ${links.map(l => `
                        <a href="${l.href}" class="drawer-nav-link ${l.cls || ''}" id="${l.id || ''}">
                            <span class="drawer-link-icon">${l.icon}</span>
                            <span>${l.label}</span>
                        </a>
                    `).join('')}
                </nav>
                <div class="drawer-lang-row">
                    <span class="drawer-lang-label">ভাষা / Language</span>
                    <div class="drawer-lang-toggle">
                        <button class="drawer-lang-btn ${currentLang === 'bn' ? 'active' : ''}" id="drawerLangBn" aria-label="বাংলা">বাং</button>
                        <button class="drawer-lang-btn ${currentLang === 'en' ? 'active' : ''}" id="drawerLangEn" aria-label="English">EN</button>
                    </div>
                </div>
            </div>
        `;
        return drawer;
    }

    /* ── OPEN / CLOSE ── */
    function openDrawer() {
        const drawer = document.getElementById('navMobileDrawer');
        const btn = document.getElementById('navHamburger');
        if (!drawer) return;
        drawer.classList.add('open');
        btn && btn.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        const drawer = document.getElementById('navMobileDrawer');
        const btn = document.getElementById('navHamburger');
        if (!drawer) return;
        drawer.classList.remove('open');
        btn && btn.classList.remove('open');
        document.body.style.overflow = '';
    }

    /* ── INIT ── */
    function init() {
        injectNavMobileStyles();

        const navInner = document.querySelector('.nav-inner');
        if (!navInner) return;

        /* Build hamburger button */
        const hamburger = document.createElement('button');
        hamburger.id = 'navHamburger';
        hamburger.setAttribute('aria-label', 'মেনু খুলুন');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.innerHTML = `
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        `;
        navInner.appendChild(hamburger);

        /* Default nav links — pages can override window.NAV_LINKS */
        const defaultLinks = window.NAV_LINKS || [
            { href: '/doctors.html', icon: '🩺', label: 'ডাক্তার সিরিয়াল', cls: 'drawer-link-green', id: 'drawerDoctors' },
            { href: '/blood-request.html', icon: '🩸', label: 'রক্তের আবেদন', cls: 'drawer-link-red', id: 'drawerBlood' },
            { href: '/hospital-beds.html', icon: '🏥', label: 'হাসপাতাল বেড', id: 'drawerHospital' },
            { href: '/apply.html', icon: '📝', label: 'নিবন্ধন করুন', id: 'drawerApply' },
            { href: '/login.html', icon: '🔐', label: 'লগিন করুন', cls: 'drawer-link-red', id: 'drawerLogin' },
        ];

        const drawer = buildDrawer(defaultLinks);
        document.body.appendChild(drawer);

        /* Events */
        hamburger.addEventListener('click', openDrawer);

        document.getElementById('navDrawerClose').addEventListener('click', closeDrawer);
        document.getElementById('navDrawerBackdrop').addEventListener('click', closeDrawer);

        /* Close on link click */
        document.querySelectorAll('.drawer-nav-link').forEach(a => {
            a.addEventListener('click', closeDrawer);
        });

        /* Language toggle in drawer */
        document.getElementById('drawerLangBn')?.addEventListener('click', () => {
            if (window.setLanguage) window.setLanguage('bn');
            updateDrawerLangBtns('bn');
        });
        document.getElementById('drawerLangEn')?.addEventListener('click', () => {
            if (window.setLanguage) window.setLanguage('en');
            updateDrawerLangBtns('en');
        });

        /* Escape key */
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeDrawer();
        });

        /* Sync hamburger aria-expanded */
        const observer = new MutationObserver(() => {
            const isOpen = document.getElementById('navMobileDrawer')?.classList.contains('open');
            hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
        observer.observe(document.getElementById('navMobileDrawer'), { attributes: true });
    }

    function updateDrawerLangBtns(lang) {
        document.getElementById('drawerLangBn')?.classList.toggle('active', lang === 'bn');
        document.getElementById('drawerLangEn')?.classList.toggle('active', lang === 'en');
        /* Also update navbar lang toggle if it exists */
        document.getElementById('langBtnBn')?.classList.toggle('active', lang === 'bn');
        document.getElementById('langBtnEn')?.classList.toggle('active', lang === 'en');
    }

    /* Expose for external use */
    window.navMobile = { open: openDrawer, close: closeDrawer, updateLangBtns: updateDrawerLangBtns };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
