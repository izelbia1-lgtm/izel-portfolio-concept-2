# Concept 2 verification

Verified locally on 7 October 2026 against the Vite production preview at http://127.0.0.1:4180/.

## Branch isolation

- Active branch: `concept-2-dark-tech`, created before source edits.
- `main` and `origin/main` remain at `8e13356a27a34f59483aca9d1c3086d43633bbcc` (Concept 1).
- Concept 2 is maintained separately on `concept-2-dark-tech`; it is not merged into `main`.
- `src/content.ts` is unchanged from Concept 1. Project classifications, experience, dates, education, skills and URLs are preserved.

## Checks

- TypeScript and production build passed; no new dependencies.
- Responsive checks passed at 320, 375, 390, 430, 768, 1024, 1440, 1920 and 2560 pixels without horizontal overflow.
- Desktop and mobile screenshots reviewed; mobile name wrapping and a text-encoding issue corrected.
- Images load and decode. No portrait is rendered; the original asset remains preserved.
- Zero browser console errors and zero failed local asset responses during the interaction suite.
- Mobile navigation, Escape handling, skip link, focus styling, native case-study focus containment/restoration, heading hierarchy and alternative text passed.
- Automated WCAG A/AA checks: zero violations at all nine widths and in the case-study dialog. All four stack categories also passed, including the IBM programme exposure labels.
- Stack category buttons respond to keyboard activation and expose their selected state. Every supplied technology remains available.
- Additional accessible-name/visible-label rule passed.
- Reduced motion disables the cursor animation, transitions and smooth scrolling.
- Contact validation, prepared email and mailto destination passed. This remains a local email-draft form; visitors explicitly send using their email application.
- Downloadable CV returned HTTP 200. Internal anchor destinations and crawler assets checked. Existing external URLs were retained unchanged.
- Favicon and theme colour updated; existing SEO/Open Graph metadata and deployment-aware sitemap/robots generation preserved.

## Performance

Local mobile Lighthouse: Performance 98, Accessibility 100, Best Practices 100, SEO 66. The SEO score reflects intentional preview indexing restrictions. Scores are lab measurements, not deployed-site guarantees.

## Deployment boundary

The preview stays non-indexable until the final HTTPS `SITE_URL` is supplied during the build. No website deployment was performed. Automated accessibility checks do not replace assistive-technology testing. The original downloadable CV is unchanged.

## Approved release check

The Contact heading uses the correct Unicode apostrophe in “Let’s build something that matters.” All 19 source, script, metadata and documentation text files passed UTF-8 and broken-character scanning. The production build and browser regression checks were repeated before the approved branch commit. No other visual or website content changes were made during this final pass.
