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
V2.2.1 — shell reliability and UI hierarchy refinement on the original V2.1 visual foundation. Production authentication, payment, shipping APIs, WhatsApp automation and real-time reviews remain backend work. Backend remains deferred until frontend launch readiness is accepted.

## V2.2.2 checkpoint — 2026-09-29
- Refined homepage conversion path with direct hero CTAs, website package preview, process, and factual value propositions.
- Reworked service capability map into Build / Grow / Support plus Discovery entry point.
- Clarified consultation journey from discovery through scope, quotation, and development without implying automatic project conversion.
- Improved package cards with explicit intended audience/problem, inclusions, scope, and starting price.
- Reorganized shared footer into Build / Products / Grow / Company / Legal.
- Removed unsupported popularity labels/sorting such as Bestseller/Terlaris from catalog UI.
- Fixed a JavaScript syntax defect in the website collection renderer and re-verified app.js parses successfully.

## Recommended next version
V2.3 — final rendered browser/device QA and launch gate, then V3 — backend architecture and production integrations:
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


## V2.2 — UX/UI, business clarity and conversion refinement
**Date:** 2026-09-29

- Hardened the shared header/footer shell so standard pages retain the same navigation and footer structure.
- Added a stronger, cleaner page-title frame with distinct editorial/technology background treatment and larger page H1 hierarchy.
- Tightened homepage Build / Buy / Grow card rhythm so icon → title → copy reads as one visual group.
- Reworked homepage decision support into a seven-option Need Finder with direct destinations.
- Repositioned website packages with descriptive, non-popularity labels.
- Simplified the visible navigation terminology toward Templates / Build / Solutions / Work / Insights & About while preserving existing destinations.
- Preserved the vanilla HTML/CSS/JavaScript architecture and existing prototype/localStorage behavior.
- Added BALIBAGUS_DEV_MASTER_PROJECT_V2.2.md as a new historical checkpoint; V2 and V2.1 remain unchanged.

### V2.2 production boundary
The frontend remains a prototype until real authentication, server-side orders, payment verification, secure delivery, production forms/CRM, analytics and final legal/security QA are connected. No fake transactions or unsupported commercial claims were added.


### V2.2.1 — shell and UI reliability pass
**Date:** 2026-09-29

- Added a defensive shared-shell fallback so standard pages retain navigation and footer even if a runtime renderer encounters an error.
- Kept checkout focus mode intact; checkout remains intentionally standalone.
- Increased inner-page H1 hierarchy and strengthened the page-title background with a restrained editorial/technology frame.
- Tightened homepage Build / Buy / Grow card icon-to-title spacing.
- No backend, payment, authentication or production transaction behavior was introduced.
