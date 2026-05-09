# Master Prompt — Behruzbek Gulmatov Portfolio Website

> Paste this into Claude Code CLI to generate the full project.

---

## Project Overview

Build a premium dark-themed personal portfolio website for **Behruzbek Gulmatov**, a 9th grade student at the Presidential School in Khiva, Uzbekistan. He is interested in robotics engineering, physics, computer science, and AI-assisted development.

The website should feel:
- Modern, cinematic, and futuristic
- Minimal and polished — not colorful or playful
- Like a **premium AI engineer's personal operating system**
- Intelligent, calm, and technically impressive

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Shadcn/UI
- **Smooth Scrolling:** Lenis
- **Fonts:** Inter + Space Grotesk (via next/font)
- **Deployment Target:** Vercel

---

## Folder Structure

```
/app
  /about
  /activities
  /contact
  layout.tsx
  page.tsx
/components
  /ui          ← shadcn components
  /sections    ← page-level sections
  /layout      ← Navbar, Footer
  /shared      ← reusable atoms (Button, Card, Badge, Tag)
/lib
  /constants   ← all content/data lives here
  /utils
/styles
  globals.css
/public
  /images      ← placeholder image slots
  /icons
```

> IMPORTANT: All personal content (text, links, images) must be defined in `/lib/constants/` files only. No hardcoded personal data inside components.

---

## Color Palette

```css
--bg-primary: #0B0B0F;
--bg-secondary: #111218;
--bg-card: #161922;
--border: #232633;

--text-primary: #F5F7FA;
--text-secondary: #9CA3AF;
--text-muted: #6B7280;

--accent: #4F8CFF;
--accent-hover: #73A4FF;
--accent-cyan: #22D3EE;
--accent-gold: #C9A84C;    /* About page only */
```

Avoid pure black. Use layered dark greys for depth. Avoid excessive neon glows.

---

## Typography

- **Headings:** Space Grotesk — bold, large, strong hierarchy
- **Body:** Inter — clean, readable
- **Scale:** Use Tailwind's type scale. Hero heading: `text-5xl` to `text-7xl`. Section headings: `text-3xl` to `text-4xl`.
- Minimal paragraph width (~65ch max)
- Generous line height for readability

---

## Personal Information

> Store all of this in `/lib/constants/personal.ts`

```ts
export const personal = {
  name: "Behruzbek Gulmatov",
  fullName: "Gulmatov Behruzbek, son of G'ulomjon",
  role: "Student · Robotics Engineer · AI Builder",
  school: "Presidential School in Khiva",
  grade: "9th Grade",
  location: "Khiva, Uzbekistan",
  tagline: "Physics. Code. Robotics. Repeat.", // ← placeholder, replace if needed
  bio: "A 9th grade student at the Presidential School in Khiva with a passion for robotics engineering, physics, and AI-powered development. I build things that move, think, and compete.",
  email: "gulmatovbehruzbek8@gmail.com",
  github: "https://github.com/gulmatovbehruzbek8-ux",
  linkedin: "https://www.linkedin.com/in/behruzbek-gulmatov",
  // Phone and Instagram intentionally excluded from public site
}
```

---

## Navigation

Four tabs only. Clean, minimal, no clutter.

```
Home · About · Activities · Contact
```

### Navbar Behavior
- Sticky top bar on all pages
- Background: transparent on top → blurred dark (`backdrop-blur`) on scroll
- Logo (name or initials) on the left
- Nav links on the right (desktop)
- **Mobile:** Minimal top bar + clean full-width dropdown on menu icon tap
- Active page highlighted with accent color underline
- Smooth hover transitions on all links

---

## Global Design Rules

- Large typography, generous spacing
- Alternating layouts (image left/text right, then reversed)
- Subtle fade-up animations on scroll for every section
- No excessive glow, no neon overload
- Semantic HTML throughout
- Every image slot clearly labeled as `[PLACEHOLDER — replace with /public/images/filename]`
- All animations powered by **Framer Motion** only (no GSAP)
- Smooth scrolling via **Lenis**

---

## Page 1 — Home (`/`)

**Vibe:** Minimal, professional, calm, intelligent

### Hero Section
**Layout:** Two-column split (text left, visual right)

**Left side content:**
- Small label tag: `"Based in Khiva, Uzbekistan"`
- Large headline: `"Building AI-powered tools and engineering the future."`
- Tagline: `"Physics. Code. Robotics. Repeat."`
- Short bio: 1–2 sentences
- CTA buttons: `View Projects` · `GitHub` · `Contact`

**Right side visual:**
- **Terminal UI** — fake animated terminal window
- Types out on load:
  ```
  > Behruzbek Gulmatov
  > Role: Robotics Engineer · AI Builder
  > School: Presidential School, Khiva
  > Status: Building. Learning. Competing.
  > Interests: Robotics / Physics / AI / Code
  > Latest: Line Tracking Robot — 3x Regional Gold 🥇
  ```
- Below terminal: floating tech tags that pulse subtly
  - Tags: `Robotics` `Physics` `AI` `Engineering` `Python` `JavaScript`
- Background: subtle animated dot grid, very slow breathe animation

**Animations:**
- Text fades up on load (staggered)
- Terminal types character by character
- Tags float in with slight delay
- Grid breathes slowly in background

---

## Page 2 — About (`/about`)

**Vibe:** Presidential School theme — academic, prestigious, elegant, intelligent

**Accent color for this page:** Gold `#C9A84C`

### Section 1 — Profile Header
- Large name heading
- Role subtitle
- School badge: `[PLACEHOLDER — school crest/logo image]`
- Short bio paragraph
- Location tag

### Section 2 — Timeline
- Animated vertical timeline (line draws downward on scroll)
- Each node fades in as it enters viewport
- Milestones (placeholders — fill in with real dates):
  - Started at Presidential School in Khiva
  - Joined Engineering Club
  - Built Line Tracking Robot
  - Won first Regional Olympiad
  - Became Media Manager at KhanateMUN
  - Won 3rd Regional Gold
- Each node: date · title · short description

### Section 3 — Skills
- Grouped animated cards
- Hover glow effect on each card
- **No icon grids** — use category blocks with tag-style skill pills

```
🤖 Robotics & Hardware
   Sensor Integration · Robot Building · Circuit Design · Arduino

⚛️ Physics & Science
   Applied Mechanics · Electronics · Experimental Physics

🧠 AI & ML Tools
   AI-Assisted Development · Prompt Engineering · ML Concepts

🌐 Frontend Development
   HTML · CSS · JavaScript
```

### Section 4 — Achievements
- 3–4 achievement cards with shimmer sweep animation on hover
- Card content:
  - 🥇 3× Regional Olympiad Gold — Line Tracking Robot
  - 🏫 Presidential School Student — Khiva
  - 📡 Media Manager — KhanateMUN (Khorezm Region)
  - 🔧 Instructor — Engineering Club, KhivaPS
- Each card: `[PLACEHOLDER — achievement icon/image]`

**Animations:**
- Timeline line draws on scroll
- Achievement cards shimmer on hover
- Skills cards glow on hover
- All sections fade up on scroll

---

## Page 3 — Activities (`/activities`)

**Vibe:** Robotics/engineering — futuristic, technical, hands-on

**Accent color for this page:** Cyan `#22D3EE`

**Background:** Subtle animated circuit-board grid (CSS/SVG, not heavy canvas)

### Activity Cards

Three large cards. Each card:
- Full-width on mobile, alternating layout on desktop
- Role badge
- Status badge (Completed / Active)
- Description
- Tech tags
- `[PLACEHOLDER — project image/screenshot]`

---

#### Card 1 — Line Tracking Robot
- **Role:** Co-Developer (Hardware + Code)
- **Team:** Behruzbek & Islombek
- **Status:** ✅ Completed
- **Achievement:** 🥇 3× Regional Olympiad Gold
- **Description:** A high-speed line-following robot engineered with 7 precision sensors for rapid, accurate path detection. Built and programmed from the ground up — competing at regional level and taking gold three times.
- **Tags:** `Robotics` `Sensors` `Hardware` `Code` `Arduino`
- **Animated stat:** Counter animates from 0 → 3 for "3× Gold" on scroll

---

#### Card 2 — KhanateMUN
- **Role:** Media Manager
- **Scale:** Region-wide — participants from across Khorezm
- **Status:** 🔄 Ongoing
- **Description:** Regional Model United Nations conference bringing together students across Khorezm. As Media Manager, responsible for the visual identity, content, and communications of the event.
- **Tags:** `Media` `Design` `Communications` `Leadership`

---

#### Card 3 — Engineering Club, KhivaPS
- **Role:** Member & Instructor
- **Founded by:** Dilmurod (schoolmate)
- **Status:** 🔄 Active
- **Description:** A school-based engineering club dedicated to teaching core engineering principles to younger students. Bridging theory and hands-on practice — one project at a time.
- **Tags:** `Teaching` `Engineering` `Mentorship` `Hardware`

**Animations:**
- Circuit grid pulses in background
- Cards glow cyan on hover
- Counter animates on scroll (3× Gold)
- Cards fade up staggered on scroll

---

## Page 4 — Contact (`/contact`)

**Vibe:** Futuristic, calm, premium, polished

**Layout:** Centered glassmorphism contact card on dark background

### Background
- Slow shifting gradient (dark blues/purples) — very subtle
- Optional: faint grid overlay

### Contact Card
- Glassmorphism style: `bg-white/5 backdrop-blur border border-white/10`
- Subtle floating/bobbing animation (very slow, gentle)
- Content:
  - Heading: `"Let's connect."`
  - Subtext: `"Open to collaborations, questions, and new ideas."`
  - Email button → `mailto:gulmatovbehruzbek8@gmail.com`
  - GitHub button → `https://github.com/gulmatovbehruzbek8-ux`
  - LinkedIn button → `https://www.linkedin.com/in/behruzbek-gulmatov`
- Each link: hover underline animation + icon

**Animations:**
- Card floats subtly (bob animation loop)
- Background gradient shifts slowly
- Link hover: smooth underline slide-in
- Card fades in on load

---

## Animation System

All animations via **Framer Motion** only.

### Global
| Animation | Trigger |
|---|---|
| Fade-up reveal | Every section entering viewport |
| Navbar blur | On scroll down |
| Page transition fade | Between route changes |
| Button hover scale | `scale: 1.03` on hover |

### Home
| Animation | Element |
|---|---|
| Typing effect | Terminal text, character by character |
| Floating pulse | Tech tags, slow loop |
| Grid breathe | Background, very slow opacity loop |

### About
| Animation | Element |
|---|---|
| Timeline draw | Line animates downward on scroll |
| Shimmer sweep | Achievement cards on hover |
| Skills card glow | On hover |

### Activities
| Animation | Element |
|---|---|
| Circuit pulse | Background grid lines |
| Card glow (cyan) | Each activity card on hover |
| Counter animate | "3× Gold" counts up on scroll |

### Contact
| Animation | Element |
|---|---|
| Card float | Slow bob loop |
| Gradient shift | Background, continuous slow loop |
| Link underline | Slides in on hover |

### Intentionally excluded
- ❌ Custom cursor
- ❌ Particles
- ❌ Magnetic buttons
- ❌ GSAP
- ❌ Excessive neon glow

---

## Responsiveness

Design **mobile-first**. Scale up to tablet and desktop.

| Breakpoint | Behavior |
|---|---|
| Mobile `< 640px` | Single column, stacked layouts |
| Tablet `640–1024px` | 2-column where appropriate |
| Desktop `> 1024px` | Full alternating layouts |

- Alternating sections (image + text): **stack vertically on mobile** — image on top, text below
- Cards: full width on mobile, grid on desktop
- Typography scales down gracefully — headings stay bold
- Spacing reduces proportionally
- Touch targets minimum 44px on mobile

---

## Placeholder Asset Guide

All images/icons must be clearly labeled in comments. Example:

```tsx
{/* [PLACEHOLDER] Replace with: /public/images/profile-photo.jpg */}
<Image src="/images/placeholder-profile.jpg" ... />

{/* [PLACEHOLDER] Replace with: /public/icons/school-crest.svg */}
<Image src="/icons/placeholder-crest.svg" ... />
```

Assets to replace later:
- Profile photo
- School crest/logo
- Achievement icons (per card)
- Activity project images (per card)
- Any decorative objects for About page

---

## Content Constants Structure

```
/lib/constants/
  personal.ts       ← name, bio, tagline, links
  activities.ts     ← activity cards data
  skills.ts         ← skills by category
  achievements.ts   ← achievement cards
  timeline.ts       ← timeline milestones
  navigation.ts     ← nav links
```

Each content file exports a typed array/object. Components import from here only. Replacing content = editing one file.

---

## Code Quality

- Clean, readable, production-grade TypeScript
- All components properly typed — no `any`
- Reusable atomic components (Button, Card, Badge, Tag, Section)
- Semantic HTML throughout (`<main>`, `<section>`, `<article>`, `<nav>`)
- Proper `alt` text on all images
- No inline styles — Tailwind only
- Framer Motion variants defined outside JSX for readability
- `loading="lazy"` on all non-hero images
- `.env.local` for any environment variables

---

## Final Vibe Check

The website must feel like:
> A premium AI engineer's portfolio — calm, intelligent, futuristic, technically impressive.

It must NOT feel like:
> A colorful student project, a generic template, or an overcrowded personal site.

Each page has its own identity:
- **Home** → minimal, professional, calm
- **About** → academic, prestigious, gold-accented
- **Activities** → engineering, futuristic, cyan-accented
- **Contact** → glassmorphism, polished, clean ending
