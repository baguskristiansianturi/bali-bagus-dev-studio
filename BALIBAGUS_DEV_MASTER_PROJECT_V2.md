# BALI BAGUS DEV STUDIO — MASTER PROJECT
## Version V2 — UI/UX, Business Flow & Launch Readiness
**Baseline:** Bali-Bagus-Dev-Studio.zip  
**Current status:** Frontend upgraded; backend/payment production integration remains a launch gate.

---

## 1. Project direction

Bali Bagus Dev Studio is positioned as a digital development studio with three commercial paths:

1. Digital products — templates, UI kits and reusable assets.
2. Website development — packages from approximately Rp1.25 million to Rp27 million+ depending on scope.
3. Custom digital systems — web applications, integrations and business workflows.

The existing visual direction is **FINAL / DO NOT REDESIGN**:
- dominant black, white and subtle grey;
- restrained typography;
- light borders;
- soft transitions;
- minimal shadows;
- editorial / modern studio feel;
- responsive desktop, tablet and mobile;
- lightweight frontend and SEO-aware structure.

The V2 work therefore focuses on **UX, information architecture, business completeness, accessibility, interaction quality, content originality, and launch readiness**, not on changing the visual identity.

---

## 2. Baseline audit

### What was already good
- Strong monochrome visual identity.
- Consistent spacing, typography and card language.
- Responsive breakpoints already existed.
- Main pages already covered home, products, services, portfolio, articles, contact, booking, cart and checkout.
- Frontend code had clear seams for later backend integration.
- Existing README correctly warned that localStorage checkout was only a prototype.

### Critical gaps found
1. Website-service pricing and scope were not structured as a commercial product.
2. No dedicated package comparison from entry-level to complex projects.
3. Portfolio contained mostly concept cards; no dedicated interactive demo flow.
4. No dedicated client-publication page with permission rules.
5. Checkout was explicitly demo-only and not prepared as a production handoff flow.
6. Forms stored data only in localStorage.
7. Navigation was inconsistent between pages and needed a shared dynamic header.
8. Some UI labels/icons were text glyphs rather than consistent accessible icons.
9. Legal pages were linked but missing.
10. Contact page contained a stray character in a select option.
11. Product and service copy still contained prototype language that should be replaced when real commercial data is finalized.
12. SEO metadata was present on some pages but inconsistent.
13. No explicit reduced-motion handling.
14. No systematic accessibility focus states and skip navigation.
15. No explicit project brief flow connecting demo/package selection to consultation.

---

## 3. V2 decisions

### 3.1 Visual system
**Decision: preserve.**

No major redesign of:
- color system;
- typography character;
- border language;
- layout personality;
- card treatment;
- black/white/grey dominance.

Allowed improvements:
- typography measurement adjustments where readability requires it;
- accessibility focus states;
- responsive spacing fixes;
- icon replacement;
- interaction feedback;
- motion restraint;
- semantic HTML and metadata.

### 3.2 Website packages
Six commercial starting levels were added:

| Package | Starting price | Main use |
|---|---:|---|
| Starter | Rp1.25M | One-page / simple presence |
| Business | Rp2.9M | Business website up to ~5 pages |
| Growth | Rp5.5M | Larger content / lead-generation website |
| Commerce | Rp8.5M | E-commerce flow |
| Custom Web App | Rp15M | Custom workflow and dashboard |
| Business System | Rp27M | Larger multi-role / integration system |

All prices are intentionally labelled **starting prices**. Final scope, third-party costs, content work, hosting, domain, payment gateway and integrations can change the quotation.

### 3.3 Demo websites
A reusable demo architecture was added:
- Hospitality / Villa
- Barbershop / Service
- Retail / Commerce
- Corporate
- Restaurant / F&B
- Tour & Travel

Each demo has a dedicated detail view and a **Custom** action. The demo is a reference, not a promise that every element is included in a package.

### 3.4 Client websites
A dedicated `client-websites.html` page was added.

Publication rule:
- client name;
- logo;
- screenshots;
- project description;
- testimonial;
- public URL

must only be published with appropriate permission.

### 3.5 Project brief
Booking flow was expanded to capture:
- project type;
- package preference;
- reference website/demo;
- target start;
- preferred meeting time;
- meeting method;
- detailed project requirements;
- consent.

---

## 4. Current page architecture

- `index.html` — commercial homepage
- `website-packages.html` — website pricing, comparison and process
- `products.html` — digital product catalog
- `product-detail.html` — digital product detail
- `cart.html` — digital product cart
- `checkout.html` — digital product checkout interface
- `services.html` — broader service overview
- `portfolio.html` — demo and client work hub
- `client-websites.html` — permitted client publication area
- `demo.html` — interactive demo detail
- `booking.html` — project brief / consultation
- `articles.html` — content hub
- `article-detail.html` — article detail
- `contact.html` — contact form
- `terms.html` — terms draft
- `privacy.html` — privacy draft
- `refund.html` — refund draft

---

## 5. UX flow

### New website customer
Home → Website packages → Compare → Demo → Custom / Project brief → Scope discussion → Quotation → Deposit/payment → Development → QA → Launch → Handover.

### Digital product customer
Home → Products → Product detail → Add to cart → Cart → Checkout → Payment → Secure delivery.

### Existing client publication
Project completion → written publication permission → case-study data prepared → client website page → external website link.

---

## 6. Technical architecture

Current frontend:
- HTML5
- CSS3
- Vanilla JavaScript
- localStorage for prototype state
- responsive CSS
- inline SVG icons
- CSS-generated demo visuals for lightweight temporary imagery

The frontend deliberately avoids a heavy UI framework because the visual system is relatively lightweight and the current project benefits from simple deployability.

---

## 7. Backend launch gates

Before accepting real payments, the following are mandatory:

### Authentication / admin
- Admin authentication.
- Role-based access.
- Secure sessions/tokens.
- Server-side validation.
- Rate limiting.

### Orders
- Server-generated order ID.
- Server-side product/package lookup.
- Server-side price calculation.
- Never trust client totals.
- Order state machine: draft → pending payment → paid → processing → delivered/completed → cancelled/refunded.

### Payment
- Select payment gateway appropriate for Indonesia and target markets.
- Create payment on server.
- Verify webhook signature.
- Make webhook processing idempotent.
- Never mark an order paid from browser JavaScript.
- Do not store card data.

### Forms
- Backend endpoint.
- Email/CRM notification.
- Anti-spam.
- Rate limiting.
- Server-side validation.
- Consent logging where required.

### Digital delivery
- Protected file storage.
- Expiring/signed download links.
- Download limits if required.
- Purchase/license record.

### Booking
- Calendar/availability backend if real appointment scheduling is required.
- Time-zone handling.
- Admin confirmation.
- Reschedule/cancellation rules.

---

## 8. SEO launch checklist

Before launch:
- Unique title per indexable page.
- Unique meta description.
- One clear H1.
- Logical H2/H3 hierarchy.
- Descriptive internal links.
- Image alt text for real images.
- `robots.txt`.
- `sitemap.xml`.
- Canonical URLs after the production domain is fixed.
- Open Graph / social metadata.
- Organization / WebSite structured data using the verified production domain.
- 404 page.
- Search Console verification.
- Analytics consent/configuration where required.
- No duplicate or placeholder content indexed.
- No demo/localStorage wording on public commercial pages unless clearly marked as a demo.

---

## 9. Performance checklist

Target:
- lightweight first load;
- no unnecessary JavaScript framework;
- compressed images;
- WebP/AVIF for real imagery where supported;
- lazy-load below-the-fold images;
- width/height attributes to prevent layout shift;
- avoid oversized hero media;
- minimize third-party scripts;
- use production font loading strategy;
- cache static assets;
- test mobile first.

The current CSS-generated demo visuals are intentionally lightweight temporary assets. They can later be replaced with optimized real screenshots or generated brand imagery without changing the layout.

---

## 10. Accessibility checklist

Implemented in V2:
- skip link;
- visible keyboard focus;
- ARIA labels for navigation/menu/cart;
- semantic headings;
- reduced-motion handling;
- icon SVGs with `aria-hidden`.

Before launch:
- keyboard-only test all forms;
- contrast audit;
- screen-reader check;
- form error messages;
- focus order;
- touch target audit;
- mobile zoom/text scaling test.

---

## 11. Content policy

Public commercial copy must be original and factual.

Do not publish:
- fake testimonials;
- fake client logos;
- fake review counts;
- invented project results;
- invented certifications;
- unsupported guarantees.

Use “contoh”, “demo”, “konsep”, or “starting price” where appropriate.

---

## 12. V3 roadmap — backend integration

V3 should not redesign the frontend. It should connect the existing UI to:

1. database;
2. admin dashboard;
3. product CRUD;
4. package CRUD;
5. project leads;
6. booking management;
7. order management;
8. payment gateway;
9. secure digital delivery;
10. email notifications;
11. analytics;
12. legal consent;
13. deployment/monitoring.

Recommended API seams already identified:
- `GET /api/products`
- `GET /api/packages`
- `POST /api/orders`
- `POST /api/bookings`
- `POST /api/contact`
- `GET /api/availability`
- payment create endpoint
- verified payment webhook
- authenticated admin CRUD endpoints

---

## 13. V4 launch QA

Before public launch:
- functional test every link;
- test all forms;
- test cart add/remove;
- test empty states;
- test checkout;
- test mobile menu;
- test language toggle;
- test query/search;
- test demo links;
- test package links;
- test 404;
- test browser compatibility;
- Lighthouse / PageSpeed review;
- SEO crawl;
- accessibility audit;
- security review;
- backup/restore test;
- production domain and HTTPS;
- analytics/Search Console;
- final legal copy.

---

## 14. Launch status

### Completed in V2 frontend
- [x] Preserve visual direction
- [x] Website package architecture
- [x] Starting prices from ~Rp1.25M to Rp27M
- [x] Package comparison
- [x] Project workflow section
- [x] Demo website architecture
- [x] Custom demo CTA
- [x] Client website publication page
- [x] Project brief improvements
- [x] Shared navigation/footer
- [x] SVG icon system
- [x] Accessibility improvements
- [x] Reduced-motion handling
- [x] Legal page placeholders
- [x] Link audit
- [x] JavaScript syntax check

### Not yet launch-complete
- [ ] Real backend
- [ ] Real payment gateway
- [ ] Real email/CRM
- [ ] Admin dashboard
- [ ] Secure digital delivery
- [ ] Real client/project data
- [ ] Final legal review
- [ ] Production domain
- [ ] Production SEO assets
- [ ] Full security/QA
- [ ] Production analytics

**Therefore: V2 is a substantially stronger frontend/business prototype, but it should not yet be represented as a production transaction system.**

---

## 15. Version control rule

Future project changes should be recorded as:

**V3 — Backend Architecture**  
Date / decision / changed files / reason / test result / remaining work.

Never overwrite the project history conceptually. The latest master version must always preserve:
- current decisions;
- completed work;
- rejected alternatives when important;
- open risks;
- next checkpoint.

**Current checkpoint: V2 — Frontend UX & Commercial Architecture.**
