// Themed page-change loader: fades out when the page is ready, and reappears
// while navigating to another internal page (full page loads on this static site).
const loader = document.getElementById('page-loader');

const hide = () => loader?.classList.add('is-hidden');
const show = () => loader?.classList.remove('is-hidden');

// Fade out as soon as the page is interactive — no artificial hold — so the
// overlay never delays the Largest Contentful Paint. (The transition feel comes
// from showing the loader on the page you navigate AWAY from.)
const reveal = () => requestAnimationFrame(hide);
if (document.readyState === 'interactive' || document.readyState === 'complete') reveal();
else window.addEventListener('DOMContentLoaded', reveal);

// Safety: never let the loader get stuck.
window.setTimeout(hide, 4000);

// Show the loader when the user navigates to another page on this site.
document.addEventListener('click', (event) => {
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const anchor = (event.target as Element)?.closest?.('a');
  if (!anchor) return;

  const href = anchor.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
  if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;
  if ((anchor.getAttribute('rel') || '').includes('external')) return;

  let url: URL;
  try {
    url = new URL(anchor.href, location.href);
  } catch {
    return;
  }
  if (url.origin !== location.origin) return;
  // In-page hash link (same path) — no navigation, so no loader.
  if (url.pathname === location.pathname && url.hash) return;

  show();
});

// Back/forward and bfcache handling.
window.addEventListener('pagehide', show);
window.addEventListener('pageshow', (event) => {
  if ((event as PageTransitionEvent).persisted) hide();
});
