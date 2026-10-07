import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	// The canonical origin. Canonical URLs, Open Graph tags, the sitemap and robots.txt all derive from it.
	site: 'https://xee.amirnaz.com',
	trailingSlash: 'never',
	build: {
		// thanks.html rather than thanks/index.html, so pages live at clean, slash-free URLs.
		format: 'file',
		// One small stylesheet: inlining it saves a render-blocking request.
		inlineStylesheets: 'always'
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Archivo',
			cssVariable: '--font-archivo',
			weights: ['100 900'],
			styles: ['normal'],
			fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
			// The width axis powers the expanded display headings.
			options: { experimental: { variableAxis: { wdth: [['62', '125']] } } }
		},
		{
			provider: fontProviders.google(),
			name: 'Instrument Serif',
			cssVariable: '--font-instrument',
			weights: [400],
			styles: ['normal', 'italic'],
			fallbacks: ['ui-serif', 'Georgia', 'serif']
		}
	],
	security: {
		// Hashes every inline script and style into a CSP <meta> tag at build time.
		csp: {
			directives: [
				"default-src 'self'",
				"img-src 'self' data:",
				"font-src 'self'",
				// FormSubmit receives the quote form; Cloudflare Web Analytics reports page views.
				"connect-src 'self' https://formsubmit.co https://cloudflareinsights.com",
				"form-action 'self' https://formsubmit.co",
				"base-uri 'self'",
				"object-src 'none'"
			],
			// Cloudflare injects its Web Analytics beacon into pages on zones that have it enabled.
			scriptDirective: {
				resources: ["'self'", 'https://static.cloudflareinsights.com']
			}
		}
	},
	devToolbar: { enabled: false },
	vite: {
		plugins: [tailwindcss()]
	}
});
