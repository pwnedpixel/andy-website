# Andy Website

Website version of my resume, built with Angular 22.

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

```sh
npm run github-deploy
```

This builds the production site and publishes `dist/` to GitHub Pages with the existing custom domain. It requires GitHub authentication and should only be run when ready to publish.

## Dependency compatibility

Angular, CLI, build tooling, and Material/CDK are aligned at 22.2.2. TypeScript stays on 6.0.3 because Angular 22 requires `>=6.0 <6.1`; TypeScript 7 is not compatible yet. Other retained direct dependencies use their latest stable releases at upgrade time, with exact resolutions recorded in `package-lock.json`.

Unused legacy packages (Angular HTTP, NgRx, IE polyfills, HammerJS, and Zone.js) were removed. Standalone components and signals replace the old module bootstrap and support zoneless rendering. ESLint, Vitest, and Playwright replace TSLint, Karma/Jasmine, and Protractor. Bootstrap 5 and Font Awesome 7 are supported by updated styles and icon classes. The site now follows Angular's supported modern browsers; Internet Explorer is no longer supported.

The production dependency audit is clean. The latest `angular-cli-ghpages` deployment helper still pulls in `braces` 3.0.3, which has an unpatched denial-of-service advisory ([GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)). `npm audit` reports six related high-severity findings along that development-only dependency chain. This helper is used only when publishing to GitHub Pages and is not included in the website bundle or Express runtime.
