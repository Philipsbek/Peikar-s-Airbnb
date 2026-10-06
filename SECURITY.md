# Security — Eztidor Solution website

This is a **static site** (Astro → plain HTML/CSS/JS). There is **no backend, no
database, no login, and no user-input forms**, so the attack surface is small.
Below is what's already in place and what to do at launch.

## Already applied (in the code / build)

- **Content-Security-Policy** (production only) — restricts what can load/run:
  our own assets, Google Fonts, and the Google Maps embed only. Blocks injected
  scripts, other origins, plugins (`object-src 'none'`), etc. See `Base.astro`
  (meta, prod only) and `public/_headers` (HTTP header, stronger).
- **Security headers** via `public/_headers` (Netlify / Cloudflare Pages):
  HSTS, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY` +
  `frame-ancestors 'none'` (anti-clickjacking), `Referrer-Policy`,
  `Permissions-Policy` (camera/mic/geo/etc. disabled), `Cross-Origin-Opener-Policy`.
- **Safe external links** — every `target="_blank"` link uses
  `rel="noopener noreferrer"` (prevents tab-nabbing + referrer leakage).
- **No secrets in the repo** — no API keys/tokens/passwords; `.gitignore` blocks
  `.env*`, `*.key`, `*.pem`, `credentials.json`, etc.
- **No inline executable scripts** — all JS is bundled/first-party (`script-src 'self'`).
- **Ratings** are not marked up as structured data (avoids Google penalties).

## Do this at launch (host / account level)

1. **HTTPS everywhere** — use a host that issues free TLS (Netlify, Cloudflare
   Pages, Vercel, GitHub Pages + Cloudflare). HSTS is already set; consider
   submitting the domain to the HSTS preload list once stable.
2. **Put Cloudflare (free) in front of the domain** — gives you DDoS protection,
   a basic WAF, bot mitigation, and caching at no cost. Turn on "Always Use HTTPS"
   and "Automatic HTTPS Rewrites".
3. **Apply the headers on your host** — `public/_headers` covers Netlify &
   Cloudflare Pages automatically. For other hosts, use the equivalents below.
4. **Lock down accounts (defend against yourself):**
   - Enable **2FA** on GitHub, your hosting provider, and your **domain registrar**
     (domain hijacking is the most common real-world attack on small sites).
   - Turn on **branch protection** on `main` and **Dependabot alerts** in GitHub.
   - Never commit `.env` / keys (the `.gitignore` already guards this).
   - Keep dependencies current: run `npm update` / bump Astro periodically. The
     current `npm audit` findings are **build-time dev tools only** — they are not
     shipped to visitors and don't affect the live site.
5. **Verify after deploy** with <https://securityheaders.com> and
   <https://observatory.mozilla.org> (aim for A/A+), and test the CSP with the
   browser console open (no violations).

## Header config for other hosts

### Vercel — `vercel.json`
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Content-Security-Policy", "value": "default-src 'self'; base-uri 'self'; object-src 'none'; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self'; connect-src 'self'; frame-src https://www.google.com https://maps.google.com; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "geolocation=(), camera=(), microphone=(), payment=(), browsing-topics=()" }
      ]
    }
  ]
}
```

### Nginx
```nginx
add_header Content-Security-Policy "default-src 'self'; base-uri 'self'; object-src 'none'; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self'; connect-src 'self'; frame-src https://www.google.com https://maps.google.com; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" always;
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), camera=(), microphone=(), payment=(), browsing-topics=()" always;
```

### Apache (`.htaccess`)
```apache
Header always set Content-Security-Policy "default-src 'self'; base-uri 'self'; object-src 'none'; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self'; connect-src 'self'; frame-src https://www.google.com https://maps.google.com; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests"
Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "DENY"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "geolocation=(), camera=(), microphone=(), payment=(), browsing-topics=()"
```

## Reporting

Found a security issue? Email the site owner before disclosing publicly.
