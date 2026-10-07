<script lang="ts">
	import Icon from './Icon.svelte';
	import { reviews } from '$lib/data';
	import { reveal } from '$lib/reveal';
</script>

<section id="reviews" class="container-x py-24 md:py-32">
	<p use:reveal class="eyebrow">Reviews</p>
	<h2
		use:reveal={80}
		class="mt-5 max-w-3xl text-4xl leading-[1] font-black tracking-tight font-wide md:text-6xl"
	>
		Our clients <span class="font-serif font-normal italic" style="font-variation-settings: normal"
			>say it best.</span
		>
	</h2>

	<div class="mt-16 grid gap-5 lg:grid-cols-3">
		{#each reviews as review, i}
			<figure
				use:reveal={i * 90}
				class="flex flex-col rounded-[1.75rem] border border-line bg-ink-2 p-8"
			>
				<div class="flex gap-1 text-ember" aria-label="5 out of 5 stars">
					{#each Array(5) as _}<Icon name="star" class="h-4 w-4" />{/each}
				</div>
				<blockquote class="mt-6 flex-1 text-lg leading-relaxed text-bone/90">
					“{review.quote}”
				</blockquote>
				<figcaption class="mt-8 border-t border-line pt-5 text-sm text-mute">
					{review.context}
				</figcaption>
			</figure>
		{/each}
	</div>
</section>
