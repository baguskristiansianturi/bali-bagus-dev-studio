# Bali Bagus Dev — Frontend Starter

Premium monochrome, bilingual-ready, responsive static frontend for GitHub Pages.

## Run locally
Open the folder in VS Code. Use the Live Server extension and open `index.html`, or run a local static server.

## Deploy to GitHub Pages
1. Create or open your GitHub repository.
2. Upload the contents of this folder (not the ZIP itself).
3. In repository Settings → Pages, choose Deploy from a branch, select `main` and `/ (root)`.
4. Save and wait for the deployment.

For a repository named `username.github.io`, use root deployment. For a project repository, all links here are relative filenames and should work when the repository is published as a project site.

## Current working frontend
- Responsive homepage and navigation across pages
- Product search/filter/sort and product detail
- Cart using localStorage
- Demo checkout and order record in localStorage
- Booking and contact forms save demo submissions to localStorage
- English/Indonesian UI toggle for shared navigation and selected interface copy
- Article, portfolio, service, contact, booking, cart and checkout pages

## Important limitations
This is a frontend prototype. It does not charge money, send emails, reserve real calendar slots, securely deliver paid files, or save data to a server. Checkout payment methods are demonstration selections only. Do not enter real card details.

## Backend integration seams
Replace `BBStore` localStorage functions in `assets/js/app.js` with API calls:
- `GET /api/products`
- `POST /api/orders`
- `POST /api/bookings`
- `POST /api/contact`
- `GET /api/availability`
- Payment gateway create-payment endpoint and verified webhook
- Admin-authenticated CRUD endpoints for products, articles, bookings and orders

Never trust client-side price totals or payment status. Verify all amounts and gateway callbacks on the server. Protect admin routes and validate uploaded files.

## Brand assets
Social links and official contact details are placeholders to be replaced with verified business accounts. Payment logos should only be shown as active methods after merchant gateway activation.
