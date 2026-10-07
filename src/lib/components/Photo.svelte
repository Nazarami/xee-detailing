<script lang="ts">
	import type { Photo } from '$lib/data';

	let {
		photo,
		sizes = '100vw',
		class: className = '',
		eager = false
	}: { photo: Photo; sizes?: string; class?: string; eager?: boolean } = $props();

	const src = (w: number) => `/photos/${photo.name}-${w}.webp`;
	const widths = $derived(photo.widths);
	const srcset = $derived(
		[800, 1600, 2400].map((file, i) => `${src(file)} ${widths[i]}w`).join(', ')
	);
</script>

<img
	src={src(1600)}
	{srcset}
	{sizes}
	alt={photo.alt}
	width={widths[1]}
	height={Math.round(widths[1] / photo.ratio)}
	loading={eager ? 'eager' : 'lazy'}
	fetchpriority={eager ? 'high' : 'auto'}
	decoding="async"
	class={className}
/>
