/* ==========================================================================
   STATS Module — Animated counter on scroll
   ========================================================================== */

export function initStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;
    let counted = false;

    function animateCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.dataset.target, 10);
            const suffix = stat.dataset.suffix || '+';
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(counter);
                }
                stat.textContent = Math.floor(current).toLocaleString('en-IN') + suffix;
            }, 16);
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counted) {
                counted = true;
                animateCounters();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
}
