import type { ImageMetadata } from 'astro';

const files = import.meta.glob<ImageMetadata>('../assets/work/*.jpg', {
	eager: true,
	import: 'default'
});

/** Every photo for a project, in file order. The first one is the cover. */
function photosFor(slug: string): ImageMetadata[] {
	return Object.keys(files)
		.filter((path) => path.includes(`/work/${slug}-`))
		.sort()
		.map((path) => files[path]!);
}

export type Project = {
	slug: string;
	car: string;
	service: string;
	summary: string;
	done: string[];
	photos: ImageMetadata[];
};

type ProjectInput = Omit<Project, 'photos'>;

// Details come from the studio's own Instagram write-up for each car.
const projects: ProjectInput[] = [
	{
		slug: 'gtr-r35',
		car: 'Nissan R35 GT‑R',
		service: 'Colour change PPF',
		summary:
			'Trims, handles, mirrors, lights and badges came off so the Tiffany Blue film could be wrapped and tucked deep around every edge. It looks factory, with self-healing protection over the original paint.',
		done: [
			'Full Tiffany Blue colour change PPF',
			'Extensive dismantle for maximum coverage',
			'Wrapped and tucked edges',
			'Original paintwork preserved underneath'
		]
	},
	{
		slug: 'porsche-911-iroc',
		car: '1977 Porsche 911 IROC recreation',
		service: 'Premium Protection',
		summary:
			'A track-focused Skunkwerks build with a 3.6-litre air-cooled engine, finished in Mexico Blue. Multi-stage correction brought the paint back to its best before graphene and glass coatings locked it in.',
		done: ['Multi-stage paint correction', 'NXTZEN Graphene Serum', 'Glass coating']
	},
	{
		slug: 'bmw-m2',
		car: '2026 BMW M2',
		service: 'Full PPF + NXTZEN Elite',
		summary:
			'Protected from day one with 200 km on the clock. After a full film install, NXTZEN Elite went over every film-covered surface for extra gloss and easier washing.',
		done: [
			'Full paint protection film',
			'NXTZEN Elite coating over the film',
			'Wheels removed: faces, spokes and inner barrels coated'
		]
	},
	{
		slug: 'skyline-r33',
		car: 'Nissan Skyline R33 GT‑R 40th Anniversary',
		service: 'Presidential Protection',
		summary:
			'Meticulous multi-stage correction brought out the depth of the Midnight Purple paint before a seven-year graphene coating sealed it in.',
		done: [
			'Multi-stage paint correction',
			'7-year NXTZEN Graphene Serum',
			'NXTZEN Glass Coat',
			'Wheel faces, inner barrels and calipers protected',
			'35% window tint all round'
		]
	},
	{
		slug: 'cayenne-gts',
		car: '2026 Porsche Cayenne GTS',
		service: 'Premium Protection',
		summary:
			'Delivered new and protected properly: a refined finish, deep graphene gloss, and the wheels taken off so nothing was missed.',
		done: [
			'Wash and controlled decontamination',
			'Single-stage paint correction',
			'NXTZEN Graphene Serum',
			'Glass coating',
			'Wheels removed: faces, barrels and spokes coated'
		]
	},
	{
		slug: 'ferrari-488-pista',
		car: 'Ferrari 488 Pista',
		service: 'Essential Protection',
		summary:
			'Rosso Corsa on factory carbon wheels. A careful single-stage correction refined the finish before a ceramic coating added lasting gloss.',
		done: [
			'Thorough wash and decontamination',
			'Single-stage paint correction',
			'3-year NXTZEN Ceramic coating'
		]
	},
	{
		slug: 'audi-rs3',
		car: 'Audi RS3 Sportback',
		service: 'Premium Protection',
		summary:
			'The first RS3 Sportback in Mythos Black to land in Australia. Even brand-new cars carry contamination from shipping, so it started with a full decontamination.',
		done: [
			'Wash and decontamination',
			'Single-stage paint correction',
			'7-year NXTZEN Graphene coating',
			'Glass coating on all glass',
			'Screen PPF and interior detail'
		]
	},
	{
		slug: 'macan-gts',
		car: 'Porsche Macan GTS',
		service: 'Presidential Protection',
		summary:
			'Multi-stage correction restored and enhanced the white paint, then a seven-year graphene coating and a full wheel treatment finished the job.',
		done: [
			'Multi-stage paint correction',
			'7-year NXTZEN Graphene Serum',
			'Glass coating',
			'Brake calipers, inner barrels and wheel faces coated'
		]
	},
	{
		slug: 'alfa-giulia',
		car: 'Alfa Romeo Giulia',
		service: 'Essential Protection',
		summary:
			'A brand-new Giulia in a rare finish, with select upgrades on top of the Essential package to protect its looks and its value.',
		done: [
			'Single-stage paint correction',
			'3-year NXTZEN Ceramic coating',
			'Glass coating',
			'Wheels removed and coated',
			'Matte PPF on the infotainment screen'
		]
	},
	{
		slug: 'porsche-996-gt3',
		car: 'Porsche 996 GT3 Club Sport',
		service: 'Premium Protection',
		summary:
			'An iconic GT3 revived with meticulous multi-stage correction, then protected with graphene and glass coatings for years of gloss.',
		done: [
			'Multi-stage paint correction',
			'NXTZEN Graphene Serum',
			'NXTZEN Glass Coat',
			'Complimentary interior detail'
		]
	},
	{
		slug: 'bmw-x3m',
		car: 'BMW X3 M',
		service: 'Standard Protection',
		summary:
			'Brooklyn Grey Metallic, refined and protected with a five-year coating plus a few tailored extras.',
		done: [
			'Wash and controlled decontamination',
			'Single-stage paint correction',
			'5-year NXTZEN Ceramic Professional',
			'Glass coating',
			'Complimentary interior detail'
		]
	},
	{
		slug: 'audi-sq7',
		car: 'Audi SQ7',
		service: 'Presidential Protection',
		summary: 'A blacked-out SQ7 given the full treatment, inside and out.',
		done: [
			'Multi-stage paint correction',
			'NXTZEN Graphene Serum',
			'Glass coating',
			'NXTZEN L-Coat on leather and vinyl',
			'Interior PPF on screens and piano black trim'
		]
	}
];

export const work: Project[] = projects.map((p) => ({ ...p, photos: photosFor(p.slug) }));
