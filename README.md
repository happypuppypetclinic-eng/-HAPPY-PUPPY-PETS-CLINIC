# Happy Puppy Pets Clinic Website

This is a production-ready Next.js 14 project built for Happy Puppy Pets Clinic, utilizing the App Router, Tailwind CSS (v4), Framer Motion, and TypeScript.

## Quick Start
**Install Dependencies:**
\`\`\`bash
npm install
\`\`\`

**Development Server:**
\`\`\`bash
npm run dev
\`\`\`

**Production Build:**
\`\`\`bash
npm run build
\`\`\`

**Production Start:**
\`\`\`bash
npm run start
\`\`\`

## Environment Variables
Before deploying (e.g., to Vercel or Netlify), you must configure the following environment variables in your hosting provider's dashboard:

* `NEXT_PUBLIC_SITE_URL`: The final production domain (e.g., `https://www.happypuppypetsclinic.com`). *Required for sitemap, robots.txt, and SEO metadata.*
* `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`: The access key from Web3Forms for the appointment enquiry form.

*Note: For local testing, rename `.env.local.example` to `.env.local` and add your test keys. Do NOT commit `.env.local` to version control.*

## Client Assets & Information to Add
Before final launch, the following placeholders must be replaced by the client/developer:
* **Images:** Place real `.jpg` files in `public/images/` matching the exact filenames listed on the gray placeholder boxes on the live site (e.g., `hero-pet.jpg`, `dr-dinesh-kumar.jpg`).
* **Logo:** Replace `public/images/logo.png` with the high-res client logo.
* **SEO Image:** Replace `public/images/seo/og-image.jpg` with a 1200x630 banner for social media sharing.
* **Configuration (`src/config/clinic.ts`):** 
  * Update clinic timings.
  * Add Instagram and Facebook URLs (buttons will automatically appear when populated).
  * Add Google Business Profile URL.
  * Replace the `NEXT_PUBLIC_SITE_URL` in your `.env` once the domain is purchased.

## Technical Notes
* The Contact Form uses Web3Forms and acts strictly as an **enquiry** system to prevent false booking confirmations. If the submission fails, a pre-filled WhatsApp fallback link is generated.
* Google Maps embeds are configured for both the Ulwe (Main) and Karanjade branch locations.
* Excluded services (Physiotherapy, Grooming, etc.) have been strictly omitted.