# Repository guidance

## Project architecture

This is an idiomatic Svelte/SvelteKit portfolio. It is built with the Cloudflare Worker adapter in `vite.config.ts` and configured for Wrangler in `wrangler.jsonc`.

- Follow the existing route and component structure under `src/`.
- Prefer small, straightforward Svelte components and the project's existing patterns.
- Avoid adding dependencies, abstractions, or frameworks unless they are clearly necessary for the requested work.

## Design and styling

Read `DESIGN.md` before making any visual or interaction changes. It defines the portfolio's design system and content conventions.

`src/app.css` is the only global stylesheet. Put global colors, design tokens, resets, and shared styles there. Component styles must use the CSS variables defined in `src/app.css`; do not introduce color literals in component styles.

## Operational boundaries

Do not deploy this project or run Wrangler deployment commands. Do not start development or preview servers, host localhost, open a browser, or bind to a port.

Non-hosted headless validation is allowed for interaction behavior and responsive breakpoints only when it does not start or depend on a local server or bind a localhost port.
