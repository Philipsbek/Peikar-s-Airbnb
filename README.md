# Peikar · Stays — Airbnb Host Landing Page

A landing page for **Peikar**, an Airbnb Superhost of vacation homes in Kuantan, Malaysia.
Built with [Astro](https://astro.build/) and styled with the *bella* warm design system,
recolored to the official Airbnb red (`#FF5A5F`).

Data (host info, listings, reviews, ratings, travels) was extracted from Peikar's public
Airbnb host profile.

## Features

- Hero with a villa photo + "Meet your host" card
- Trust strip (verified, rating, group size, languages)
- Grid of vacation-home listings with per-listing ratings
- About-the-host section
- Guest reviews
- Travel history
- Photo CTA banner
- Floating WhatsApp button with a prefilled enquiry message
- Responsive layout with a mobile burger menu

## Develop

```bash
npm install
npm run dev      # http://localhost:4330
npm run build    # static output in dist/
```

## Configure

- Host data, listings, reviews: `src/data/host.json`
- **WhatsApp number** (currently a placeholder — update before going live): the
  `whatsapp.number` field in `src/data/host.json`, international format, digits only
  (e.g. `60123456789`).

## Note

This page is compiled from a public Airbnb profile and is not affiliated with Airbnb, Inc.
