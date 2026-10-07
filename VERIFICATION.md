# Concept 1 verification

Verified locally on 7 October 2026 against the production preview.

- TypeScript and Vite production build passed.
- Responsive browser checks passed at 320, 375, 390, 430, 768, 1024, 1440 and 1920 pixels, with no horizontal overflow.
- Browser console and local asset requests had no errors.
- All project images load; responsive WebP variants are provided. Screenshots were visually reviewed after image decoding.
- Keyboard checks passed: skip link, visible focus, mobile menu, Escape handling, case-study focus containment and restoration.
- WCAG A/AA axe checks reported zero violations at all eight widths and in the case-study dialog. Automated checks do not replace assistive-technology testing.
- Heading hierarchy, image alternative text and form labels checked.
- Reduced-motion mode disables transitions and smooth scrolling.
- Contact validation and email drafting passed. Clipboard success/fallback paths checked. No email was sent; sending remains the visitor's explicit action in their own email application.
- Downloadable CV returned HTTP 200.
- All three live websites, four repositories and GitHub profile returned HTTP 200 using the Windows certificate store. The Node request client's certificate-store error did not affect browser rendering.
- Existing profile, project, skill and experience data compared unchanged with the pre-redesign snapshot.
- Favicon, Open Graph text metadata, description and crawler files checked. An isolated test verified canonical/Open Graph URLs, sitemap and indexing generation with SITE_URL, including a repository subpath.

## Deployment boundary

The local preview intentionally uses noindex and disallows crawling until the final HTTPS SITE_URL is configured. A public-domain deployment and sending through a visitor's email application have not been performed. The original CV remains unchanged.

## Concept 1 implementation

The previous stylesheet was replaced. Hero, project showcase, training application overview, technology cards, timeline, About, services, repository area, contact and navigation now share the cream/charcoal/plum visual system. No old hero portrait layout remains. The small About portrait is monochrome. No new runtime dependencies were added.

## Lighthouse and final label checks

A local mobile Lighthouse run scored Performance 94, Accessibility 100 and Best Practices 100. SEO was 66 because this preview intentionally blocks indexing. These are local lab results, not deployed-site guarantees. An additional experimental accessible-name check identified image-button and link naming mismatches; these were corrected and the targeted rule passed with zero violations. The final TypeScript/Vite build passed after those corrections.
