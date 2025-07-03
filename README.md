# My Portfolio

This is a simple portfolio website built with [Next.js](https://nextjs.org/), [SCSS](https://sass-lang.com/), and [Storybook](https://storybook.js.org/) for component development.  
It is automatically deployed to GitHub Pages every time you push your code to GitHub.

---

## How This Project Works

### 1. Local Development

- **Develop your website locally:**  
  Run `npm run dev` to start a local server.  
  Open [http://localhost:3000](http://localhost:3000) in your browser to see your site as you build it.

- **Develop UI components with Storybook:**  
  Run `npm run storybook` to open Storybook at [http://localhost:6006](http://localhost:6006).  
  Storybook lets you build and test components in isolation, making it easier to design and debug your UI.

### 2. How Deployment Works

- **Automatic Deployment:**  
  Every time you push changes to the `main` branch on GitHub, a GitHub Actions workflow runs:
  1. It checks out your code and installs dependencies.
  2. It builds your site into static files (in the `out` folder).
  3. It pushes those static files to a special branch called `gh-pages`.
  4. GitHub Pages serves your website from the `gh-pages` branch, making it available to everyone online.

- **You do not need to manually upload files or run extra commands to deploy.**  
  Just push your code to GitHub, and your site will update automatically!

### 3. How to Set Up GitHub Pages

1. **Set the homepage URL in `package.json`:**

   ```json
   "homepage": "https://<your-username>.github.io/<your-repo-name>"
   ```

2. **Push your code to GitHub.**

3. **Configure GitHub Pages:**
   - Go to your repository’s **Settings** > **Pages**
   - Set the source to **Deploy from branch**
   - Choose the `gh-pages` branch and the `/ (root)` folder

4. **Wait a minute or two, then visit:**
   ```
   https://<your-username>.github.io/<your-repo-name>
   ```
   Your site will be live!

---

## Manual Deployment (Optional)

If you want to deploy from your computer (not recommended if you use GitHub Actions):

```bash
npm run build
npm run deploy
```
- `npm run build` creates the static site in the `out` folder.
- `npm run deploy` uploads the `out` folder to the `gh-pages` branch.

---

## What’s the Difference?

| Task                | Command                | Where to View                |
|---------------------|------------------------|------------------------------|
| Develop site        | `npm run dev`          | http://localhost:3000        |
| Develop components  | `npm run storybook`    | http://localhost:6006        |
| View deployed site  | *(auto on push)*       | https://<your-username>.github.io/<your-repo-name> |

- **Storybook** is for local development only (not published online).
- **GitHub Pages** is where your live site is hosted for everyone to see.

---

## Folder Structure

```
my-portfolio/
  .github/workflows/deploy.yml   # GitHub Actions workflow for deployment
  .storybook/                    # Storybook configuration
  components/                    # Reusable UI components
  pages/                         # Next.js pages (routes)
  styles/                        # SCSS stylesheets
  public/                        # Static assets (images, etc.)
  package.json                   # Project configuration and scripts
  README.md                      # This file
  next.config.js                 # Next.js configuration
```

---

## License

[MIT](LICENSE)