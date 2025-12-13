# Repository Guidelines

## Project Overview
This repository is a Docusaurus v3 site (TypeScript + React) used to publish documentation and a blog for the “A Ripple Song” podcast theme.

## Project Structure & Module Organization
- `docusaurus.config.ts`: Site configuration (navbar/footer, theme, plugins, i18n).
- `sidebars.ts`: Docs sidebar definition.
- `docs/`: Documentation content (MD/MDX).
- `blog/`: Blog posts (MD/MDX).
- `src/`: Custom React/pages/components/styles.
  - `src/pages/`: Route-based pages (e.g. `src/pages/index.tsx`).
  - `src/components/`: Reusable UI components.
  - `src/css/custom.css`: Global theme overrides (Infima variables, dark mode tweaks).
- `static/`: Static assets served at the site root (e.g. `static/img/...`).

## Build, Test, and Development Commands
Run commands from the repo root:
- `npm install`: Install dependencies (uses `package-lock.json`).
- `npm run start`: Start the local dev server with hot reload.
- `npm run build`: Build the production site into `build/`.
- `npm run serve`: Serve the built site locally (after `build`).
- `npm run clear`: Clear Docusaurus cache (useful after config/plugin changes).
- `npm run typecheck`: Run TypeScript type checks.
- `npm run swizzle`: Eject/swap Docusaurus theme components (use sparingly).

## Coding Style & Naming Conventions
- Language: TypeScript/TSX in `src/`; prefer functional React components.
- Indentation: 2 spaces (match existing files).
- Filenames: React components `PascalCase.tsx`; hooks `useX.ts`; CSS modules `*.module.css`.
- Keep global styles in `src/css/custom.css`; prefer CSS modules for page/component styles.

## Testing Guidelines
There is no dedicated test framework configured. Use `npm run typecheck` and `npm run build` as the primary validation steps. If you add tests, document how to run them in this file and in `package.json` scripts.

## Commit & Pull Request Guidelines
- Commits: History is small and uses short, imperative, sentence-style subjects (no strict “Conventional Commits” requirement).
- PRs: Include a clear description, screenshots for UI/theme changes, and note any config changes (e.g. `docusaurus.config.ts`, `src/css/custom.css`). Link related issues if applicable.

## Configuration Tips
- Node.js requirement: `>=20` (see `package.json`).
- Theme tweaks: Prefer Infima variables and `[data-theme='dark']` overrides in `src/css/custom.css`.
