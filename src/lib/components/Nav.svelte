<script lang="ts">
	import Logo from './Logo.svelte';
	import Icon from './Icon.svelte';
	import { business } from '$lib/data';

	const links = [
		{ href: '/#services', label: 'Services' },
		{ href: '/#packages', label: 'Packages' },
		{ href: '/#work', label: 'Our work' },
		{ href: '/#reviews', label: 'Reviews' },
		{ href: '/#contact', label: 'Contact' }
	];

	let scrolled = $state(false);
	let open = $state(false);

	$effect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
	});
</script>

<svelte:window
	onscroll={() => (scrolled = window.scrollY > 24)}
	onkeydown={(e) => e.key === 'Escape' && (open = false)}
/>

<header
	class="fixed inset-x-0 top-0 z-50 transition duration-500 {scrolled || open
		? 'border-b border-line/60 bg-ink/80 backdrop-blur-xl'
		: 'border-b border-transparent'}"
>
	<nav class="container-x flex h-18 items-center justify-between">
		<a href="/" aria-label="{business.name} home" onclick={() => (open = false)}>
			<Logo />
		</a>

		<ul class="hidden items-center gap-8 text-sm lg:flex">
			{#each links as link}
				<li>
					<a href={link.href} class="text-mute transition hover:text-bone">{link.label}</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-3">
			<a
				href={business.phoneHref}
				class="hidden text-sm text-mute transition hover:text-bone md:block"
			>
				{business.phone}
			</a>
			<a href="/#contact" class="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">Get a quote</a>
			<button
				class="relative -mr-2 grid h-11 w-11 place-items-center lg:hidden"
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
				aria-controls="mobile-menu"
				onclick={() => (open = !open)}
			>
				<span
					class="absolute h-0.5 w-6 bg-bone transition duration-300 {open
						? 'rotate-45'
						: '-translate-y-1.5'}"
				></span>
				<span
					class="absolute h-0.5 w-6 bg-bone transition duration-300 {open
						? '-rotate-45'
						: 'translate-y-1.5'}"
				></span>
			</button>
		</div>
	</nav>
</header>

<!-- Kept outside <header>: its backdrop-filter would otherwise contain this fixed panel. -->
{#if open}
	<div
		id="mobile-menu"
		class="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto bg-ink lg:hidden"
	>
		<ul class="container-x flex flex-col py-6">
			{#each links as link, i}
				<li
					class="border-b border-line"
					style="animation: menu-in .5s {i * 50}ms both var(--ease-out-expo)"
				>
					<a
						href={link.href}
						class="flex items-center justify-between py-5 text-2xl font-bold font-wide"
						onclick={() => (open = false)}
					>
						{link.label}
						<Icon name="arrow" class="h-5 w-5 text-ember" />
					</a>
				</li>
			{/each}
		</ul>
		<div class="container-x flex flex-col gap-3 pb-10">
			<a href="/#contact" class="btn-primary" onclick={() => (open = false)}>Get a quote</a>
			<a href={business.phoneHref} class="btn-ghost">
				<Icon name="phone" class="h-4 w-4" /> Call {business.phone}
			</a>
		</div>
	</div>
{/if}

<style>
	@keyframes -global-menu-in {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
	}
</style>
