# JM Technologies Portfolio

The frontend foundation for JM Technologies, an upcoming technology company focused on helping clients discover and engage suitable technology services. This repository will become JM's official website, portfolio, and project-enquiry platform.

The current scope is deliberately limited to application scaffolding, a dual-theme visual foundation, routing, styling foundations, reusable interface primitives, automated tests, and developer tooling. Finished page designs, approved company content, contact handling, case studies, and AI-assistant functionality have not yet been implemented.

## Technology stack

- React 19 and React DOM
- React Router 8 in data-router mode
- Vite 8 with the official React plugin
- TypeScript in strict mode
- Tailwind CSS 4 through its official Vite plugin
- Local Inter, Space Grotesk, and IBM Plex Mono font packages
- ESLint and Prettier
- Vitest, React Testing Library, jest-dom, user-event, and jsdom

## Prerequisites

- Node.js 24 LTS is the documented team standard (see `.nvmrc`).
- The minimum supported Node.js version is 22.22.0 because React Router 8 has a higher minimum than Vite 8.
- npm 10 or newer.

The project can also run on compatible newer Node.js releases. Development and verification currently use Node.js 25.7.0 and npm 11.10.1; contributors should prefer the documented LTS version for consistent team workflows.

## Installation

Clone the repository using the verified Git remote and install dependencies:

```bash
git clone https://github.com/James-ops14/JM.git
cd JM
npm install
```

If PowerShell prevents `npm.ps1` from running, use `npm.cmd` for the same commands or configure an appropriate local execution policy.

## Development

Start the Vite development server:

```bash
npm run dev
```

Vite prints the local development URL, normally `http://localhost:5173`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Vite development server |
| `npm run build` | Type-check and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check source files with ESLint |
| `npm run lint:fix` | Apply safe automatic ESLint fixes |
| `npm run format` | Format supported files with Prettier |
| `npm run format:check` | Verify formatting without changing files |
| `npm test` | Run Vitest in watch mode |
| `npm run test:run` | Run the test suite once |
| `npm run test:coverage` | Run tests and produce a coverage report |
| `npm run typecheck` | Run strict TypeScript checks |

## Project structure

```text
src/
├── app/                    # Application composition, router, and providers
├── components/
│   ├── layout/             # Shared site-level structure
│   └── ui/                 # Reusable interface primitives
├── features/
│   └── ai-assistant/       # Security and responsibility boundary only
├── pages/                  # Route-level placeholder pages
├── styles/                 # Global CSS and foundational design tokens
├── test/                   # Shared setup and application tests
├── main.tsx                # Browser entry point
└── vite-env.d.ts           # Vite environment types
```

Directories for future features should be created only when they contain a useful implementation or document.

## Visual foundation

The application supports light and dark themes using semantic CSS tokens and a typed React theme provider. A visitor's saved `jm-theme` selection takes priority; otherwise the first visit follows the system colour preference. A small inline script applies that choice before React renders to prevent an obvious theme flash.

The development-only design-system preview is available at `/__design-system`. It is intentionally excluded from primary navigation and is not a public JM page.

## Environment variables

Copy `.env.example` to a local environment file only when configuration values are needed. Local `.env` files are ignored by Git.

Vite embeds every `VITE_*` value in browser-delivered code. **Never put API keys, access tokens, passwords, AI-provider credentials, or any private secret in a `VITE_*` variable.** Sensitive integrations must use a secure backend.

## Current routes

The application has minimal verification pages for `/`, `/about`, `/services`, `/portfolio`, `/team`, `/contact`, and `/privacy`, plus a not-found route. The internal `/__design-system` route previews foundational tokens and primitives. Public route pages remain scaffolding and are not representative of the final JM design.

## Project status

The engineering and first visual-system foundations are in place. Brand strategy approval, content modelling, production application shell, public page design, integrations, and deployment decisions remain pending. Verified company email and social profiles are not currently available and are intentionally omitted.

## Contributing

1. Pull the latest changes from the appropriate shared branch.
2. Create a focused working branch when the team workflow calls for one.
3. Keep changes scoped and avoid committing secrets or generated output.
4. Run `npm run typecheck`, `npm run lint`, `npm run format:check`, `npm run test:run`, and `npm run build` before requesting review.
5. Use a pull request for review; do not merge another contributor's work without coordination.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
