// Google Analytics 4 (gtag.js) bootstrap — served first-party from our own
// origin so it satisfies the strict CSP (script-src 'self') with no inline
// script. The gtag loader itself is allow-listed via
// script-src https://www.googletagmanager.com. Loaded in production only
// (see src/components/GoogleAnalytics.astro).
window.dataLayer = window.dataLayer || [];
window.gtag = function gtag() {
  window.dataLayer.push(arguments);
};
window.gtag('js', new Date());
window.gtag('config', 'G-1KPY258CJ4');
