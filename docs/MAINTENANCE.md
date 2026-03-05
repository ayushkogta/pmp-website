# PMP Website — Maintenance Guide

Step-by-step instructions for common website updates. After any edit, run `node build.js` to regenerate `dist/index.html`.

---

## Add an Application Link

1. Open `src/components/recruitment/recruitment.html`
2. Inside `<div class="form-links">`, paste:

```html
<a href="YOUR_GOOGLE_FORM_URL" target="_blank" rel="noopener" class="form-link-card">
    <div class="form-link-card-info">
        <h4>Form Title</h4>
        <p>Short description</p>
    </div>
    <span class="form-link-arrow">&rarr;</span>
</a>
```

3. Replace the URL, title, and description
4. Run `node build.js`

## Update an Application Link

1. Open `src/components/recruitment/recruitment.html`
2. Find the `href="..."` on the form link card and change the URL
3. Run `node build.js`

## Remove an Application Link

Delete the entire `<a class="form-link-card">...</a>` block. Run `node build.js`.

---

## Open / Close Recruitment

In `src/components/recruitment/recruitment.html`, find:

```html
<div class="recruitment-status status-open">
```

Change `status-open` → `status-closed` (or vice versa) and update the text inside `<span>`.

---

## Add a Project Card

1. Open `src/components/projects/projects.html`
2. Inside `<div class="projects-grid">`, paste:

```html
<div class="project-card">
    <img src="../../images/photo.jpg" alt="Description" class="project-card-image">
    <div class="project-card-body">
        <div class="project-card-tag">Client Project</div>
        <h3>Project Title</h3>
        <p>Brief description.</p>
    </div>
</div>
```

3. Place your photo in the `images/` folder
4. Run `node build.js`

## Replace a Placeholder with a Real Photo

Find the placeholder div:
```html
<div class="project-card-image-placeholder">🎬</div>
```

Replace it with:
```html
<img src="images/your-photo.jpg" alt="Description" class="project-card-image">
```

Note: In the built `dist/index.html`, image paths should be relative to the dist folder. If hosting images separately, use absolute URLs.

---

## Add / Remove a Company Tag

In `src/components/projects/projects.html`, inside `<div class="company-tags">`:

- **Add:** `<span class="company-tag">New Company</span>`
- **Remove:** Delete the corresponding `<span>` line

---

## Update the Mission Statement

Edit the `<p class="hero-description">` text in `src/components/hero/hero.html`.

---

## Update Social Media Links

Edit links in two files:
- `src/components/contact/contact.html` — the contact section links
- `src/components/footer/footer.html` — the footer icon links

---

## Change Colors or Fonts

Edit `src/styles/base/variables.css` to change design tokens like `--gold-400`, `--text-primary`, etc.

---

## Board Transition Checklist

1. Add new board members to the GitHub repo (Settings → Collaborators)
2. Transfer repo ownership if needed (Settings → Danger Zone)
3. Share hosting provider login (purchased under PMP email)
4. Share this maintenance document
5. **Recommended:** Use a GitHub Organization (e.g., `pmp-purdue`) so the repo isn't tied to one person's account

---

## Quick Reference

| Task | File |
|------|------|
| Application links | `src/components/recruitment/recruitment.html` |
| Recruitment status | `src/components/recruitment/recruitment.html` |
| Project cards | `src/components/projects/projects.html` |
| Mission statement | `src/components/hero/hero.html` |
| Social links | `src/components/contact/contact.html` + `footer/footer.html` |
| Company tags | `src/components/projects/projects.html` |
| Nav links | `src/components/nav/nav.html` |
| Colors/fonts | `src/styles/base/variables.css` |
