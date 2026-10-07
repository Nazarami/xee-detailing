<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Services from '$lib/components/Services.svelte';
	import Packages from '$lib/components/Packages.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { business, packages } from '$lib/data';

	const title = 'Xee Detailing | Paint Correction & Ceramic Coating in Melbourne';
	const description =
		'Melbourne car detailing by Huss: paint correction, Gyeon ceramic coatings, interior and engine bay detailing. Request a free quote today.';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'AutoWash',
		name: business.name,
		url: business.url,
		email: business.email,
		telephone: '+61401760066',
		image: `${business.url}/og.jpg`,
		areaServed: { '@type': 'City', name: 'Melbourne' },
		address: {
			'@type': 'PostalAddress',
			addressLocality: business.city,
			addressRegion: business.region,
			addressCountry: 'AU'
		},
		sameAs: Object.values(business.socials),
		makesOffer: packages.map((p) => ({
			'@type': 'Offer',
			itemOffered: { '@type': 'Service', name: `${p.title} detailing package` }
		}))
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={business.url} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={business.name} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={business.url} />
	<meta property="og:image" content="{business.url}/og.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<Hero />
<About />
<Services />
<Packages />
<Gallery />
<Reviews />
<Contact />
