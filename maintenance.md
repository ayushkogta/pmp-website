# PMP Website — Maintenance Guide

This doc covers the two things you'll most commonly need to update: the **Executive Board** and the **Projects** page.

The site is a React + Vite + Tailwind app deployed on Vercel. You don't need to understand React deeply — just follow the patterns below.

---

## Prerequisites

- Node.js installed
- Run `npm i` once after cloning
- Run `npm run dev` to preview changes locally at `http://localhost:5173`
- Pushing to the `main` branch on GitHub auto-deploys to Vercel

---

## Updating the Executive Board

**File:** `src/app/components/People.tsx`

### 1. Add headshot images

- Save each person's headshot as a `.png` in `public/assets/`
- Use lowercase first names: `firstname.png` (e.g. `matthew.png`, `anneliese.png`)
- Square or near-square images work best

### 2. Edit the board array

Open `People.tsx` and find the `executiveBoard` array near the top (around line 5). Each member looks like this:

```js
{
  name: 'First Last',
  role: 'Title',
  imageUrl: 'assets/firstname.png'
}
```

**To replace the whole board** (new year): delete all existing entries and add new ones.

**To add/remove a single member**: add or remove one object from the array.

### 3. Update the year heading

Find this line (around line 62):

```jsx
<h2 ...>2026 Executive Board</h2>
```

Change `2026` to the current year.

---

## Adding / Updating Projects

**File:** `src/app/components/Projects.tsx`

### 1. Add project images

- Create a folder in `public/assets/` for the project's images, e.g. `public/assets/google-photos/`
- Or use a single image directly in `public/assets/` (e.g. `assets/google-showcase.png`)

### 2. Edit the projects array

Open `Projects.tsx` and find the `projects` array (around line 142). Each project looks like this:

```js
{
  company: 'Nike',
  title: 'Innovative Footwear Design',
  description: 'A paragraph describing the project...',
  skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],
  images: [
    { src: 'assets/nike-showcase.png', alt: 'Nike project showcase' },
    { src: 'assets/placeholder.png', alt: 'Another image' },
  ],
}
```

**To add a new project:** copy an existing block, paste it into the array, and update the fields. Order in the array = order on the page.

**To remove a project:** delete its entire `{ ... }` block from the array (including the trailing comma).

### Fields

| Field | What it is |
|-------|-----------|
| `company` | Shown as a yellow badge above the title |
| `title` | Project heading |
| `description` | Paragraph of text |
| `skills` | Array of skill tags shown below the description |
| `images` | Array of `{ src, alt }` objects — these populate the image carousel. At least one is required. |

---

## Updating the Alumni Companies Image

Replace the file at `public/assets/alumni-companies.png` with the new version (keep the same filename).

---

## Deployment

The site auto-deploys via Vercel when you push to `main`. No manual build step needed. If you need to check the build locally: `npm run build` outputs to `dist/`.

---

## File Structure (relevant parts)

```
public/assets/          ← All images go here
src/app/components/
  People.tsx            ← Executive Board page
  Projects.tsx          ← Our Projects page
  Header.tsx            ← Navigation bar
  Footer.tsx            ← Footer
  Home.tsx              ← Landing page
```