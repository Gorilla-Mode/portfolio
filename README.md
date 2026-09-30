# [Live site](https://portfolio.tobias-olsen02.workers.dev/)

[View the live deployment here ^^^^](https://portfolio.tobias-olsen02.workers.dev/)

# My portfolio

My dev portfolio, yeah, that's right.

## Stack

- SvelteKit
- Cloudflare Workers

## Structure

Edit portfolio content in [`src/lib/content.ts`](src/lib/content.ts). Design conventions are in [`DESIGN.md`](DESIGN.md).

## Local commands

```zsh
npm install
```

_Install dependencies._

```zsh
npm run dev
```

_Start the Vite development server._

```zsh
npm run build && wrangler dev
```

_Build the project and start the Cloudflare Workers development server._