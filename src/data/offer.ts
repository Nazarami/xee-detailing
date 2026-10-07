import type { ImageMetadata } from 'astro';
import graphene from '../assets/photos/graphene-serum.jpg';
import ppf from '../assets/photos/ppf-install.jpg';
import colourChange from '../assets/work/gtr-r35-03.jpg';
import polishing from '../assets/photos/polishing.jpg';
import caliper from '../assets/photos/caliper.jpg';
import interior from '../assets/photos/interior.jpg';

export type Service = {
	title: string;
	body: string;
	photo: ImageMetadata;
	alt: string;
	/** Focal point for the 4:3 crop, as a Tailwind object-position class. */
	focus?: string;
};

export const services: Service[] = [
	{
		title: 'Ceramic & graphene coatings',
		body: 'NXTZEN coatings rated from three to seven years. Deep gloss, strong water beading, UV and chemical resistance, and far easier washing.',
		photo: graphene,
		alt: 'NXTZEN Graphene Serum kit beside a Porsche wheel with a yellow caliper',
		focus: 'object-[50%_78%]'
	},
	{
		title: 'Paint protection film',
		body: 'Self-healing Azura film absorbs stone chips and scratches before they reach the paint. Front end, full body or tailored coverage.',
		photo: ppf,
		alt: 'Squeegee smoothing paint protection film onto a Tiffany Blue panel'
	},
	{
		title: 'Colour change PPF',
		body: 'A complete new look in over 200 colours and finishes, with the full protection of film over your original paint.',
		photo: colourChange,
		alt: 'Nissan GT-R wrapped in Tiffany Blue colour change film'
	},
	{
		title: 'Paint correction',
		body: 'Single or multi-stage machine polishing removes swirls, haze and light scratches to restore depth and clarity before any protection goes on.',
		photo: polishing,
		alt: 'Huss preparing a polishing pad on a dual-action polisher',
		focus: 'object-[50%_60%]'
	},
	{
		title: 'Wheels & calipers',
		body: 'Wheels come off so the faces, spokes, inner barrels and calipers can be coated. Brake dust stops bonding and cleaning becomes effortless.',
		photo: caliper,
		alt: 'Coated Porsche wheel with a red brake caliper'
	},
	{
		title: 'Interior & glass',
		body: 'NXTZEN L-Coat for leather and vinyl, Fiber Coat for fabrics, glass coating for clearer wet-weather vision, and clear film for screens and gloss trim.',
		photo: interior,
		alt: 'Houndstooth and leather seats inside a Porsche Cayenne'
	}
];

export type Package = {
	id: string;
	name: string;
	tagline: string;
	coating: { years: number; product: string };
	includes: string[];
	featured?: boolean;
};

export const packages: Package[] = [
	{
		id: 'essential',
		name: 'Essential',
		tagline: 'Entry-level gloss and protection that lasts for years.',
		coating: { years: 3, product: 'NXTZEN Ceramic' },
		includes: ['Single-stage paint correction', '3-year ceramic coating']
	},
	{
		id: 'standard',
		name: 'Standard',
		tagline: 'A longer-lasting professional-grade coating.',
		coating: { years: 5, product: 'NXTZEN Ceramic Professional' },
		includes: ['Single-stage paint correction', '5-year professional ceramic coating']
	},
	{
		id: 'premium',
		name: 'Premium',
		tagline: 'Graphene protection with glass and wheels done properly.',
		coating: { years: 7, product: 'NXTZEN Graphene Serum' },
		includes: [
			'Single-stage paint correction',
			'7-year graphene coating',
			'Glass coating',
			'Wheels removed: faces and barrels coated'
		],
		featured: true
	},
	{
		id: 'presidential',
		name: 'Presidential',
		tagline: 'The full treatment, from multi-stage correction up.',
		coating: { years: 7, product: 'NXTZEN Graphene Serum' },
		includes: [
			'Multi-stage paint correction',
			'7-year graphene coating',
			'Glass coating',
			'Wheels removed: faces, barrels and calipers coated'
		]
	}
];

/** Included with every package. */
export const everyPackage = [
	'Wheels and arches deep cleaned',
	'Snow foam and two-bucket hand wash',
	'Chemical decontamination and clay bar',
	'Contactless heated blow dry',
	'Tyres dressed',
	'Complimentary interior detail'
];

export const addOns = [
	'Multi-stage correction',
	'Glass coating',
	'Wheels-off coating',
	'Paint protection film',
	'Colour change PPF',
	'Ceramic window tint',
	'Leather and fabric protection',
	'Screen and interior PPF'
];

export const process = [
	{
		title: 'Inspect',
		body: 'We look over the paint under studio lighting and agree on the right protection for the car and how you use it.'
	},
	{
		title: 'Prepare',
		body: 'Wheels and arches, snow foam, a two-bucket hand wash, chemical and clay decontamination, then a contactless heated blow dry.'
	},
	{
		title: 'Correct',
		body: 'Single or multi-stage machine polishing removes swirls and haze so the protection seals in a flawless finish.'
	},
	{
		title: 'Protect',
		body: 'Coatings, film and finishing touches go on, followed by a final inspection before handover.'
	}
];

export const faqs = [
	{
		q: 'What’s the difference between ceramic and graphene coatings?',
		a: 'Both bond to your paint to form a hard, hydrophobic layer that adds gloss and makes washing easier. NXTZEN Ceramic is rated for three years and Ceramic Professional for five. NXTZEN Graphene Serum adds graphene nanoparticles to the coating for extra strength and slickness and is rated for seven years, which is why it’s in our Premium and Presidential packages.'
	},
	{
		q: 'Should I get paint protection film, a coating, or both?',
		a: 'A coating guards against UV, chemicals and everyday grime and keeps the car easy to clean. PPF is a physical, self-healing film that stops stone chips and scratches. Many owners film the high-impact areas and coat everything else, and we can coat the film as well for extra gloss and easier upkeep.'
	},
	{
		q: 'My car is brand new. Does it still need paint correction?',
		a: 'Usually, yes. New cars pick up contamination and light marring during shipping, storage and dealer prep. We decontaminate and refine the paint first, so the coating locks in a flawless finish instead of sealing in defects.'
	},
	{
		q: 'How long will my car be with you?',
		a: 'Most packages take one to three days, depending on the size and condition of the car and the work involved. We’ll confirm timing with your quote.'
	},
	{
		q: 'How much does it cost?',
		a: 'Every car is different, so we quote based on its size, condition and what you’re after. Send a few details through the form or WhatsApp and we’ll reply with a personalised quote, usually within a few hours during business hours.'
	},
	{
		q: 'Where are you, and when are you open?',
		a: 'Our studio is at 12 Explorer Place, Hallam VIC 3803. We’re open Monday to Friday, 9am to 5pm, and on Saturdays by appointment.'
	}
];

// Client reviews, quoted as written.
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
