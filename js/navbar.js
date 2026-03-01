/* ==========================================================================
   NAVBAR Module — scroll effect, hamburger, dropdowns, active link
   ========================================================================== */

export function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const dropdowns = document.querySelectorAll('.dropdown');

    /* Scroll effect */
    window.addEventListener('scroll', () => {
        navbar?.classList.toggle('scrolled', window.scrollY > 50);
    });

    /* Hamburger */
    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks?.classList.toggle('active');
    });

    /* Mobile dropdown toggles */
    dropdowns.forEach(dd => {
        dd.querySelector(':scope > a')?.addEventListener('click', (e) => {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                dd.classList.toggle('open');
            }
        });
    });

    /* Close menu on link click */
    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                hamburger?.classList.remove('active');
                navLinks?.classList.remove('active');
            }
        });
    });

    /* Active page highlight */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks?.querySelectorAll(':scope > li > a').forEach(a => {
        const href = a.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            a.classList.add('active');
        }
    });
}
