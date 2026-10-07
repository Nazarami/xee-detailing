# Xee Detailing Website

The website for [Xee Detailing](https://xeedetailing.com), a Melbourne car detailing business offering paint correction, Gyeon ceramic coatings and interior detailing.

![Xee Detailing screenshot](screenshot.jpg)

## Stack

- [SvelteKit 2](https://svelte.dev/docs/kit) with Svelte 5, fully prerendered to static HTML
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript
- Self-hosted fonts: Archivo (variable width) and Instrument Serif
- Deployed on Netlify (`@sveltejs/adapter-netlify`)

## Development

```sh
yarn install
yarn dev        # http://localhost:5173
yarn check      # type-check
yarn format     # prettier
yarn build      # production build into ./build
```

## Editing content

Almost all copy lives in [`src/lib/data.ts`](src/lib/data.ts): contact details, socials, services, packages, reviews and the gallery. Edit that file and the whole site updates.

### Photos

Photos live in `static/photos/` as WebP at three sizes (`-800`, `-1600`, `-2400`). To add one, export it at those widths (longest edge), then add an entry to `photos` in `data.ts` with its real pixel widths and aspect ratio. With ImageMagick:

```sh
for w in 800 1600 2400; do
  convert input.jpg -auto-orient -strip -resize "${w}x${w}>" -quality 74 static/photos/my-photo-$w.webp
done
```

## Contact form

The form posts to [FormSubmit](https://formsubmit.co) at `xeedetailing@gmail.com` and redirects to `/thanks` afterwards. No backend is required.

## License

[MIT](LICENSE)
