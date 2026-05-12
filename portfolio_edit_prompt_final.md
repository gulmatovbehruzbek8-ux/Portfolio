# Portfolio Edit Prompt — Behruzbek Gulmatov

You are a skilled frontend developer. Your task is to make specific, targeted edits to an existing portfolio website built with **Next.js**, deployed on **Vercel**.

**Portfolio URL:** https://portfolio-nine-beige-22.vercel.app
**Owner:** Behruzbek Gulmatov — 9th grade student, Presidential School in Khiva, Uzbekistan. Robotics engineer, AI builder, physics enthusiast.

The site has 4 existing pages: `/` (Home), `/about`, `/activities`, `/contact`.

Do not redesign the site. Do not change the visual style, color scheme, or layout unless a specific task below requires it. Only make the changes listed. Preserve everything that already exists and works.

---

## TASK 1 — Fix the Gold Medal Counter Bug (Critical)

**File:** The Activities page component (likely `app/activities/page.tsx` or `pages/activities.tsx`)

**Problem:** The Line Tracking Robot activity card is displaying `"🥇0× Gold Medals"` instead of `"🥇3× Gold Medals"`. This is a broken variable or hardcoded zero.

**Fix:** Find the medal count value for the Line Tracking Robot card and set it to `3`. The displayed text should read: `🥇3× Gold Medals`

---

## TASK 2 — Create a Projects Page

**Create a new page at `/projects`.**

The page should match the existing site's visual style exactly — same fonts, same color scheme, same card style as used on the Activities page.

### Page Header
- Title: `Projects`
- Subtitle: `Things I have built — hardware, software, and everything in between.`

### Project Cards

Build **2 project cards** using the same card component style as the Activities page. Each card should display:
- Project title
- Short description
- Status badge (same style as Activities page badges)
- Technology tags (same tag style as Activities page)
- A GitHub button/link
- An image placeholder (use a neutral placeholder if no image is provided)

#### Card 1 — Line Tracking Robot
- **Title:** Line Tracking Robot
- **Description:** A high-speed line-following robot engineered with 7 precision sensors for rapid, accurate path detection. Responsible for hardware design, sensor wiring, and circuit integration. Competed at regional level and won gold three consecutive times.
- **Status:** Completed
- **Role:** Co-Developer (Hardware)
- **Tags:** `Arduino` `Sensors` `Hardware` `Robotics` `Circuit Design`
- **GitHub:** Use `https://github.com/gulmatovbehruzbek8-ux` as a placeholder — the owner will replace this with a specific repo link when they upload the project files.

#### Card 2 — Python Olympiad Toolkit *(placeholder — owner will update)*
- **Title:** Python Olympiad Toolkit
- **Description:** A growing collection of Python scripts built to prepare for programming olympiads. Covers core algorithms and problem-solving patterns.
- **Status:** In Progress
- **Role:** Solo Developer
- **Tags:** `Python` `Algorithms` `Competitive Programming`
- **GitHub:** Use `https://github.com/gulmatovbehruzbek8-ux` as a placeholder — the owner will replace this with the real repo link later.

> Note: Card 2 is a placeholder. The owner will update the title, description, and GitHub link with real values when the project is ready. Build the card so the content is easy to edit.

---

## TASK 3 — Fix the "View Projects" Button on Homepage

**File:** The Homepage component (likely `app/page.tsx` or `pages/index.tsx`)

**Problem:** The "View Projects" button exists but does not navigate to a valid page.

**Fix:** Update the button's `href` or `Link` destination to `/projects`.

---

## TASK 4 — Expand the Contact Page

**File:** The Contact page component (likely `app/contact/page.tsx` or `pages/contact.tsx`)

**Problem:** The Contact page currently only shows an email address, GitHub link, LinkedIn link, and location. It is nearly empty.

### Add the following, matching the existing site style:

#### A. Short intro message above the links
Add this text above the existing contact links:
> "Open to robotics collaborations, STEM projects, and new ideas. Based in Khiva, Uzbekistan — response within 48 hours."

#### B. Contact Form
Add a simple contact form with three fields:
- Name (text input)
- Email (email input)
- Message (textarea)
- Submit button labeled "Send Message"

The form does not need to be functional (no backend required). Use a `mailto:` action pointing to `gulmatovbehruzbek8@gmail.com`, or leave it as a static UI with a note in the code that backend integration is pending.

Style the form inputs to match the existing site aesthetic.

#### C. Telegram Link
Add a Telegram link alongside the existing GitHub and LinkedIn links.
- **Label:** Telegram
- **URL:** `https://t.me/Behruzbek7090`
- Use the same icon/link style as the existing social links.

#### D. Skip CV download button
Do **not** add a CV download button. The owner does not have a CV yet. This can be added in a future update.

---

## TASK 5 — Add Projects Link to Navigation

**File:** The navigation/header component (likely a shared `components/Navbar.tsx` or similar)

**Problem:** The nav currently has: Home · About · Activities · Contact. After the Projects page is created, it should be included.

**Fix:** Add a "Projects" nav link pointing to `/projects`, inserted between "About" and "Activities" so the order reads:

`Home · About · Projects · Activities · Contact`

---

## CONSTRAINTS

- Do not change anything not listed above.
- Do not modify the About page.
- Do not change the site's color scheme, typography, or animation style.
- Do not remove any existing content.
- Match the visual style of existing components exactly when building new ones — reuse existing card components, tag components, and badge components wherever possible rather than creating new ones from scratch.
- The site appears to use Next.js with TypeScript. Maintain type safety throughout.

---

## DELIVERABLES

When done, confirm:
1. ✅ Gold medal counter fixed to 3× on Activities page
2. ✅ `/projects` page created with 2 cards
3. ✅ "View Projects" homepage button links to `/projects`
4. ✅ Contact page has intro text, contact form, and Telegram link
5. ✅ Navigation includes "Projects" link

---

## PLACEHOLDERS TO NOTE FOR OWNER

After the edits are complete, remind the owner to:
- Replace the GitHub link on **Card 1 (Line Tracking Robot)** with a specific repo URL once the project files are uploaded
- Replace **Card 2 (Python Olympiad Toolkit)** with a real project name, description, and GitHub repo when ready
- Add a CV download button to the Contact page once a CV document is prepared
- Review the **About page skills section** — it currently lists `HTML`, `CSS`, and `JavaScript` under Frontend Development. The owner does not yet know these languages and should update or remove this to reflect actual current skills: Arduino, Python (basics), and AI tools
