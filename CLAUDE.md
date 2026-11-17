# CLAUDE.md — Field & Signal website

Guidance for Claude Code working in this repository. This repo is **public**: everything committed here, including Git history, is visible to anyone.

## What this is

- Portfolio and recruiting site for **Matthew Longoria, M. Eng., EIT**, published as **Field & Signal** at https://fieldandsignal.tech/.
- Hosted on GitHub Pages from `main`, repo root. `CNAME` sets the custom domain; `.nojekyll` disables Jekyll.
- Plain static HTML/CSS/JS. No build step, no package manager, no framework, no external fonts or analytics. Most pages are single files with inline `<style>`.
- Fieldbook (`fieldbook.html`, `fieldbook*.mjs`, `fieldbook-sw.js`, `fieldbook.webmanifest`) is an offline-capable PWA prototype.

## Branding rules (non-negotiable)

- The name is always written **Matthew Longoria, M. Eng., EIT**, in page copy, titles, meta tags, footers, and the README.
- Never spell out what "M. Eng." stands for anywhere in public copy. Write "M. Eng." (e.g. "M. Eng. · Texas A&M", "an M. Eng. in civil engineering").
- The brand is **Field & Signal**. Do not rename it or reintroduce "Atlas Foundry".
- Positioning line: "Engineer by training. Builder by nature."
- Avoid generic AI marketing language ("innovative", "cutting-edge", "seamless", "leverage", "empower", "unlock"). Use plain, specific engineering wording.

## Content and IP boundary

- Never present employer or client work (HDR, FSC Engineers, Patterson & Dewar, Oncor/Collabra, CCI Systems, Aquila) as Field & Signal work, and never commit employer/client files or data.
- All demos use synthetic or independently created data. Label them that way.
- Do not commit source code for private or commercial tools: C#, Python, add-ins, plugins, builds, `.zip`/`.exe`. `.gitignore` blocks many of these, but it is not a security boundary. Check every staged file.
- No credentials, API keys, `.env` files, or private configuration.
- Describe status honestly: "prototype", "desktop validation pending", "planned". Never claim a tool is released, tested, or licensed unless it actually is.
- Professional experience should stay more prominent than experimental software.

## Before editing

1. Run `git status` and check the current branch. Work on a branch, not directly on `main`.
2. Read the files you will touch. Shared styles are mostly inline per page, so a change may need repeating across pages.
3. Preserve existing working features (project search/filter, experience explorer, 3D grading model, Fieldbook offline mode, CSV/DXF exports).

## Checking your work

- Serve locally: `python3 -m http.server 8765` from the repo root, then open `http://localhost:8765/`.
- Check desktop (~1440px) and mobile (~390px) widths: no horizontal scroll, no overlapping text, no missing images.
- Check for broken local links and `src`/`href` targets that point at files that don't exist.
- Keep images web-sized. Hero/background images should be compressed JPEG or WebP (aim for under 500 KB), not multi-MB PNGs.
- Report which checks actually ran and what passed. Don't say something was tested if it was only read.

## Committing and deploying

- Push and deploy only when the owner approves. Pushing to `main` publishes the live site.
- In the summary, list the files changed, why, the commands and checks run, and anything still unverified.
- Ask first before deleting significant files, restructuring the site, or publishing any new tool or source code.

## Priorities

1. Fix broken or inaccurate content before adding anything new.
2. Improve what recruiters see first: name and credentials, experience, résumé link, contact, load speed.
3. Finish and document existing tools rather than adding new ones.
