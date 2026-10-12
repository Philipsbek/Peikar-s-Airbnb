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

// WhatsApp click conversion tracking.
// Delegated listener fires a `whatsapp_click` event for any WhatsApp link
// (floating button, nav, hero, listing cards, stay pages, blog CTAs — all use
// wa.me). Mark `whatsapp_click` as a Key event in GA4 to count it as a
// conversion. Capture phase + closest() so clicks on inner icons/spans count,
// and it runs before the link opens.
document.addEventListener(
  'click',
  function (e) {
    var el = e.target;
    if (!el || !el.closest) return;
    var link = el.closest('a[href*="wa.me"]');
    if (!link || typeof window.gtag !== 'function') return;
    var label =
      (link.textContent || '').replace(/\s+/g, ' ').trim() ||
      link.getAttribute('aria-label') ||
      'WhatsApp';
    window.gtag('event', 'whatsapp_click', {
      link_text: label.slice(0, 80),
      link_url: link.href,
      page_path: location.pathname,
    });
  },
  true
);
