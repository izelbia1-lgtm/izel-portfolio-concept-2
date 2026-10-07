# Content accuracy audit

Reviewed against the supplied CV and existing project source on 29 September 2026. No years-of-experience totals, seniority, paid-client outcomes, testimonials or performance claims were added.

## Experience and education

| Website statement | Evidence and treatment |
| --- | --- |
| Software / web developer; seeking a junior role | CV summary explicitly describes a full-stack developer seeking a junior role. |
| Full Stack Developer (Projects & Training), Jan 2025–Jan 2026 | Exact role scope and dates from CV. Labelled independent projects and training, never employment. |
| React, Node.js, Django applications; REST APIs; SQL/NoSQL | CV bullets under independent projects and training. |
| Freelance Developer & Technical Support, Jan 2023–Jan 2024 | CV role, dates and self-employed status. Debugging, troubleshooting and basic cybersecurity wording retained without expansion. |
| Remote Operations Assistant, PBMS, May 2022–Apr 2023 | CV professional role and dates; responsibilities limited to operations, schedules, communications and task tracking. |
| IBM Full Stack Software Developer Professional Certificate, completed 2026 | CV lists the 2026 certificate and explicitly says “Completed 15-course programme”. Completion is now stated in the education block. |
| Public location: Johannesburg, South Africa | Explicit user instruction. Applied to hero, about, contact and description metadata. Historical independent-work location remains Roodepoort exactly as recorded in the CV. |
| Email and portrait | Taken from the original CV. Original downloadable CV is unchanged. |
| Personal approach | Removed the inferred claim that previous work shaped a particular development process; replaced it with factual responsibilities from the CV. |

## Technologies

| Technologies | Evidence |
| --- | --- |
| React, HTML, CSS, JavaScript | Explicit CV skills. |
| Python, SQL | CV education and database experience. |
| Node.js, Express, Django, Flask, REST APIs, MongoDB, NoSQL | Explicit CV skills; React/Django/Express/MongoDB also appear in the local capstone source. |
| Git, GitHub | Explicit CV version-control skills and existing repositories. |
| TypeScript, Vite | All three inspected website projects use these technologies. |
| Tailwind CSS | FlowPro and Evergreen import Tailwind and configure its Vite plugin. |
| Docker, CI/CD, Kubernetes | CV explicitly records these in the IBM programme. Displayed separately as “IBM programme exposure”, without suggesting production employment experience. |

All previously listed technologies had source support; none needed to be invented or removed. No proficiency percentages or expertise claims are used.

## Project audit

| Project | Classification | Description and stack evidence |
| --- | --- | --- |
| Odette Hair Studio | Client website / hair salon | Its README identifies a client website. Source contains service/pricing components, real salon photo gallery, hair-length guide, WhatsApp links and location details. React, TypeScript, Vite and CSS are verified. No payment, conversion or client-success claims are made. |
| Evergreen Outdoor Living | Concept / portfolio demo | README and business configuration explicitly identify a fictional business. Source supports service sections, gallery, native project dialogs, keyboard-operable comparison and demo enquiry preview. React, TypeScript, Tailwind CSS and Vite are verified. |
| FlowPro Plumbing | Concept / portfolio demo | README and configuration identify a fictional business. Source supports responsive navigation, native form validation, enquiry dialog and copying. React, TypeScript, Tailwind CSS and Vite are verified. |
| Full-stack dealership application | Training / capstone | Local React package, Django authentication/API views and Express/MongoDB service substantiate the description. The old repository redirects to `fullstack-saas-app`; the website uses the current URL. |

Live URLs were obtained from public GitHub repository homepage fields, then opened in a browser. All returned HTTP 200 and rendered the expected project headings:

- https://odette-hair-studio.vercel.app/
- https://evergreen-outdoor-living.vercel.app/
- https://flowpro-plumbing-sooty.vercel.app/

GitHub repositories are public. Each project has its own case-study action, source link and verified live link. Missing repository/live/social values are conditionally hidden. Empty challenge sections are omitted rather than filled with invented development stories or unfinished notices.

## Scope of refinement

The palette, typography, headline and section structure remain unchanged. Portrait sizing is closer to the original image resolution, with its square crop preserved inside the existing arch treatment. Project previews no longer crop their sides, and card typography and action alignment were refined.

## Concept 1 redesign — 7 October 2026

The existing content.ts data was preserved byte-for-byte in this redesign. Presentation changes do not alter project classifications, dates, education status, technologies or links. The training application overview uses the existing verified React, Django, Express and MongoDB implementation details. The hero names the actual React/Vite portfolio stack. No metrics, testimonials or additional employment claims were introduced.
