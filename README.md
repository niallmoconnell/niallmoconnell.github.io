# niallmoconnell.github.io

Personal homepage. Single static `index.html`, no build step.

## Publishing to GitHub Pages

1. Create a repo on GitHub named **exactly** `niallmoconnell.github.io` (must match your username).
2. Push this folder to it:

   ```bash
   git init
   git add .
   git commit -m "Initial homepage"
   git branch -M main
   git remote add origin https://github.com/niallmoconnell/niallmoconnell.github.io.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main` / `/ (root)`.
4. Wait ~1 minute, then visit https://niallmoconnell.github.io/

## Editing

All content lives in `index.html`. Replace every highlighted `[PLACEHOLDER]`
block with your own text and delete the `class="placeholder"` wrapper so it
renders as normal copy.
