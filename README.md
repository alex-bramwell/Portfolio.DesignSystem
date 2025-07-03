# My Portfolio

This is a simple portfolio website built with [Next.js](https://nextjs.org/), [SCSS](https://sass-lang.com/), and [Storybook](https://storybook.js.org/) for component development.  
It is automatically deployed to GitHub Pages from the `main` branch.

---

## Features

- ⚡ **Next.js** for fast, modern web development
- 🎨 **SCSS** for flexible, maintainable styling
- 🧩 **Storybook** for isolated UI component development (local only)
- 🚀 **Continuous Deployment** to GitHub Pages via GitHub Actions

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

### 3. Run Storybook (for Component Development)

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view Storybook.

---

## Deployment Guide: GitHub Pages on `main`

This project deploys automatically to GitHub Pages whenever you push to the `main` branch.

### How it works

- The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on every push to `main`.
- It builds the static Next.js site into the `out` folder.
- It publishes the contents of `out` to the `gh-pages` branch, which is served by GitHub Pages.

### Initial Setup Steps

1. **Set your `homepage` in `package.json`:**

   ```json
   "homepage": "https://<your-username>.github.io/<your-repo-name>"
   ```

2. **Push your code to the `main` branch on GitHub.**

3. **GitHub Actions will build and deploy your site automatically.**

4. **Configure GitHub Pages:**

   - Go to your repository’s **Settings** > **Pages**
   - Source: Deploy from branch
   - Branch: `gh-pages`  
   - Folder: `/ (root)`

5. **Wait a minute or two, then visit:**

   ```
   https://<your-username>.github.io/<your-repo-name>
   ```

### Manual Deployment (optional)

You can also deploy manually from your local machine:

```bash
npm run build
npm run deploy
```

---

## Notes

- **Storybook is NOT deployed to GitHub Pages.** It’s for local development only.
- Your site will update automatically every time you push to `main`.
- Update your `homepage` field in `package.json` if your username or repo name changes.

---

## Folder Structure

```
my-portfolio/
  .github/workflows/deploy.yml
  .storybook/
  components/
  pages/
  styles/
  public/
  package.json
  README.md
```

---

## License

[MIT](LICENSE)