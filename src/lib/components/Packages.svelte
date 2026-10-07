<script lang="ts">
	import Icon from './Icon.svelte';
	import { packages } from '$lib/data';
	import { enquiry } from '$lib/enquiry.svelte';
	import { reveal } from '$lib/reveal';

	// On small screens each list starts collapsed to keep the page scannable.
	const PREVIEW = 6;
	let expanded = $state<Record<string, boolean>>({});
</script>

<section id="packages" class="relative py-24 md:py-32">
	<div
		class="pointer-events-none absolute top-1/3 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-ember/10 blur-[160px]"
	></div>
	<div class="container-x">
		<div class="mx-auto max-w-3xl text-center">
			<p use:reveal class="eyebrow">Packages</p>
			<h2
				use:reveal={80}
				class="mt-5 text-4xl leading-[1] font-black tracking-tight font-wide md:text-6xl"
			>
				Pick your level of <span
					class="font-serif font-normal italic"
					style="font-variation-settings: normal">protection.</span
				>
			</h2>
			<p use:reveal={160} class="mt-6 text-lg text-mute">
				Pricing depends on the size and condition of your vehicle. Tell us about your car and we'll
				come back with a quote.
			</p>
		</div>

		<div class="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
			{#each packages as pkg, i}
				<article
					use:reveal={i * 90}
					class="relative flex flex-col rounded-[1.75rem] border p-7 {pkg.featured
						? 'border-ember bg-ink-3 shadow-2xl shadow-ember/10'
						: 'border-line bg-ink-2'}"
				>
					{#if pkg.featured}
						<span
							class="absolute -top-3 left-7 rounded-full bg-ember px-3 py-1 text-[0.65rem] font-bold tracking-widest text-ink uppercase"
							>Recommended</span
						>
					{/if}
					<h3 class="text-3xl font-black font-wide">{pkg.title}</h3>
					<p class="mt-3 min-h-12 text-sm leading-relaxed text-mute">{pkg.tagline}</p>

					<dl class="mt-6 space-y-3 border-y border-line py-5 text-sm">
						<div class="flex items-center gap-3">
							<dt>
								<Icon name="clock" class="h-4 w-4 text-ember" /><span class="sr-only">Duration</span
								>
							</dt>
							<dd>{pkg.duration}</dd>
						</div>
						<div class="flex items-center gap-3">
							<dt>
								<Icon name="shield" class="h-4 w-4 text-ember" /><span class="sr-only"
									>Protection</span
								>
							</dt>
							<dd>{pkg.protection}</dd>
						</div>
					</dl>

					<ul class="mt-6 flex-1 space-y-3 text-sm">
						{#each pkg.services as item, j}
							<li
								class="gap-3 text-bone/85 {j >= PREVIEW && !expanded[pkg.id]
									? 'hidden md:flex'
									: 'flex'}"
							>
								<Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-ember" />
								{item}
							</li>
						{/each}
					</ul>
					{#if pkg.services.length > PREVIEW}
						<button
							class="mt-4 self-start text-sm font-semibold text-ember md:hidden"
							aria-expanded={!!expanded[pkg.id]}
							onclick={() => (expanded[pkg.id] = !expanded[pkg.id])}
						>
							{expanded[pkg.id] ? 'Show less' : `Show all ${pkg.services.length} inclusions`}
						</button>
					{/if}

					<a
						href="#contact"
						class="mt-8 w-full {pkg.featured ? 'btn-primary' : 'btn-ghost'}"
						onclick={() => (enquiry.packageName = pkg.title)}
					>
						Enquire about {pkg.title}
					</a>
				</article>
			{/each}
		</div>

		<p use:reveal class="mt-10 text-center text-sm text-dim">
			Need something specific, like a one-off interior detail or coating top-up? Just ask.
		</p>
	</div>
</section>
