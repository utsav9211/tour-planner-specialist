/* ==========================================================================
   SCROLL-REVEAL Module — fade-in elements on scroll
   ========================================================================== */

export function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.package-card, .service-card, .step, .policy-card, .section-header, .category-card, .team-card, .contact-card'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
}
