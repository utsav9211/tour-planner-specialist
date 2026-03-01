/* ==========================================================================
   HERO Module — background slideshow, search tabs, theme switch, AI search
   ========================================================================== */

export function initHero() {
    const heroBgs = document.querySelectorAll('.hero-bg');
    if (!heroBgs.length) return;

    /* --- Background Slideshow --- */
    let currentSlide = 0;
    function nextSlide() {
        heroBgs[currentSlide]?.classList.remove('active');
        currentSlide = (currentSlide + 1) % heroBgs.length;
        heroBgs[currentSlide]?.classList.add('active');
    }
    setInterval(nextSlide, 5000);

    /* --- Search Tabs + Theming --- */
    const tabs = document.querySelectorAll('.search-tab');
    const heroTitle = document.querySelector('.hero-content h1');
    const heroSub = document.querySelector('.hero-content .hero-sub');

    const themeData = {
        corporate: {
            title: 'Empower Your Team with Unforgettable Corporate Journeys',
            sub: 'Off-site meetings, team dinners, incentive trips — planned to perfection.'
        },
        leisure: {
            title: 'Discover India\'s Hidden Gems & Beyond',
            sub: 'Family holidays, treks, pilgrimages, solo adventures — your way.'
        },
        couples: {
            title: 'Celebrate Love with Dream Getaways',
            sub: 'Honeymoons, anniversaries, romantic escapes — crafted for two.'
        },
        education: {
            title: 'Inspiring Minds Through Educational Expeditions',
            sub: 'Heritage tours, science visits, campus trips — learning beyond classrooms.'
        }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const theme = tab.dataset.theme;
            document.body.setAttribute('data-theme', theme);
            if (themeData[theme]) {
                if (heroTitle) heroTitle.textContent = themeData[theme].title;
                if (heroSub) heroSub.textContent = themeData[theme].sub;
            }

            /* --- Sync: filter packages section when hero tab is clicked --- */
            const filterBtn = document.querySelector(`.filter-btn[data-filter="${theme}"]`);
            if (filterBtn) {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                filterBtn.classList.add('active');
                document.querySelectorAll('.package-card').forEach(card => {
                    if (card.dataset.category === theme) {
                        card.style.display = '';
                        card.style.animation = 'none';
                        card.offsetHeight; /* trigger reflow */
                        card.style.animation = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });

    /* --- AI Search --- */
    const aiForm = document.getElementById('aiSearchForm');
    aiForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const q = aiForm.querySelector('input')?.value.trim();
        if (q) {
            alert(`🔍 Searching packages for: "${q}"\n\nOur AI will find the best matches for you!`);
        }
    });
}
