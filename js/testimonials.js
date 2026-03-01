/* ==========================================================================
   TESTIMONIALS Module — slider with responsive cardsPerView
   ========================================================================== */

export function initTestimonials() {
    const track = document.querySelector('.testimonial-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const dotsContainer = document.querySelector('.testimonial-dots');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    if (!track || !cards.length) return;

    let currentIndex = 0;
    let cardsPerView = getCardsPerView();

    function getCardsPerView() {
        if (window.innerWidth >= 1000) return 3;
        if (window.innerWidth >= 700) return 2;
        return 1;
    }

    function totalPages() {
        return Math.max(cards.length - cardsPerView + 1, 1);
    }

    function buildDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalPages(); i++) {
            const dot = document.createElement('button');
            dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Slide ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsContainer.appendChild(dot);
        }
    }

    function goTo(index) {
        currentIndex = Math.min(Math.max(index, 0), totalPages() - 1);
        const pct = (currentIndex * 100) / cardsPerView;
        track.style.transform = `translateX(-${pct}%)`;
        dotsContainer?.querySelectorAll('.testimonial-dot').forEach((d, i) => {
            d.classList.toggle('active', i === currentIndex);
        });
    }

    prevBtn?.addEventListener('click', () => goTo(currentIndex - 1));
    nextBtn?.addEventListener('click', () => goTo(currentIndex + 1));

    buildDots();

    window.addEventListener('resize', () => {
        cardsPerView = getCardsPerView();
        buildDots();
        goTo(Math.min(currentIndex, totalPages() - 1));
    });

    /* Auto-rotate */
    setInterval(() => goTo((currentIndex + 1) % totalPages()), 6000);
}
