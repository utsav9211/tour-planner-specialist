/* ==========================================================================
   ENQUIRY Module — Enquire button gate, validation, WhatsApp share
   ========================================================================== */

export function initEnquiry() {
    /* ---- State ---- */
    let isLoggedIn = sessionStorage.getItem('tps_logged_in') === 'true';
    let loggedUser = JSON.parse(sessionStorage.getItem('tps_user') || 'null');

    /* ---- Build the Enquiry Modal (injected once into <body>) ---- */
    const overlay = document.createElement('div');
    overlay.className = 'enquiry-overlay';
    overlay.id = 'enquiryModal';
    overlay.innerHTML = `
        <div class="enquiry-box">
            <div class="enquiry-header">
                <h3><i class="fa-solid fa-paper-plane"></i> Enquire Now</h3>
                <button class="close-enquiry"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="enquiry-package-name" id="enquiryPkgName"></div>

            <!-- Login required notice -->
            <div class="login-required-notice" id="loginNotice">
                <i class="fa-solid fa-lock"></i>
                <h4>Login Required</h4>
                <p>Please login or sign up to enquire about this package.</p>
                <button class="btn-login-now" id="loginForEnquiry"><i class="fa-solid fa-right-to-bracket"></i> Login / Sign Up</button>
            </div>

            <!-- Enquiry form (shown after login) -->
            <div class="enquiry-body" id="enquiryFormArea" style="display:none;">
                <form id="enquiryForm" novalidate>
                    <div class="form-group">
                        <label for="enqName">Full Name *</label>
                        <input type="text" id="enqName" placeholder="e.g. Rahul Sharma" required>
                        <div class="field-error" id="enqNameErr">Please enter your full name</div>
                    </div>
                    <div class="form-group">
                        <label for="enqEmail">Email (Gmail) *</label>
                        <input type="email" id="enqEmail" placeholder="yourname@gmail.com" required>
                        <div class="field-error" id="enqEmailErr">Please enter a valid Gmail address (e.g. name@gmail.com)</div>
                    </div>
                    <div class="form-group">
                        <label for="enqPhone">Phone (Indian) *</label>
                        <input type="tel" id="enqPhone" placeholder="+91 98765 43210" required>
                        <div class="field-error" id="enqPhoneErr">Enter a valid 10-digit Indian mobile number</div>
                    </div>
                    <div class="form-group">
                        <label for="enqPax">Number of People</label>
                        <input type="number" id="enqPax" placeholder="e.g. 25" min="1">
                    </div>
                    <div class="form-group">
                        <label for="enqMessage">Message (optional)</label>
                        <textarea id="enqMessage" placeholder="Any specific requirements..."></textarea>
                    </div>
                    <div class="enquiry-actions">
                        <button type="submit" class="btn-enquiry-submit"><i class="fa-solid fa-paper-plane"></i> Submit Enquiry</button>
                        <button type="button" class="btn-enquiry-whatsapp" id="enqWhatsApp"><i class="fa-brands fa-whatsapp"></i> WhatsApp</button>
                    </div>
                </form>
            </div>

            <!-- Success message -->
            <div class="enquiry-success" id="enquirySuccess">
                <i class="fa-solid fa-circle-check"></i>
                <h4>Enquiry Submitted!</h4>
                <p>Our team will contact you within 2 hours. You can also check your WhatsApp for details.</p>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    /* ---- References ---- */
    const modal         = document.getElementById('enquiryModal');
    const closeBtn      = modal.querySelector('.close-enquiry');
    const loginNotice   = document.getElementById('loginNotice');
    const loginForEnq   = document.getElementById('loginForEnquiry');
    const formArea      = document.getElementById('enquiryFormArea');
    const form          = document.getElementById('enquiryForm');
    const successDiv    = document.getElementById('enquirySuccess');
    const pkgNameEl     = document.getElementById('enquiryPkgName');

    /* Fields */
    const nameInput     = document.getElementById('enqName');
    const emailInput    = document.getElementById('enqEmail');
    const phoneInput    = document.getElementById('enqPhone');
    const paxInput      = document.getElementById('enqPax');
    const msgInput      = document.getElementById('enqMessage');

    /* ---- Validation helpers ---- */
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
    const indianPhoneRegex = /^(\+91[\s-]?)?[6-9]\d{9}$/;

    function validateField(input, regex, errId) {
        const val = input.value.trim();
        const errEl = document.getElementById(errId);
        if (!val || (regex && !regex.test(val))) {
            input.classList.add('invalid');
            input.classList.remove('valid');
            errEl.classList.add('visible');
            return false;
        }
        input.classList.remove('invalid');
        input.classList.add('valid');
        errEl.classList.remove('visible');
        return true;
    }

    /* Live validation */
    emailInput.addEventListener('input', () => validateField(emailInput, gmailRegex, 'enqEmailErr'));
    phoneInput.addEventListener('input', () => {
        /* Auto-format: remove non-digits except + */
        let v = phoneInput.value.replace(/[^\d+]/g, '');
        phoneInput.value = v;
        validateField(phoneInput, indianPhoneRegex, 'enqPhoneErr');
    });
    nameInput.addEventListener('input', () => {
        const errEl = document.getElementById('enqNameErr');
        if (nameInput.value.trim().length >= 2) {
            nameInput.classList.remove('invalid');
            nameInput.classList.add('valid');
            errEl.classList.remove('visible');
        }
    });

    /* ---- Open modal ---- */
    function openEnquiry(packageName) {
        pkgNameEl.textContent = packageName || '';
        successDiv.classList.remove('visible');
        successDiv.style.display = 'none';
        form.reset();
        modal.querySelectorAll('.invalid, .valid').forEach(el => el.classList.remove('invalid', 'valid'));
        modal.querySelectorAll('.field-error').forEach(el => el.classList.remove('visible'));

        if (isLoggedIn && loggedUser) {
            loginNotice.style.display = 'none';
            formArea.style.display = 'block';
            /* Pre-fill from logged-in user */
            if (loggedUser.name) nameInput.value = loggedUser.name;
            if (loggedUser.email) emailInput.value = loggedUser.email;
            if (loggedUser.phone) phoneInput.value = loggedUser.phone;
        } else {
            loginNotice.style.display = 'block';
            formArea.style.display = 'none';
        }
        modal.classList.add('active');
    }

    /* ---- Close modal ---- */
    function closeEnquiry() {
        modal.classList.remove('active');
    }
    closeBtn.addEventListener('click', closeEnquiry);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeEnquiry(); });

    /* ---- Intercept all Enquire / Book Now buttons ---- */
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-primary.btn-sm');
        if (!btn) return;
        const text = btn.textContent.trim().toLowerCase();
        if (text === 'enquire' || text === 'book now' || text === 'view details') {
            /* Only for package card buttons, not "View Packages" links */
            const card = btn.closest('.package-card');
            if (!card) return;
            e.preventDefault();
            const pkgName = card.querySelector('h3')?.textContent || 'Package';
            openEnquiry(pkgName);
        }
    });

    /* ---- Login for enquiry button ---- */
    loginForEnq.addEventListener('click', () => {
        closeEnquiry();
        /* Open the main login modal */
        const loginModal = document.getElementById('loginModal');
        if (loginModal) loginModal.classList.add('active');
    });

    /* ---- Override login form to track login state ---- */
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        /* Remove existing listeners by cloning */
        const newForm = loginForm.cloneNode(true);
        loginForm.parentNode.replaceChild(newForm, loginForm);

        newForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailOrPhone = newForm.querySelector('#loginEmail')?.value?.trim() || '';
            const password = newForm.querySelector('#loginPass')?.value?.trim() || '';

            if (!emailOrPhone || !password) {
                alert('Please fill in all fields.');
                return;
            }

            /* Validate email (Gmail) or Indian phone */
            const isValidEmail = gmailRegex.test(emailOrPhone);
            const isValidPhone = indianPhoneRegex.test(emailOrPhone);

            if (!isValidEmail && !isValidPhone) {
                alert('Please enter a valid Gmail address (e.g. name@gmail.com) or 10-digit Indian mobile number.');
                return;
            }

            /* Mark as logged in */
            isLoggedIn = true;
            loggedUser = {
                name: '',
                email: isValidEmail ? emailOrPhone : '',
                phone: isValidPhone ? emailOrPhone : ''
            };
            sessionStorage.setItem('tps_logged_in', 'true');
            sessionStorage.setItem('tps_user', JSON.stringify(loggedUser));

            /* Update UI */
            const loginBtn = document.querySelector('.login-btn');
            if (loginBtn) {
                loginBtn.innerHTML = '<i class="fa-solid fa-user-check"></i> Account';
                loginBtn.style.color = '#22c55e';
            }

            alert('Login successful! Welcome to Tour Planner Specialist. 🙏');
            document.getElementById('loginModal')?.classList.remove('active');
        });
    }

    /* Show logged-in state on page load */
    if (isLoggedIn) {
        const loginBtn = document.querySelector('.login-btn');
        if (loginBtn) {
            loginBtn.innerHTML = '<i class="fa-solid fa-user-check"></i> Account';
            loginBtn.style.color = '#22c55e';
        }
    }

    /* ---- Submit Enquiry (Save details) ---- */
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const v1 = validateField(nameInput, null, 'enqNameErr') && nameInput.value.trim().length >= 2;
        const v2 = validateField(emailInput, gmailRegex, 'enqEmailErr');
        const v3 = validateField(phoneInput, indianPhoneRegex, 'enqPhoneErr');

        if (!v1) {
            document.getElementById('enqNameErr').classList.add('visible');
            nameInput.classList.add('invalid');
        }
        if (!v1 || !v2 || !v3) return;

        /* Collect data */
        const enquiryData = {
            package: pkgNameEl.textContent,
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim(),
            pax: paxInput.value || 'Not specified',
            message: msgInput.value.trim() || 'No additional message',
            date: new Date().toLocaleString('en-IN'),
            id: 'ENQ-' + Date.now()
        };

        /* Save to localStorage (simulating saving to company) */
        const existing = JSON.parse(localStorage.getItem('tps_enquiries') || '[]');
        existing.push(enquiryData);
        localStorage.setItem('tps_enquiries', JSON.stringify(existing));

        /* Show success */
        formArea.style.display = 'none';
        successDiv.style.display = 'block';
        successDiv.classList.add('visible');

        console.log('📧 Enquiry saved:', enquiryData);
    });

    /* ---- WhatsApp Share ---- */
    document.getElementById('enqWhatsApp').addEventListener('click', () => {
        const v1 = validateField(nameInput, null, 'enqNameErr') && nameInput.value.trim().length >= 2;
        const v2 = validateField(emailInput, gmailRegex, 'enqEmailErr');
        const v3 = validateField(phoneInput, indianPhoneRegex, 'enqPhoneErr');

        if (!v1) {
            document.getElementById('enqNameErr').classList.add('visible');
            nameInput.classList.add('invalid');
        }
        if (!v1 || !v2 || !v3) return;

        const pkg = pkgNameEl.textContent || 'Package';
        const msg = encodeURIComponent(
            `🌍 *Tour Planner Specialist — New Enquiry*\n\n` +
            `📦 *Package:* ${pkg}\n` +
            `👤 *Name:* ${nameInput.value.trim()}\n` +
            `📧 *Email:* ${emailInput.value.trim()}\n` +
            `📞 *Phone:* ${phoneInput.value.trim()}\n` +
            `👥 *Pax:* ${paxInput.value || 'Not specified'}\n` +
            `💬 *Message:* ${msgInput.value.trim() || 'None'}\n\n` +
            `Sent via tourplannerspecialist.in`
        );

        /* WhatsApp company number */
        const whatsappURL = `https://wa.me/919876543210?text=${msg}`;
        window.open(whatsappURL, '_blank');

        /* Also save locally */
        const enquiryData = {
            package: pkg,
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim(),
            pax: paxInput.value || 'Not specified',
            message: msgInput.value.trim() || 'None',
            date: new Date().toLocaleString('en-IN'),
            id: 'ENQ-WA-' + Date.now(),
            via: 'whatsapp'
        };
        const existing = JSON.parse(localStorage.getItem('tps_enquiries') || '[]');
        existing.push(enquiryData);
        localStorage.setItem('tps_enquiries', JSON.stringify(existing));
    });
}
