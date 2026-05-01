# Xee Detailing Website

A website for Xee Detailing, a Melbourne-based car detailing business.

## Technologies

- Svelte
- TailwindCSS
- TypeScript
- Bun
- Cloudflare Workers/Pages

## Usage

1. Clone the repository to your local machine

2. Install dependencies with `bun install`

3. Start the development server with `bun run dev`

The website should be running at the local URL printed by Vite.

To preview the Cloudflare build locally:

```sh
bun run build
bunx wrangler pages dev .svelte-kit/cloudflare
```

## Screenshot

![Xee Detailing Screenshot](screenshot.png)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
