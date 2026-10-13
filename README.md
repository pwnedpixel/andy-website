# Andy Website

Website version of my resume.

Use Node.js 24 LTS (`nvm use`) and npm 10 or newer. Angular also supports Node.js 22.22.3+ and 26+; see the version ranges in `package.json`.

## Setup and development

```sh
npm ci
npm run dev
```

Open http://localhost:4200/. The app reloads when source files change.

## Build and serve

```sh
npm run build
npm start
```

The production build targets https://www.akeech.com/ and writes to `dist/`, which the Express server serves on port 3000 (or `PORT`). For local production testing, use `npm run build -- --base-href /` before starting the server.

## Checks

```sh
npm run lint
npm test
npx playwright install chromium
npm run e2e
```

Unit tests use Angular's Vitest runner with jsdom. Browser tests use Playwright and verify desktop and mobile rendering, project assets, links, and routing. If Chromium is already installed, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its executable instead of downloading a browser.

## Deployment

Pushes to `master` automatically run lint, unit tests, browser tests, and the production build before publishing to GitHub Pages at https://www.akeech.com/. Pull requests run the same checks. To publish manually from GitHub, run **Build and deploy GitHub Pages** from the Actions tab with the `master` branch selected.

In **Settings > Pages**, select **Deploy from a branch**, the `gh-pages` branch, and **/(root)**.

To publish from a local checkout:

```sh
npm run github-deploy
```

This builds the production site and publishes `dist/` to GitHub Pages at https://www.akeech.com/. GitHub authentication is required.
