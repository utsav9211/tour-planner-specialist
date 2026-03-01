/* ==========================================================================
   FORMS Module — Quote, newsletter, contact forms + back-to-top
   ========================================================================== */

export function initForms() {
    /* Quote form */
    const quoteForm = document.getElementById('quoteForm');
    quoteForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your quote request has been submitted. Our team will contact you within 24 hours. 🙏');
        quoteForm.reset();
    });

    /* Newsletter form */
    const nlForm = document.getElementById('newsletterForm');
    nlForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Welcome aboard! You\'ll receive our latest travel deals and India travel tips.');
        nlForm.reset();
    });

    /* Contact form */
    const contactForm = document.getElementById('contactForm');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! Our team will respond within 24 hours. 🙏');
        contactForm.reset();
    });

    /* Back to top */
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 300);
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
