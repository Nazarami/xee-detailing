<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { business } from '$lib/data';
</script>

<svelte:head>
	<title>Thanks | {business.name}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="container-x grid min-h-[80svh] place-items-center pt-18 text-center">
	<div class="max-w-xl">
		<span class="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ember text-ink">
			<Icon name="check" class="h-8 w-8" />
		</span>
		<h1 class="mt-8 text-4xl font-black tracking-tight font-wide md:text-6xl">Message sent.</h1>
		<p class="mt-6 text-lg text-mute">
			Thanks for getting in touch. {business.owner} will be back to you shortly. Need an answer sooner?
			Call <a href={business.phoneHref} class="text-bone underline">{business.phone}</a>.
		</p>
		<a href="/" class="mt-10 btn-ghost">Back to home</a>
	</div>
</section>
