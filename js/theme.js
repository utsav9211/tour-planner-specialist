/* ==========================================================================
   THEME Module — Apply contextual theme based on page data-theme
   ========================================================================== */

export function initTheme() {
    /* The theme is set via data-theme on <body> by each page or by hero tab clicks.
       This module handles any page-load theme initialization needed. */
    const theme = document.body.dataset.theme;
    if (theme) {
        document.body.setAttribute('data-theme', theme);
    }
}
