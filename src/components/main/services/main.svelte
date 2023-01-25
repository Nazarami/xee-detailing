<script lang="ts">
	import ServiceBlock from './serviceBlock.svelte';
	type Service = {
		name: string;
		time: string;
		paragraph: string;
		image: string;
	};
	let services: Service[] = [
		{
			name: 'Maintenance',
			time: '2 - 3 Hours',
			paragraph:
				'High pressure rinse, foam and two bucket method wash. wheels, tyres and wheel arches will be cleaned vehicle will be dried with a twisted loop drying towel interior wiped down, vacuumed and glass cleaned',
			image: 'service-images/image-0.jpeg'
		},
		{
			name: 'Paint Correction',
			time: '1 - 2 Days',
			paragraph:
				"Paint correction includes a detailed exterior wash using two buckets, a high-pressure rinse, and foam. The vehicle will also receive a decontamination, iron removal/clay treatment to remove any embedded contaminants that can't be removed with a regular wash. Contactless drying to prevent any chances of scratches, and single or multiple-stage paint correction.",
			image: 'service-images/image-1.jpeg'
		},
		{
			name: 'Paint Protection',
			time: '2 - 3 Days',
			paragraph:
				'Paint protection will include a paint correction whether its a single stage paint correction which can remove 55-75% of imperfections or two stage correction which removes 75-90%. Application of Gyeon 3 year ceramic coating.',
			image: 'service-images/image-2.jpeg'
		},
		{
			name: 'Pre-sale Detail',
			time: '1 - 2 Days',
			paragraph:
				'Pre-sale detail includes: High pressure rinse, foam and two bucket method wash. Wheels, tyres, and wheel arches will be cleaned. Vehicle will be dried with a twisted loop drying towel. Interior wiped down and steamed, thoroughly vacuumed, leather seats cleaned & conditioned.',
			image: 'service-images/image-3.jpeg'
		}
	];
</script>

<div class="p-4 bg-black text-white">
	<h3 class="text-3xl font-bold mb-10">Services</h3>
	<div class="flex">
		<ul class="md:flex-1 md:w-[50%] space-y-16">
			{#each services as service}
				<ServiceBlock {...service} />
			{/each}
		</ul>
		<img
			src="service-images/vertical-image.jpeg"
			alt=""
			class="md:flex-1 md:w-[50%] hidden md:flex" />
	</div>
</div>
