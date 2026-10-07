<script lang="ts">
	import Photo from './Photo.svelte';
	import Icon from './Icon.svelte';
	import { photos, business } from '$lib/data';
</script>

<section class="relative isolate overflow-hidden pt-18">
	<!-- Mobile: photo sits behind the copy -->
	<div class="absolute inset-0 -z-10 lg:hidden">
		<!-- Tiny `sizes` on desktop so the hidden copy fetches the smallest file. -->
		<Photo
			photo={photos.rollsRoyce}
			eager
			sizes="(min-width: 1024px) 1px, 100vw"
			class="h-full w-full object-cover object-[50%_30%] opacity-45"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30"></div>
	</div>
	<!-- Soft ember glow -->
	<div
		class="pointer-events-none absolute -top-40 -left-40 -z-10 h-[36rem] w-[36rem] rounded-full bg-ember/20 blur-[140px]"
	></div>

	<div
		class="container-x grid min-h-[calc(100svh-4.5rem)] items-center gap-12 py-16 lg:grid-cols-12 lg:py-20"
	>
		<div class="lg:col-span-7">
			<p class="hero-in eyebrow" style="--d:0ms">Car detailing · {business.city}</p>
			<h1
				class="hero-in mt-6 text-[clamp(2.6rem,7.4vw,6rem)] leading-[0.9] font-black tracking-[-0.03em] font-wide"
				style="--d:80ms"
			>
				Obsessive detail, <span
					class="block font-serif text-[1.08em] font-normal tracking-normal italic"
					style="font-variation-settings: normal">for cars that deserve&nbsp;it.</span
				>
			</h1>
			<p class="hero-in mt-8 max-w-xl text-lg leading-relaxed text-mute" style="--d:160ms">
				Paint correction, Gyeon ceramic coatings and meticulous interior work, done by hand with
				patience and the right products.
			</p>
			<div class="hero-in mt-10 flex flex-wrap gap-3" style="--d:240ms">
				<a href="#contact" class="btn-primary">
					Get a free quote <Icon name="arrow" class="h-4 w-4" />
				</a>
				<a href="#packages" class="btn-ghost">View packages</a>
			</div>

			<dl class="hero-in mt-14 grid max-w-lg grid-cols-3 gap-6" style="--d:320ms">
				<div>
					<dt class="text-xs tracking-widest text-dim uppercase">Coatings</dt>
					<dd class="mt-1 text-base font-bold font-wide sm:text-lg">Gyeon</dd>
				</div>
				<div>
					<dt class="text-xs tracking-widest text-dim uppercase">Coating life</dt>
					<dd class="mt-1 text-base font-bold font-wide sm:text-lg">2–4+ yrs</dd>
				</div>
				<div>
					<dt class="text-xs tracking-widest text-dim uppercase">Turnaround</dt>
					<dd class="mt-1 text-base font-bold font-wide sm:text-lg">1–3 days</dd>
				</div>
			</dl>
		</div>

		<!-- Desktop: stacked photo composition -->
		<div class="relative hidden h-full min-h-[38rem] lg:col-span-5 lg:block">
			<div class="hero-photo absolute inset-y-0 right-0 w-[82%] overflow-hidden rounded-[2rem]">
				<Photo
					photo={photos.rollsRoyce}
					eager
					sizes="(min-width: 1280px) 440px, 35vw"
					class="h-full w-full object-cover"
				/>
			</div>
			<div
				class="hero-photo absolute bottom-10 left-0 w-[46%] overflow-hidden rounded-[1.5rem] border-[6px] border-ink"
				style="--d:200ms"
			>
				<Photo photo={photos.mclaren} sizes="240px" class="aspect-[3/4] w-full object-cover" />
			</div>
		</div>
	</div>
</section>

<style>
	.hero-in {
		animation: hero-in 1s var(--d, 0ms) both var(--ease-out-expo);
	}
	.hero-photo {
		animation: hero-photo 1.4s var(--d, 0ms) both var(--ease-out-expo);
	}
	@keyframes hero-in {
		from {
			opacity: 0;
			transform: translateY(28px);
		}
	}
	@keyframes hero-photo {
		from {
			opacity: 0;
			transform: scale(0.96) translateY(20px);
		}
	}
</style>
