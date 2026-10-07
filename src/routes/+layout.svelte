<script lang="ts">
	import '@fontsource-variable/archivo/wdth.css';
	import '@fontsource/instrument-serif/latin-400.css';
	import '@fontsource/instrument-serif/latin-400-italic.css';
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div id="top"></div>
<a
	href="#main"
	class="sr-only z-[60] rounded-full bg-ember px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
	>Skip to content</a
>
<Nav />
<main id="main">
	{@render children()}
</main>
<Footer />
