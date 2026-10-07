<script lang="ts">
	import Photo from './Photo.svelte';
	import Icon from './Icon.svelte';
	import { gallery, business } from '$lib/data';
	import { reveal } from '$lib/reveal';

	let dialog: HTMLDialogElement;
	let current = $state(0);

	function show(i: number) {
		current = i;
		dialog.showModal();
	}
	function step(dir: number) {
		current = (current + dir + gallery.length) % gallery.length;
	}

	// Bento layout on desktop: a 4 × 4 grid with no gaps. One entry per photo, in order.
	const layout = [
		'col-span-2 row-span-2',
		'lg:row-span-2',
		'',
		'',
		'lg:row-span-2',
		'lg:col-span-2 lg:row-span-2',
		'lg:row-span-2'
	];
</script>

<section id="work" class="bg-ink-2 py-24 md:py-32">
	<div class="container-x">
		<div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
			<div>
				<p use:reveal class="eyebrow">Our work</p>
				<h2
					use:reveal={80}
					class="mt-5 text-4xl leading-[1] font-black tracking-tight font-wide md:text-6xl"
				>
					Recently in the bay.
				</h2>
			</div>
			<a
				use:reveal={160}
				href={business.socials.instagram}
				target="_blank"
				rel="noreferrer"
				class="btn-ghost self-start md:self-auto"
			>
				<Icon name="instagram" class="h-4 w-4" /> More on Instagram
			</a>
		</div>

		<div
			class="mt-14 grid auto-rows-[12rem] grid-cols-2 gap-4 sm:auto-rows-[16rem] lg:auto-rows-[13rem] lg:grid-cols-4"
		>
			{#each gallery as photo, i}
				<button
					use:reveal={(i % 4) * 80}
					class="group relative overflow-hidden rounded-[1.25rem] bg-ink-3 {layout[i]}"
					onclick={() => show(i)}
					aria-label="View larger: {photo.alt}"
				>
					<Photo
						{photo}
						sizes="(min-width: 1024px) 40vw, 50vw"
						class="h-full w-full object-cover transition duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-105"
					/>
					<div class="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/20"></div>
				</button>
			{/each}
		</div>
	</div>
</section>

<dialog
	bind:this={dialog}
	class="lightbox m-0 h-dvh max-h-none w-screen max-w-none bg-ink/95 p-0 backdrop:bg-transparent"
	onclick={(e) => e.target === e.currentTarget && dialog.close()}
	onkeydown={(e) => {
		if (e.key === 'ArrowRight') step(1);
		if (e.key === 'ArrowLeft') step(-1);
	}}
>
	<div class="pointer-events-none flex h-full items-center justify-center p-4 sm:p-12">
		{#key current}
			<Photo
				photo={gallery[current]}
				sizes="100vw"
				class="pointer-events-auto max-h-full w-auto max-w-full rounded-xl object-contain"
			/>
		{/key}
	</div>
	<button
		class="absolute top-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-ink-3 text-bone transition hover:bg-ember hover:text-ink"
		onclick={() => dialog.close()}
		aria-label="Close"
	>
		<Icon name="close" />
	</button>
	<button
		class="absolute bottom-6 left-1/2 grid h-12 w-12 -translate-x-[calc(100%+0.5rem)] rotate-180 place-items-center rounded-full bg-ink-3 text-bone transition hover:bg-ember hover:text-ink"
		onclick={() => step(-1)}
		aria-label="Previous photo"
	>
		<Icon name="arrow" />
	</button>
	<button
		class="absolute bottom-6 left-1/2 grid h-12 w-12 translate-x-2 place-items-center rounded-full bg-ink-3 text-bone transition hover:bg-ember hover:text-ink"
		onclick={() => step(1)}
		aria-label="Next photo"
	>
		<Icon name="arrow" />
	</button>
</dialog>
