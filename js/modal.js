/* ==========================================================================
   MODAL Module — Login / Register modal
   ========================================================================== */

export function initModal() {
    const loginBtn  = document.querySelector('.login-btn');
    const modal     = document.getElementById('loginModal');
    const closeBtn  = document.querySelector('.close-modal');
    if (!loginBtn || !modal) return;

    loginBtn.addEventListener('click', () => modal.classList.add('active'));
    closeBtn?.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    const form = document.getElementById('loginForm');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login successful! Welcome back to Tour Planner Specialist.');
        modal.classList.remove('active');
    });
}
