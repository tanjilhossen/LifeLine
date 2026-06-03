document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const role = document.getElementById('userRole').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const submitBtn = document.getElementById('loginSubmitBtn');

    // Button loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <span class="btn-loader">
            <span class="btn-loader-dot"></span>
            <span class="btn-loader-dot"></span>
            <span class="btn-loader-dot"></span>
        </span>
    `;

    // ডোনার বা হসপিটাল লগিন API কল
    const endpoint = role === 'donor' ? '/api/donor/login' : '/api/hospital/login';

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        
        const result = await response.json();

        if (result.success) {
            // ব্রাউজারের মেমোরিতে ইউজারের ডেটা সেভ রাখা
            localStorage.setItem('userRole', role);
            if (role === 'donor') localStorage.setItem('userData', JSON.stringify(result.donorData));
            if (role === 'hospital') localStorage.setItem('userData', JSON.stringify(result.hospitalData));

            // ✅ Premium top-right success toast (center modal নয়)
            showLoginSuccessToast(result.message || 'স্বাগতম! ড্যাশবোর্ডে যাচ্ছেন...');

            // Button success state
            submitBtn.innerHTML = '✓ সফল হয়েছে!';
            submitBtn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
            submitBtn.style.boxShadow = '0 6px 20px rgba(16,185,129,0.4)';

            // Redirect after brief delay
            setTimeout(() => {
                if (role === 'donor') {
                    window.location.href = '/donor-dashboard.html';
                } else if (role === 'hospital') {
                    window.location.href = '/hospital-dashboard.html';
                }
            }, 1800);

        } else {
            // Error toast (উপরে ডানে)
            showToast(result.message || 'ইমেইল বা পাসওয়ার্ড সঠিক নয়।', 'error');

            // Shake animation on form
            const card = document.querySelector('.login-card');
            if (card) {
                card.style.animation = 'none';
                card.offsetHeight; // reflow
                card.style.animation = 'shakeForm 0.5s ease';
            }

            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'লগিন করুন →';
            submitBtn.style.background = '';
            submitBtn.style.boxShadow = '';
        }
    } catch (error) {
        showToast('সার্ভারে কানেক্ট করা যাচ্ছে না। আবার চেষ্টা করুন।', 'error');
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'লগিন করুন →';
        submitBtn.style.background = '';
        submitBtn.style.boxShadow = '';
    }
});

/**
 * Premium success toast — top-right corner, LifeLine branding
 */
function showLoginSuccessToast(message) {
    // Remove existing if any
    const existing = document.getElementById('llLoginSuccessToast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'llLoginSuccessToast';
    toast.innerHTML = `
        <style>
            #llLoginSuccessToast {
                position: fixed;
                top: 24px;
                right: 24px;
                z-index: 999999;
                display: flex;
                align-items: center;
                gap: 14px;
                background: linear-gradient(135deg, rgba(6,11,24,0.97), rgba(15,23,42,0.97));
                border: 1px solid rgba(16,185,129,0.35);
                border-left: 4px solid #10b981;
                border-radius: 16px;
                padding: 16px 20px;
                min-width: 320px;
                max-width: 400px;
                box-shadow:
                    0 20px 40px rgba(0,0,0,0.5),
                    0 0 0 1px rgba(16,185,129,0.15),
                    0 0 40px rgba(16,185,129,0.08);
                backdrop-filter: blur(24px);
                -webkit-backdrop-filter: blur(24px);
                font-family: 'Hind Siliguri', 'Inter', sans-serif;
                animation: llSuccessSlideIn 0.5s cubic-bezier(0.16,1,0.3,1) both;
                cursor: pointer;
            }
            #llLoginSuccessToast.hide {
                animation: llSuccessSlideOut 0.4s cubic-bezier(0.4,0,1,1) both;
            }
            @keyframes llSuccessSlideIn {
                from { opacity: 0; transform: translateX(110%) scale(0.92); }
                to   { opacity: 1; transform: translateX(0) scale(1); }
            }
            @keyframes llSuccessSlideOut {
                from { opacity: 1; transform: translateX(0) scale(1); }
                to   { opacity: 0; transform: translateX(110%) scale(0.92); }
            }
            .lls-icon-wrap {
                width: 46px; height: 46px; flex-shrink: 0;
                background: linear-gradient(135deg, #059669, #10b981);
                border-radius: 13px;
                display: flex; align-items: center; justify-content: center;
                box-shadow: 0 4px 16px rgba(16,185,129,0.4);
                animation: llScaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.15s both;
            }
            @keyframes llScaleIn {
                from { transform: scale(0) rotate(-20deg); }
                to   { transform: scale(1) rotate(0deg); }
            }
            .lls-icon-wrap svg {
                width: 24px; height: 24px;
                stroke: #fff; stroke-width: 2.5;
                fill: none;
                animation: llCheckDraw 0.4s ease 0.3s both;
                stroke-dasharray: 40;
                stroke-dashoffset: 40;
            }
            @keyframes llCheckDraw {
                to { stroke-dashoffset: 0; }
            }
            .lls-text { flex: 1; min-width: 0; }
            .lls-title {
                font-size: 0.88rem; font-weight: 800;
                color: #6ee7b7; letter-spacing: 0.3px;
                margin-bottom: 3px; text-transform: uppercase;
                font-family: 'Inter', sans-serif;
            }
            .lls-msg {
                font-size: 0.9rem; color: rgba(255,255,255,0.82);
                line-height: 1.4; font-weight: 500;
            }
            .lls-redirect {
                font-size: 0.75rem; color: rgba(255,255,255,0.4);
                margin-top: 4px;
                display: flex; align-items: center; gap: 5px;
            }
            .lls-dot-anim {
                display: inline-flex; gap: 3px; align-items: center;
            }
            .lls-dot-anim span {
                width: 4px; height: 4px; border-radius: 50%;
                background: #10b981;
                animation: lsDotBounce 1.2s ease-in-out infinite;
            }
            .lls-dot-anim span:nth-child(2) { animation-delay: 0.15s; }
            .lls-dot-anim span:nth-child(3) { animation-delay: 0.3s; }
            @keyframes lsDotBounce {
                0%,100% { opacity: 0.3; transform: scaleY(0.6); }
                50% { opacity: 1; transform: scaleY(1); }
            }
            .lls-progress {
                position: absolute; bottom: 0; left: 0;
                height: 3px; border-radius: 0 0 0 16px;
                background: linear-gradient(90deg, #10b981, #34d399);
                animation: llProgressBar 1.8s linear forwards;
            }
            @keyframes llProgressBar {
                from { width: 100%; }
                to   { width: 0%; }
            }
            @media (max-width: 480px) {
                #llLoginSuccessToast {
                    top: 12px; right: 12px; left: 12px;
                    min-width: 0;
                    animation-name: llSuccessSlideDown;
                }
                @keyframes llSuccessSlideDown {
                    from { opacity: 0; transform: translateY(-80px) scale(0.95); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }
            }
        </style>

        <div class="lls-icon-wrap">
            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
        <div class="lls-text">
            <div class="lls-title">✦ লগিন সফল হয়েছে</div>
            <div class="lls-msg">${message}</div>
            <div class="lls-redirect">
                <div class="lls-dot-anim">
                    <span></span><span></span><span></span>
                </div>
                ড্যাশবোর্ডে যাচ্ছেন
            </div>
        </div>
        <div class="lls-progress"></div>
    `;

    document.body.appendChild(toast);

    // Click to dismiss
    toast.addEventListener('click', () => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 400);
    });

    // Auto remove
    setTimeout(() => {
        if (document.getElementById('llLoginSuccessToast')) {
            toast.classList.add('hide');
            setTimeout(() => toast.remove(), 400);
        }
    }, 2200);
}
