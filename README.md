# My portfolio

My dev portfolio, yeah, that's right.

## Live site
Live site of the portfolie is [here.](https://portfolio.tobias-olsen02.workers.dev/)

## Stack

- SvelteKit
- Cloudflare Workers

## Structure

Edit portfolio content in [`src/lib/content.ts`](src/lib/content.ts).Design conventions are in [`DESIGN.md`](DESIGN.md).

## Local commands

```sh
npm install
```

_Install dependencies._

```sh
npm run dev
```

_Start the Vite development server._

```sh
npm run build && wrangler dev
```

_Build the project and start the Cloudflare Workers development server._