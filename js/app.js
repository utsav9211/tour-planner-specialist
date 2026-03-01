/* ==========================================================================
   APP.JS — Main entry point (shared across all pages)
   Imports and boots modules based on what's present in the DOM
   ========================================================================== */

import { initNavbar }       from './navbar.js';
import { initTheme }        from './theme.js';
import { initHero }         from './hero.js';
import { initPackages }     from './packages.js';
import { initTestimonials } from './testimonials.js';
import { initStats }        from './stats.js';
import { initScrollReveal } from './scroll-reveal.js';
import { initModal }        from './modal.js';
import { initChat }         from './chat.js';
import { initForms }        from './forms.js';
import { initEnquiry }      from './enquiry.js';

document.addEventListener('DOMContentLoaded', () => {
    /* Shared across every page */
    initNavbar();
    initTheme();
    initModal();
    initChat();
    initForms();
    initEnquiry();
    initScrollReveal();

    /* Conditional — only if sections exist on current page */
    if (document.querySelector('.hero'))                initHero();
    if (document.querySelector('.filter-btn'))          initPackages();
    if (document.querySelector('.testimonial-track'))   initTestimonials();
    if (document.querySelector('.stats'))               initStats();
});
