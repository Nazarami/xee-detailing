export const business = {
	name: 'Xee Detailing',
	owner: 'Huss',
	city: 'Melbourne',
	region: 'VIC',
	email: 'xeedetailing@gmail.com',
	phone: '0401 760 066',
	phoneHref: 'tel:+61401760066',
	url: 'https://xeedetailing.com',
	socials: {
		instagram: 'https://www.instagram.com/xeedetailing/',
		facebook: 'https://www.facebook.com/profile.php?id=100087631721670',
		tiktok: 'https://www.tiktok.com/@xeedetailing'
	}
};

export type Photo = {
	/** Base name in /static/photos — files exist at -800, -1600 and -2400 widths. */
	name: string;
	alt: string;
	/** Real pixel widths of the -800, -1600 and -2400 files. */
	widths: [number, number, number];
	/** Intrinsic aspect ratio, width / height. */
	ratio: number;
};

const portrait: Pick<Photo, 'widths' | 'ratio'> = { widths: [600, 1200, 1800], ratio: 3 / 4 };

export const photos = {
	rollsRoyce: {
		name: 'rolls-royce',
		alt: 'Spirit of Ecstasy on a freshly detailed white Rolls-Royce',
		...portrait
	},
	mclaren: {
		name: 'mclaren',
		alt: 'Front wheel and red brake caliper of a white McLaren',
		...portrait
	},
	engineBay: { name: 'engine-bay', alt: 'Detailed Audi RS TFSI engine bay', ...portrait },
	golfR: {
		name: 'golf-r',
		alt: 'Grey Volkswagen Golf R with a mirror finish after paint correction',
		...portrait
	},
	interior: {
		name: 'interior',
		alt: 'Cleaned Mercedes-AMG interior seen through the open door',
		...portrait
	},
	amgVent: {
		name: 'amg-vent',
		alt: 'Close-up of a Mercedes-AMG air vent with red trim',
		widths: [800, 1600, 1960],
		ratio: 800 / 543
	},
	rrHeadrest: {
		name: 'rr-headrest',
		alt: 'Conditioned black leather headrest with Rolls-Royce emblem',
		...portrait
	}
} satisfies Record<string, Photo>;

export type Service = {
	title: string;
	body: string;
	photo: Photo;
};

export const services: Service[] = [
	{
		title: 'Paint correction',
		body: 'Single or multi-stage machine polishing removes swirls, haze and light scratches to bring back depth and a true mirror finish.',
		photo: photos.golfR
	},
	{
		title: 'Ceramic coating',
		body: 'Gyeon coatings from two to four-plus years lock in that gloss, repel water and grime, and make every wash easier.',
		photo: photos.rollsRoyce
	},
	{
		title: 'Interior detailing',
		body: 'Carpets, mats and pedals cleaned and sanitised. Leather cleaned, conditioned or steam cleaned and protected with Gyeon Leather Shield.',
		photo: photos.rrHeadrest
	},
	{
		title: 'Engine bay',
		body: 'A careful degrease and dress that makes the engine bay look as good as the rest of the car. Ideal before a sale.',
		photo: photos.engineBay
	}
];

export const processSteps = [
	{
		title: 'Wash',
		body: 'Wheels and arches first, then a high pressure rinse, snow foam and a two bucket hand wash.'
	},
	{
		title: 'Decontaminate',
		body: 'A clay bar treatment lifts bonded contaminants so the paint feels glass-smooth.'
	},
	{
		title: 'Correct',
		body: 'Contactless heated blow dry, then single or multi-stage polishing to remove defects.'
	},
	{
		title: 'Protect',
		body: 'Gyeon ceramic coatings for paint, glass and leather. Then tyres are dressed and the interior is finished.'
	}
];

export type Package = {
	id: string;
	title: string;
	tagline: string;
	duration: string;
	protection: string;
	featured?: boolean;
	services: string[];
};

export const packages: Package[] = [
	{
		id: 'pre-sale',
		title: 'Pre-sale',
		tagline: 'Show-ready presentation to help it sell faster.',
		duration: '1 day',
		protection: 'Hydrophobic spray sealant',
		services: [
			'Wheels and arches cleaned',
			'Engine bay detail',
			'High pressure rinse, foam and two bucket wash',
			'Contactless heated blow dry',
			'Gloss enhancement polish',
			'Hydrophobic spray sealant',
			'Tyres dressed',
			'Carpets cleaned and sanitised',
			'Rubber floor mats pressure cleaned and sanitised',
			'Leather seats cleaned and conditioned',
			'Interior glass and windscreen cleaned',
			'Foot pedals cleaned and sanitised'
		]
	},
	{
		id: 'standard',
		title: 'Standard',
		tagline: 'A corrected finish with two years of ceramic protection.',
		duration: '1–2 days',
		protection: 'Gyeon ONE EVO · 2 years',
		services: [
			'Wheels and arches cleaned',
			'High pressure rinse, foam and two bucket wash',
			'Decontamination and clay bar treatment',
			'Contactless heated blow dry',
			'Single stage paint correction',
			'Gyeon ONE EVO ceramic coating (2 years)',
			'Tyres dressed',
			'Carpets cleaned and sanitised',
			'Rubber floor mats pressure cleaned',
			'Interior glass and windscreen cleaned',
			'Foot pedals cleaned and sanitised'
		]
	},
	{
		id: 'premium',
		title: 'Premium',
		tagline: 'Multi-stage correction, four year coating and glass protection.',
		duration: '1–2 days',
		protection: 'Gyeon MOHS EVO · 4 years',
		featured: true,
		services: [
			'Wheels and arches cleaned',
			'High pressure rinse, foam and two bucket wash',
			'Decontamination and clay bar treatment',
			'Contactless heated blow dry',
			'Multi-stage paint correction',
			'Gyeon MOHS EVO ceramic coating (4 years)',
			'Gyeon View glass coating',
			'Tyres dressed',
			'Carpets cleaned and sanitised',
			'Rubber floor mats pressure cleaned and sanitised',
			'Leather seats cleaned and conditioned',
			'Interior glass and windscreen cleaned',
			'Foot pedals cleaned and sanitised'
		]
	},
	{
		id: 'presidential',
		title: 'Presidential',
		tagline: 'Everything we offer: dual-layer coating, inside and out.',
		duration: '2–3 days',
		protection: 'Gyeon SYNCRO EVO · dual layer',
		services: [
			'Wheels and arches cleaned',
			'High pressure rinse, foam and two bucket wash',
			'Decontamination and clay bar treatment',
			'Contactless heated blow dry',
			'Multi-stage paint correction',
			'Gyeon SYNCRO EVO dual-layer ceramic coating',
			'Gyeon View glass coating',
			'Tyres dressed',
			'Carpets cleaned and sanitised',
			'Rubber floor mats pressure cleaned and sanitised',
			'Leather seats steam cleaned',
			'Gyeon Leather Shield leather coating',
			'Interior glass and windscreen cleaned',
			'Foot pedals cleaned and sanitised'
		]
	}
];

export const reviews = [
	{
		quote:
			"Huss at Xee Detailing is an exceptional professional with an unparalleled work rate and ethic. He offers the best value for your money with fair and transparent pricing, and his attention to detail is impeccable. Whether you're looking for a simple wash or a full detailing, as a regular customer I confidently rate his service a perfect 10 out of 10.",
		context: 'Regular client'
	},
	{
		quote:
			"I recently brought my car in for Xee Detailing's paint protection package and couldn't be happier with the results. The coating is of high quality and performs well even under harsh Melbourne weather. They exceeded my expectations and I'll definitely be a returning customer.",
		context: 'Paint protection package'
	},
	{
		quote:
			"I am extremely satisfied with my experience at Xee Detailing. Huss's attention to detail is truly impressive and he took the time to explain each step of the detailing process. Professional, friendly service. Thank you, Huss and team, for a job well done.",
		context: 'Full detail client'
	}
];

export const gallery: Photo[] = [
	photos.mclaren,
	photos.golfR,
	photos.amgVent,
	photos.engineBay,
	photos.interior,
	photos.rollsRoyce,
	photos.rrHeadrest
];
