<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} | Xee Detailing</title>
</svelte:head>

<section class="container-x grid min-h-[80svh] place-items-center pt-18 text-center">
	<div>
		<p class="eyebrow">Error {page.status}</p>
		<h1 class="mt-6 text-4xl font-black tracking-tight font-wide md:text-6xl">
			{page.status === 404 ? "This page doesn't exist." : 'Something went wrong.'}
		</h1>
		<a href="/" class="mt-10 btn-primary">Back to home</a>
	</div>
</section>
