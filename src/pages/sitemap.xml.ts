import type { APIRoute } from 'astro';

// A one-page site, so the sitemap is a single entry. /thanks and the 404 page are noindex.
export const GET: APIRoute = ({ site }) =>
	new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url><loc>${new URL('/', site)}</loc></url>
</urlset>
`,
		{ headers: { 'Content-Type': 'application/xml' } }
	);
