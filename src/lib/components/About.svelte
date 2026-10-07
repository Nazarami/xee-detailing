<script lang="ts">
	import Photo from './Photo.svelte';
	import { photos, business } from '$lib/data';
	import { reveal } from '$lib/reveal';

	const words = [
		'Paint correction',
		'Ceramic coating',
		'Interior detailing',
		'Engine bays',
		'Glass coating',
		'Leather protection',
		'Pre-sale prep'
	];
</script>

<!-- Service ticker -->
<div class="overflow-hidden border-y border-line py-5" aria-hidden="true">
	<div class="marquee flex w-max gap-10">
		{#each [...words, ...words] as word}
			<span
				class="flex items-center gap-10 text-sm font-semibold tracking-[0.2em] text-mute uppercase font-wide"
			>
				{word}<span class="text-ember">✦</span>
			</span>
		{/each}
	</div>
</div>

<section class="container-x grid items-center gap-14 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
	<div use:reveal class="relative order-2 lg:order-1">
		<div class="overflow-hidden rounded-[2rem]">
			<Photo
				photo={photos.interior}
				sizes="(min-width: 1024px) 560px, 100vw"
				class="aspect-[4/5] w-full object-cover"
			/>
		</div>
		<div
			class="absolute -right-3 -bottom-6 max-w-[15rem] rounded-2xl bg-ember p-5 text-ink shadow-2xl sm:-right-8"
		>
			<p class="text-sm leading-snug font-bold font-wide">
				"He took the time to explain each step of the detailing process."
			</p>
		</div>
	</div>

	<div class="order-1 lg:order-2">
		<p use:reveal class="eyebrow">About {business.name}</p>
		<h2
			use:reveal={80}
			class="mt-5 text-4xl leading-[1] font-black tracking-tight font-wide md:text-6xl"
		>
			Done properly, <span
				class="font-serif font-normal italic"
				style="font-variation-settings: normal">every&nbsp;time.</span
			>
		</h2>
		<div use:reveal={160} class="mt-8 space-y-5 text-lg leading-relaxed text-mute">
			<p>
				Our mission is simple: high-quality detailing that's tailored to each car and each owner.
				From a daily driver getting ready for sale to a Rolls-Royce that needs the full treatment,
				every job gets the same care.
			</p>
			<p>
				Run by {business.owner} here in {business.city}, we keep things professional, on time and
				transparent, with open communication from booking to handover, and we make sure you're happy
				every step of the way.
			</p>
		</div>
		<a use:reveal={240} href="#contact" class="mt-10 btn-ghost">Talk to {business.owner}</a>
	</div>
</section>

<style>
	.marquee {
		animation: marquee 40s linear infinite;
	}
	@keyframes marquee {
		to {
			transform: translateX(calc(-50% - 1.25rem));
		}
	}
</style>
