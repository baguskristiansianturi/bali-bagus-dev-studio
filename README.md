# Bali Bagus Dev Studio — Frontend V2

Frontend foundation for Bali Bagus Dev Studio.

## Visual direction
The original monochrome visual system is preserved:
- black / white / soft grey
- restrained typography
- subtle borders
- soft motion
- responsive layouts
- lightweight vanilla HTML/CSS/JS

## V2.2 additions
- Added Website Collection with category-driven demo inventory, including multiple Barbershop concepts.
- Added commerce-style Store expansion for website templates, digital products, software and hardware.
- Added product detail FAQ, WhatsApp inquiry CTA, live-preview presentation and shipping choice foundation.
- Added account/login foundation and review eligibility based on completed/verified order states.
- Added campaign landing page separate from the homepage.
- Added subtle radius, hover, motion and local hero artwork while preserving the existing visual DNA.
- Added checkout address/shipping fields and production-ready backend seams.

## V2.1 additions
- Hardened cart/localStorage handling and quantity controls
- Added consistent SEO metadata, canonical URLs, Open Graph, Twitter/X metadata
- Added favicon, robots.txt and sitemap.xml
- Added skip-navigation fixes and mobile menu accessibility states
- Corrected backend draft syntax without expanding backend scope

## V2 additions
- Website packages from ~Rp1.25M to Rp27M starting price
- Package comparison and process
- Demo website showcase with custom flow
- Client website publication page with permission rules
- Expanded project brief
- Shared accessible navigation/footer
- Inline SVG icon system
- Reduced-motion support
- Skip navigation and keyboard focus
- Legal page placeholders
- Link and JavaScript syntax checks

## Current architecture
HTML + CSS + vanilla JavaScript. Prototype state uses localStorage.

## Important
This is still a frontend build until backend, payment, email/CRM, secure delivery, admin authentication, production domain, legal review, security and QA are completed.

Never treat localStorage payment/order status as real payment status.

## Current checkpoint
V2.2 — experience expansion on the original V2.1 visual foundation. Production authentication, payment, shipping APIs, WhatsApp automation and real-time reviews remain backend work. Backend remains deferred until frontend launch readiness is accepted.

## Recommended next version
V2.2 — visual QA and production-content refinement, then V3 — backend architecture and production integrations:
- database
- admin
- products/packages CRUD
- orders
- booking
- contact/CRM
- payment gateway + verified webhook
- secure digital delivery
- email notifications
- analytics
- authentication/authorization

See `BALIBAGUS_DEV_MASTER_PROJECT_V2.md` for the full project checkpoint and launch roadmap.


## Launch flow — website packages

Current customer journey:

`Website Packages → Package Selection → Package Collection → Category / Template → Website Experience → Order Form → Account Checkout OR WhatsApp`

### WhatsApp configuration
The frontend uses `window.BB_WHATSAPP_NUMBER` when available. Replace the fallback number in `assets/js/app.js` before production, using international format without `+`, spaces, or dashes. WhatsApp supports click-to-chat links with pre-filled messages.

### Production dependencies before taking real payments
- Real authentication/session management
- Database-backed customer accounts and orders
- Server-side order creation
- Payment gateway + webhook verification
- Transactional email
- WhatsApp Business/API automation if automatic notifications are required
- Verified review eligibility from completed orders
- Anti-spam and server-side validation
- Final legal documents and refund terms
- Real social links, contact details and payment methods

The static frontend intentionally does not pretend these production systems are already live.
