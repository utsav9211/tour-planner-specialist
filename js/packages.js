/* ==========================================================================
   PACKAGES Module — filter buttons, wishlist toggle
   ========================================================================== */

export function initPackages() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.package-card');

    /* Category-specific hero quotes */
    const heroQuotes = {
        all:       'Travel is the only thing you buy that makes you richer.',
        corporate: 'Great companies are built by great teams — take yours on the journey.',
        leisure:   'Travel makes one modest. You see what a tiny place you occupy in the world.',
        couples:   'We travel not to escape life, but for life not to escape us.',
        education: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.'
    };
    const quoteTextEl = document.getElementById('heroQuoteText');

    /* Filter */
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.dataset.filter;

            /* --- Sync theme + hero tabs when filter button is clicked --- */
            if (cat !== 'all' && ['corporate','leisure','couples','education'].includes(cat)) {
                document.body.setAttribute('data-theme', cat);
                /* Sync hero tabs */
                const heroTab = document.querySelector(`.search-tab[data-theme="${cat}"]`);
                if (heroTab) {
                    document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
                    heroTab.classList.add('active');
                }
            } else if (cat === 'all') {
                document.body.removeAttribute('data-theme');
                document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
            }

            cards.forEach(card => {
                if (cat === 'all' || card.dataset.category === cat) {
                    card.style.display = '';
                    /* Ensure scroll-reveal doesn't keep card invisible */
                    card.classList.add('visible');
                    card.style.animation = 'none';
                    card.offsetHeight;
                    card.style.animation = '';
                } else {
                    card.style.display = 'none';
                }
            });

            /* Update "View All Packages" link to carry the active category */
            const viewAllLink = document.querySelector('a[href^="packages.html"]');
            if (viewAllLink) {
                viewAllLink.href = cat === 'all' ? 'packages.html' : `packages.html#${cat}`;
            }

            /* Update hero quote */
            if (quoteTextEl && heroQuotes[cat]) {
                quoteTextEl.style.opacity = '0';
                setTimeout(() => {
                    quoteTextEl.textContent = heroQuotes[cat];
                    quoteTextEl.style.opacity = '1';
                }, 250);
            }
        });
    });

    /* Wishlist */
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            btn.classList.toggle('active');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = btn.classList.contains('active')
                    ? 'fa-solid fa-heart'
                    : 'fa-regular fa-heart';
            }
        });
    });

    /* Dropdown nav → filter (only nav links, not package cards) */
    document.querySelectorAll('.dropdown-menu [data-category], .nav-links [data-category]').forEach(link => {
        link.addEventListener('click', () => {
            const cat = link.dataset.category;
            const targetBtn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
            if (targetBtn) {
                targetBtn.click();
            }
            /* Also set theme */
            if (cat && ['corporate','leisure','couples','education'].includes(cat)) {
                document.body.setAttribute('data-theme', cat);
            }
        });
    });

    /* URL hash support: auto-filter if #corporate, #leisure, etc. */
    const hash = window.location.hash.replace('#', '');
    if (hash && ['corporate','leisure','couples','education'].includes(hash)) {
        const targetBtn = document.querySelector(`.filter-btn[data-filter="${hash}"]`);
        if (targetBtn) targetBtn.click();
    }
}
