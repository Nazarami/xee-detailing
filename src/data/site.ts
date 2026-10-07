/** Business details used across the page, the footer and the structured data. */
export const business = {
	name: 'Xee Detailing',
	legalName: 'Sarwari Collective Pty Ltd',
	founder: 'Huss Sarwari',
	owner: 'Huss',
	tagline: 'NXTZEN certified paint protection studio in Hallam, Melbourne.',
	email: 'xeedetailing@gmail.com',
	phone: '0401 760 066',
	phoneE164: '+61401760066',
	whatsapp: 'https://wa.me/61401760066?text=Hi%20Xee%20Detailing%2C%20I%27d%20like%20a%20quote.',
	address: {
		street: '12 Explorer Place',
		suburb: 'Hallam',
		region: 'VIC',
		postcode: '3803',
		country: 'AU'
	},
	maps: 'https://www.google.com/maps?cid=13552793869764004427',
	hours: [
		{ days: 'Monday – Friday', time: '9am – 5pm' },
		{ days: 'Saturday', time: 'By appointment' },
		{ days: 'Sunday', time: 'Closed' }
	],
	rating: '4.9',
	carsProtected: '1000+',
	socials: {
		instagram: 'https://www.instagram.com/xeedetailing/',
		facebook: 'https://www.facebook.com/profile.php?id=100087631721670',
		tiktok: 'https://www.tiktok.com/@xeedetailing'
	}
} as const;

export const addressLine = `${business.address.street}, ${business.address.suburb} ${business.address.region} ${business.address.postcode}`;

export const nav = [
	{ href: '/#services', label: 'Services' },
	{ href: '/#packages', label: 'Packages' },
	{ href: '/#work', label: 'Our work' },
	{ href: '/#about', label: 'About' },
	{ href: '/#faq', label: 'FAQ' }
] as const;
