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
			name: "Pre-sale Detail",
			time: '1 Day',
			paragraph:
				"Pre-foam\n" +
				"Wheels and wheel arches cleaned\n" +
				"Two bucket wash\n" +
				"Clay bar and decontamination\n" +
				"Microfiber and blow dry\n" +
				"Single stage paint correction\n" +
				"Two-year Gyeon coating\n" +
				"Thorough interior cleaning, including leather seat steaming and conditioning\n" +
				"Engine bay detailing\n" +
				"Gloss-enhancement polish\n" +
				"Spray sealant application\n",
			image: 'service-images/image-0.jpeg'
		},
		{
			name: 'Standard',
			time: '1 - 2 Days',
			paragraph:
				'Pre-foam\n' +
				'Wheels and wheel arches cleaned\n' +
				'Two bucket wash\n' +
				'Clay bar and decontamination\n' +
				'Microfiber and blow dry\n' +
				'Single stage paint correction\n' +
				'Two-year Gyeon coating\n' +
				'Basic interior detailing\n' +
				'Interior vacuum\n' +
				'Dash and trims sanitized\n' +
				'Glass cleaning\n',

			image: 'service-images/image-1.jpeg'
		},
		{
			name: 'Premium',
			time: '2 - 3 Days',
			paragraph:
				"Pre-foam\n" +
				"Wheels and wheel arches cleaned\n" +
				"Two bucket wash\n" +
				"Clay bar and decontamination\n" +
				"Microfiber and blow dry\n" +
				"Multi-stage paint correction\n" +
				"Four-year Gyeon coating\n" +
				"Basic interior detailing\n" +
				"Interior vacuum\n" +
				"Glass coating\n",
			image: 'service-images/image-2.jpeg'
		},
		{
			name: 'Presidential',
			time: '2 - 3 Days',
			paragraph:
				"Pre-foam\n" +
				"Wheels and wheel arches cleaned\n" +
				"Two bucket wash\n" +
				"Clay bar and decontamination\n" +
				"Microfiber and blow dry\n" +
				"Multi-stage paint correction\n" +
				"Dual layer Gyeon coating\n" +
				"Basic interior detailing\n" +
				"Interior vacuum\n" +
				"Glass coating\n" +
				"Leather coating\n" +
				"Wheel coating\n",
			image: 'service-images/image-3.jpeg'
		}
	];
</script>

<div class="p-4 bg-black text-white">
	<h3 class="text-3xl font-bold mb-10">Packages</h3>
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
