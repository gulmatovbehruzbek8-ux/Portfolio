# Project Instructions: Behruzbek Gulmatov Portfolio

This file is the authoritative source of truth for the project. Any AI agent must read this file before performing any analysis or edits.

---

## 🚨 CRITICAL: OPERATIONAL MANDATE
**NO AUTONOMOUS EDITS:** The agent MUST discuss any proposed changes, explain the rationale, and receive **explicit user approval** before modifying any file.

---

## 1. Project Overview & Vibe
- **Core Vision:** A high-end, cinematic portfolio for a robotics engineer/student.
- **Vibe:** "Premium AI Engineer's Personal OS" — calm, intelligent, futuristic, and technically impressive.
- **Avoid:** Playful colors, excessive neon, generic templates, or cluttered layouts.

---

## 2. Tech Stack
- **Framework:** Next.js 16 (App Router) + Turbopack.
- **Styling:** Tailwind CSS v4 (Modern `@theme` syntax in `globals.css`).
- **Animations:** Framer Motion (Standardized for all motion).
- **Scrolling:** Lenis (Smooth scrolling implementation).
- **Icons:** Lucide-react for UI; Custom SVG Monograms for Branding (`components/shared/Icons.tsx`).
- **Fonts:** 
  - **Headings:** `Space Grotesk` (Bold, strong hierarchy).
  - **Body:** `Inter` (Clean, highly readable).

---

## 3. Data & Architecture
- **Centralized Content:** **STRICT POLICY:** No hardcoded personal data in components. All text, links, and data arrays MUST be exported from `lib/constants/`.
- **Directory Structure:**
  - `app/`: Page routes and layouts.
  - `components/sections/`: Page-level sections (Hero, Timeline, etc.).
  - `components/layout/`: Global elements (Navbar, Footer, SmoothScroll).
  - `components/shared/`: Reusable atomic components (Icons, etc.).
  - `lib/constants/`: The source of all content.
  - `styles/`: `globals.css` containing Tailwind v4 theme and utility classes.

---

## 4. Animation System (Framer Motion Only)
- **Global Reveals:** All sections must use a staggered fade-up reveal on scroll (`whileInView`).
- **Home Page:**
  - **Terminal UI:** Character-by-character typing effect for bio data.
  - **Tech Tags:** Subtle floating pulse and hover-lift.
  - **Background:** Slow-breathing animated dot grid.
- **About Page:**
  - **Timeline:** Vertical line that "draws" downward based on scroll progress (`useScroll`, `useSpring`).
  - **Achievement Cards:** Shimmering sweep effect on hover.
  - **Skills:** Glow pulse on hover.
- **Activities Page:**
  - **Background:** Pulsing circuit-board grid (SVG pattern).
  - **Counters:** Numerical counters for achievements (e.g., "3x Gold") that animate when entering view.
  - **Image Collage:** Custom layout handling arrays of images for photography.
- **Contact Page:**
  - **Card Float:** Very slow vertical "bobbing" loop.
  - **Background:** Continuous slow-shifting radial gradient.
  - **Links:** Smooth sliding underline animation on hover.

---

## 5. Component Specifics
- **Navbar:** Sticky top bar. Transitions from transparent to blurred glass (`backdrop-blur`) and adds a visible border on scroll.
- **AboutHero:** Large background image (`School.jpg`) with a deep gradient fade to transition into the profile section.
- **Activities Card:** Alternating layouts (Image left/Text right, then reversed) on desktop; stacks vertically on mobile.

---

## 6. Design System & Assets
- **Primary Color:** `#4F8CFF` (Accent Blue).
- **Secondary BG:** `#111218`.
- **Card BG:** `#161922`.
- **Border Color:** `#232633`.
- **Text Primary:** `#F5F7FA`.
- **Accents:** Gold (`#C9A84C`) for About page; Cyan (`#22D3EE`) for Activities page.
- **Utility:** `.glass` class for consistent glassmorphism.

---

## 7. Mandatory Image Mapping
- **Portrait:** `/images/portrait.JPG` (Priority load).
- **School Building:** `/images/School.jpg` (Hero background).
- **School Entrance/Badge:** `/images/entrance.jpg`.
- **Activities:**
  - MUN: `/images/KhanteMUN.jpg`.
  - Engineering Club: `/images/engineering club.jpg`.
  - Photography: Uses the collage array including `bird.jpg`, `IMG_0395.JPG`, etc.
- **Favicon:** Custom SVG `app/icon.svg`.

---

## 8. Development Standards
- **Mobile First:** All sections must be optimized for mobile before scaling to desktop.
- **Performance:** Use `next/image` for all assets with proper `alt` text and `priority` for hero images.
- **Type Safety:** Maintain strict TypeScript interfaces for all data constants.
