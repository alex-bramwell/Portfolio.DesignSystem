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

---

## Storybook: Local Component Development

**Storybook** lets you develop and test UI components in isolation.

- **Start Storybook locally:**
  ```bash
  npm run storybook
  ```
- Open [http://localhost:6006](http://localhost:6006) to view Storybook.

**Note:**  
Storybook is for local development only and is **not** deployed to GitHub Pages.

---

## Deployment Guide: GitHub Pages

This project uses GitHub Actions to automatically deploy your site to GitHub Pages every time you push to the `main` branch.

### How Deployment Works

1. **Builds the static Next.js site** into the `out` folder using `npm run build`.
2. **Publishes the contents of `out`** to the `gh-pages` branch.
3. **GitHub Pages serves your site** from the `gh-pages` branch.

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

---

### Manual Deployment (optional)

You can also deploy manually from your local machine:

```bash
npm run build
npm run deploy
```

- `npm run build` generates the static site in the `out` directory.
- `npm run deploy` publishes the `out` directory to the `gh-pages` branch.

---

## Summary: Local vs. GitHub Pages

| Task                | Command                | Where to View                |
|---------------------|------------------------|------------------------------|
| Develop site        | `npm run dev`          | http://localhost:3000        |
| Develop components  | `npm run storybook`    | http://localhost:6006        |
| View deployed site  | *(auto on push)*       | https://<your-username>.github.io/<your-repo-name> |

- **Storybook** is for local component development only.
- **GitHub Pages** hosts your built site for the world to see.

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
  next.config.js
```

---

## License

[MIT](LICENSE)