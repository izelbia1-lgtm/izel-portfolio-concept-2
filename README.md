# Izel Bianchina — Portfolio

A personal portfolio for software developer applications and small-business website enquiries. Built with React, TypeScript, Vite and Tailwind CSS.

## Design

Concept 2: Cinematic Dark Modern Tech. A photographic developer workspace hero, expressive serif typography, mauve accents, overlapping project previews and translucent service/contact cards. Original workspace backgrounds contain no people. The factual project and career content remains in `src/content.ts`.

This checkout belongs only to `izel-portfolio-concept-2`. The approved cinematic design is maintained on `concept-2-dark-tech` and published to this repository’s `main`. Deployment is configured separately.


## Features

- Responsive layout, mobile navigation and reduced-motion support
- Project cards with real local website screenshots
- Keyboard-accessible case-study dialogs with focus restoration
- CV download, experience, education and grouped technologies
- GitHub profile and repository links
- Contact form that prepares an email draft, with an explicit email-app link and clipboard fallback
- Metadata and deployment-aware canonical URL, sitemap and robots.txt
- Local WebP images and system fonts; no analytics or external font requests

## Run locally

Requires Node.js 22.12 or later and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5180. On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`.

## Build

```sh
npm run build
npm run preview
```

The build checks TypeScript and creates `dist/`. The production preview runs on port 4180.

Set `SITE_URL` in the build environment to the final HTTPS URL, including a repository path when using GitHub Pages. Without it, the build is a non-indexable preview with an empty sitemap. The postbuild script deliberately avoids publishing a fictitious domain.

PowerShell example:

```powershell
$env:SITE_URL = 'https://your-domain.example/'
npm.cmd run build
```

The `.env.example` file documents this setting. The Node build script reads the process environment; it does not load a local `.env` file automatically.

## Source layout

```text
src/
  App.tsx                  Page sections
  content.ts               Profile, project case studies, skills and experience
  styles.css               Tailwind import, design tokens and responsive styles
  components/
    Header.tsx             Desktop and mobile navigation
    Hero.tsx               Photographic developer workspace hero
    ProjectMontage.tsx     Layered live project previews
    ProjectCard.tsx        Reusable project showcase
    TrainingProject.tsx    Training application technology overview
    TechStack.tsx          Keyboard-accessible technology category explorer
    Icon.tsx               Local SVG icons
    CaseStudy.tsx          Native modal dialog
    Contact.tsx            Email draft form
public/
  images/                  Project screenshots and local workspace backgrounds
  Izel_Bianchina_CV.pdf     Downloadable original CV
  favicon.svg
scripts/
  finalize-build.mjs        Public metadata and crawler files
```

## Content and contact setup

Edit `src/content.ts` for profile and project information. Unavailable live, repository, LinkedIn and WhatsApp links are hidden. Empty case-study challenge sections are also hidden. Add WhatsApp as international digits only if that channel should be public. All three featured live URLs have been verified against their public repository homepage fields and live pages.

The email comes from the supplied CV; the public location is Johannesburg, South Africa, as requested. The original downloadable CV includes its phone number and address details; review that document before publishing. The portrait was extracted from the same CV.

The contact form does not have a backend. It validates input and prepares a draft; visitors must open their email app and send it themselves. Clipboard copying provides a fallback. Form data stays in page memory and is not submitted or stored by this website.

Project descriptions reflect the inspected source. FlowPro and Evergreen are fictional business demos, not client engagements. Case-study challenge fields are intentionally empty until first-hand notes are supplied. The capstone is identified as a training project. No contribution statistics, testimonials or business results are implied.

See `CONTENT-CHECKLIST.md` for outstanding content, `CONTENT-AUDIT.md` for statement-by-statement source support and `VERIFICATION.md` for checks performed.

## Deployment

This is the standalone `izel-portfolio-concept-2` repository. Do not include `.qa`, `node_modules`, local environment files or dependency caches.

### Vercel or another static host

1. Import `izel-portfolio-concept-2` and use the repository root directory.
2. Use `npm ci` to install, `npm run build` to build and `dist` as the output directory.
3. Set `SITE_URL` to the final HTTPS URL and rebuild.
4. Verify the deployed CV, screenshots, email draft flow and project links.

`vercel.json` supplies the Vite build configuration and basic response headers. No server or secret keys are needed.

### GitHub Pages

Use a Pages workflow to run `npm ci`, build with `SITE_URL=https://<username>.github.io/<repository>/`, and upload `dist` using the standard Pages artifact/deployment actions. The Vite base is relative, so assets and the CV work at a repository subpath. This is a single page with anchor navigation, so no SPA route rewrite is required.

Do not upload the source directory as the served website: publish the built `dist` output. A build without `SITE_URL` remains excluded from indexing until configured.

