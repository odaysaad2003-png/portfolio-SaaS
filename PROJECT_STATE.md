# 🧠 PROJECT_STATE.md

## SaaS Developer Portfolio System

### Oday Zoheer Saad — Engineering Identity Platform

---

# 1. Project Overview

This project is not a traditional portfolio.

It is a:

> SaaS-Style Developer Identity & Engineering Case Study Platform

The goal is to present developer work as:

* Engineering systems
* Architecture case studies
* Product-level UI experiences
* SaaS-style storytelling pages
* Professional developer identity platform

The project is designed to position Oday Zoheer Saad as:

* System Architect
* SaaS Builder
* Engineering Thinker
* Product-Level Developer
* Fullstack Developer with product sense

---

# 2. Current Project Status

## ✅ Completed Major Phase

### Project Details / Case Study Engine MVP

The `/projects/[slug]` dynamic project details system is now working.

The page is no longer a simple details page.
It has been upgraded into a:

> Engineering Case Study System

---

# 3. Current Active System Flow

Current case study page flow:

```txt
/projects/[slug]

Hero
↓
Problem
↓
Context
↓
Solution
↓
Images Storytelling + Lightbox Modal
↓
Architecture
↓
Metrics
```

This flow creates a SaaS-style storytelling experience instead of a static portfolio page.

---

# 4. Tech Stack

Core stack currently used:

* Next.js App Router
* React
* TypeScript
* Tailwind CSS
* Framer Motion
* Dynamic routes
* Feature-based architecture
* Centralized mock data layer
* Component-driven UI system

Important note:

The project uses a recent Next.js version where dynamic route `params` are asynchronous.

Correct pattern used:

```ts
type Props = {
    params: Promise<{ slug: string }>;
};

export default async function ProjectPage({params}: Props) {
    const {slug} = await params;
}
```

This fixed the previous issue:

```txt
params is a Promise and must be unwrapped with await
```

---

# 5. Current Folder Structure

Current important architecture:

```txt
src/
├── app/
│   └── (public)/
│       └── projects/
│           └── [slug]/
│               └── page.tsx
│
├── features/
│   └── projects/
│       ├── case-study/
│       │   ├── components/
│       │   │   ├── case-study-hero.tsx
│       │   │   ├── case-study-problem.tsx
│       │   │   ├── case-study-context.tsx
│       │   │   ├── case-study-solution.tsx
│       │   │   ├── case-study-architecture.tsx
│       │   │   ├── case-study-metrics.tsx
│       │   │   ├── case-study-images.tsx
│       │   │   └── case-study-motion-wrapper.tsx
│       │   │
│       │   └── layout/
│       │       └── case-study-layout.tsx
│       │
│       └── engine/
│           └── project-mapper.ts
│
├── lib/
│   └── data/
│       ├── project.data.ts
│       └── service.ts
│
└── types/
    └── project.ts
```

---

# 6. Data Layer

Current project type:

```ts
export type ProjectImage = {
    url: string;
    alt?: string;
};

export type ProjectMetric = {
    label: string;
    value: string;
};

export type Project = {
    id: string;
    slug: string;

    title: string;
    description: string;

    problem: string;
    approach: string;
    solution: string;

    technologies: string[];

    metrics: ProjectMetric[];

    images: ProjectImage[];

    featured?: boolean;

    createdAt: string;

    context?: string;
    architecture?: string[];
    tags?: string[];
};
```

Current projects data is stored in:

```txt
src/lib/data/project.data.ts
```

Current services file:

```txt
src/lib/data/service.ts
```

Current service functions:

```ts
import {projects} from "./project.data";

export function getProjects() {
    return projects;
}

export function getFeaturedProjects() {
    return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug);
}
```

Current available project slugs:

```txt
/projects/oday-dashboard
/projects/markit-plase
/projects/hom-hive
```

Important future cleanup:

* Rename `markit-plase` to a cleaner slug such as `mini-marketplace-gaza`.
* Rename `hom-hive` to `home-hive`.
* Update all links after slug changes.

---

# 7. Case Study Engine

Current engine file:

```txt
src/features/projects/engine/project-mapper.ts
```

Purpose:

Convert raw `Project` data into a `CaseStudy` model used by the UI.

Current responsibility:

```txt
Project Data
↓
Project Mapper
↓
CaseStudy DTO
↓
CaseStudy UI Layout
```

This keeps UI components clean and avoids putting mapping logic inside the route page.

---

# 8. Dynamic Route Page

Current file:

```txt
src/app/(public)/projects/[slug]/page.tsx
```

Current responsibility:

* Read slug from dynamic params
* Fetch project by slug
* Return `notFound()` if project does not exist
* Map project into case study data
* Render `CaseStudyLayout`

Important rule:

The page must remain a composition layer only.

It should not contain heavy UI or business logic.

Correct page pattern:

```ts
import {notFound} from "next/navigation";

import {getProjectBySlug} from "@/lib/data/service";
import {mapProjectToCaseStudy} from "@/features/projects/engine/project-mapper";
import {CaseStudyLayout} from "@/features/projects/case-study/layout/case-study-layout";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProjectPage({params}: Props) {
    const {slug} = await params;

    const project = getProjectBySlug(slug);

    if (!project) return notFound();

    const caseStudy = mapProjectToCaseStudy(project);

    return <CaseStudyLayout data={caseStudy} />;
}
```

---

# 9. Case Study Layout

Current file:

```txt
src/features/projects/case-study/layout/case-study-layout.tsx
```

Purpose:

Compose all case study sections in the correct storytelling order.

Current sections:

* `CaseStudyHero`
* `CaseStudyProblem`
* `CaseStudyContext`
* `CaseStudySolution`
* `CaseStudyImages`
* `CaseStudyArchitecture`
* `CaseStudyMetrics`

Current principle:

```txt
Layout = Composition only
Components = UI blocks
Engine = Data mapping
Data = Source of truth
```

---

# 10. Case Study Components

## 10.1 Hero Section

File:

```txt
src/features/projects/case-study/components/case-study-hero.tsx
```

Purpose:

Create the first WOW moment.

Includes:

* Engineering Case Study badge
* Project title
* Subtitle / slug
* Overview
* Tech stack pills
* Metrics preview
* Glow background
* SaaS-style hero layout

---

## 10.2 Problem Section

File:

```txt
src/features/projects/case-study/components/case-study-problem.tsx
```

Purpose:

Create the “Pain Shock Layer”.

Includes:

* Problem label
* Challenge title
* Problem explanation
* Red accent system
* Visual divider

---

## 10.3 Context Section

File:

```txt
src/features/projects/case-study/components/case-study-context.tsx
```

Purpose:

Explain system background and constraints.

Includes:

* Context label
* System Context title
* Context text
* Optional architecture hints
* Blue accent system

---

## 10.4 Solution Section

File:

```txt
src/features/projects/case-study/components/case-study-solution.tsx
```

Purpose:

Show the engineering reveal.

Includes:

* Solution label
* Engineering Solution title
* Solution text
* Architectural decisions block
* Green accent system

---

## 10.5 Architecture Section

File:

```txt
src/features/projects/case-study/components/case-study-architecture.tsx
```

Purpose:

Show system design thinking.

Includes:

* Architecture label
* System Architecture title
* Architecture explanation
* List of architecture decisions
* Purple accent system

---

## 10.6 Metrics Section

File:

```txt
src/features/projects/case-study/components/case-study-metrics.tsx
```

Purpose:

Show impact and business value.

Includes:

* Impact label
* Results & Impact title
* Metrics cards
* Glow effect
* SaaS dashboard feel

---

## 10.7 Images Storytelling Section

File:

```txt
src/features/projects/case-study/components/case-study-images.tsx
```

Purpose:

Create a visual storytelling experience.

Current features:

* Featured image
* Grid images
* Hover zoom
* Framer Motion reveal
* Lightbox modal
* Click image to preview
* Smooth modal open/close with AnimatePresence
* Dark overlay
* Close button
* Image caption using `alt`

This section is client-side because it uses:

* `useState`
* `motion`
* `AnimatePresence`

Required package:

```bash
npm install framer-motion
```

---

# 11. Completed Features

## ✅ Home Page Foundation

Completed:

* Hero Section
* Stats Section
* What I Do Section
* Tech Stack Section
* CTA Section

Status:

```txt
Complete and production-grade
```

---

## ✅ Projects Data Engine

Completed:

* Project type
* Project data
* Project service functions
* Featured projects
* Get project by slug

Status:

```txt
Working
```

---

## ✅ Project Details / Case Study Page

Completed:

* Dynamic route `/projects/[slug]`
* Async params fix
* Project lookup by slug
* CaseStudy mapping
* CaseStudy layout
* CaseStudy sections
* Visual screenshots system
* Lightbox modal
* Framer Motion reveal

Status:

```txt
Working MVP complete
```

---

# 12. Important Bugs Fixed

## Bug 1 — 404 / 500 on Dynamic Route

Error:

```txt
Route "/projects/[slug]" used params.slug.
params is a Promise and must be unwrapped with await.
```

Cause:

Next.js dynamic route params were async.

Fix:

```ts
type Props = {
    params: Promise<{ slug: string }>;
};

export default async function ProjectPage({params}: Props) {
    const {slug} = await params;
}
```

---

## Bug 2 — URL Slug Undefined

Cause:

Accessing `params.slug` directly before awaiting `params`.

Fix:

```ts
const {slug} = await params;
```

---

## Bug 3 — Data Layer Confusion

There was confusion between:

```txt
src/lib/data/service.ts
```

and feature-based service layer.

Current working data source:

```txt
src/lib/data/service.ts
src/lib/data/project.data.ts
```

Future recommended cleanup:

Move project data and services into:

```txt
src/features/projects/data/projects.data.ts
src/features/projects/services/projects.service.ts
```

But do not move until current build is stable.

---

# 13. Current Design System

## Primary Theme

Dark SaaS UI.

Main style:

* Deep navy / black background
* White text
* Blue accents
* Purple accents
* Red problem accents
* Green solution accents
* Glassmorphism cards
* Soft borders
* Glow effects
* Large spacing
* Scroll storytelling

---

## UI Principles

Every UI block must serve a system purpose.

Rules:

* No random decorative UI
* Every section must explain engineering thinking
* Each page should feel like a SaaS product experience
* Case study should feel like a product story, not a blog post
* Use spacing, glow, and motion carefully
* Keep components reusable and independent

---

# 14. Development Rules

Important engineering rules:

* No feature without system thinking
* Every UI must serve architecture narrative
* Page files should compose components only
* Avoid heavy logic inside `page.tsx`
* Keep data centralized
* Keep mapping inside engine layer
* Keep UI inside components
* Always update `PROJECT_STATE.md` after completing features
* Everything must be scalable for future CMS/API
* Think SaaS product, not portfolio
* Do not build static UI without data connection
* Every section should be reusable and maintainable

---

# 15. Definition of Done

A feature is complete only when:

* It is connected to data
* It has a clear system purpose
* It is componentized
* It follows the design system
* It works in full user flow
* It does not break routing
* It does not introduce TypeScript errors
* It is ready for future scaling
* `PROJECT_STATE.md` is updated

---

# 16. Current Known Issues / Cleanup Needed

## 16.1 Slug Naming Cleanup

Current slugs:

```txt
markit-plase
hom-hive
```

Recommended future slugs:

```txt
mini-marketplace-gaza
home-hive
```

Important:

If slugs are changed, update every link that points to these projects.

---

## 16.2 Image Filename Consistency

Current images include filenames with spaces:

```txt
/dashpord pages-darkmood.png
```

Recommended:

Rename to kebab-case:

```txt
/dashboard-pages-darkmode.png
```

Reason:

Cleaner URLs, fewer deployment issues, better consistency.

---

## 16.3 Data Location Cleanup

Current working path:

```txt
src/lib/data/
```

Recommended future architecture:

```txt
src/features/projects/data/
src/features/projects/services/
```

Do this later after build is stable.

---

## 16.4 Image Component Upgrade

Current `case-study-images.tsx` uses native `<img>`.

Future improvement:

Use Next.js `<Image />` for:

* optimization
* lazy loading
* better performance
* responsive image handling

---

# 17. Recommended Next Sprint

## 🔥 Sprint: Project Navigation System

Next best feature:

> Add Next / Previous Project Navigation + Related Projects

Goal:

Create full flow:

```txt
Projects Grid
↓
Project Case Study
↓
Next Project / Previous Project
↓
Related Systems
```

---

## Recommended Components

Create:

```txt
src/features/projects/case-study/components/case-study-project-navigation.tsx
src/features/projects/case-study/components/case-study-related-projects.tsx
```

---

## Required Service Helpers

Add to service layer:

```ts
getNextProject(slug: string)
getPreviousProject(slug: string)
getRelatedProjects(slug: string)
```

---

## Why this sprint matters

It completes the product experience.

Instead of the user reaching a dead end after reading one case study, they continue exploring more systems.

This turns the portfolio into a connected product journey.

---

# 18. Future Roadmap

## Phase 1 — Current Completed

Case Study Engine MVP

Status:

```txt
Completed
```

---

## Phase 2 — Next / Previous Navigation

Status:

```txt
Next
```

---

## Phase 3 — Related Projects System

Status:

```txt
Planned
```

---

## Phase 4 — Full Projects Explorer Upgrade

Status:

```txt
Planned
```

Target:

* Better filters
* System cards
* Featured systems
* Case study previews
* CTA navigation

---

## Phase 5 — MDX Case Study Engine

Status:

```txt
Planned
```

Goal:

Allow richer case study writing with:

* Problem
* Context
* Decisions
* Architecture diagrams
* Code snippets
* Learnings
* Impact

---

## Phase 6 — CMS/API Ready System

Status:

```txt
Future
```

Goal:

Move from mock data to:

* CMS
* API
* Database
* Admin-managed case studies

---

# 19. Commands

Run development server:

```bash
npm run dev
```

Install Framer Motion:

```bash
npm install framer-motion
```

Check production build:

```bash
npm run build
```

---

# 20. Current Active Task For Next Chat

## Start Here

The next task should be:

> Build Project Navigation System for `/projects/[slug]`

Required:

* Add previous project link
* Add next project link
* Add related projects section
* Use current `projects` data
* Keep the page as composition only
* Add service helpers for navigation
* Keep UI SaaS-style with glassmorphism and glow
* Update `PROJECT_STATE.md` after completion

---

# 21. Final Current Status


Current project status:

## 🟢 PRODUCTION STABLE MVP

```txt
✔ Case Study Engine (FULLY STABLE)
✔ Dynamic Routing (/projects/[slug])
✔ Project → CaseStudy Mapping Layer
✔ Section-based Architecture (Hero → Metrics)
✔ Framer Motion System Integrated

✔ Navigation System (Next / Previous Projects)
✔ Layout-level Integration Completed
✔ Clean Composition Architecture

✔ Smart Related Projects System
✔ Scoring-based Recommendation Engine
✔ Category + Tech + Tags Matching Logic

✔ UI/UX SaaS Design System
✔ Glassmorphism + Glow Effects
✔ Responsive Grid System
✔ Motion-based Interactions

✔ Data Architecture Layer Stable
✔ Strong TypeScript Domain Model
✔ Category System (frontend / fullstack / backend)

✔ Build System Clean
✔ No TypeScript Errors
✔ Production Build Successful