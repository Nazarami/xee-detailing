<script lang="ts">
	import Photo from './Photo.svelte';
	import { services, processSteps } from '$lib/data';
	import { reveal } from '$lib/reveal';
</script>

<section id="services" class="bg-ink-2 py-24 md:py-32">
	<div class="container-x">
		<div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
			<div>
				<p use:reveal class="eyebrow">Services</p>
				<h2
					use:reveal={80}
					class="mt-5 max-w-2xl text-4xl leading-[1] font-black tracking-tight font-wide md:text-6xl"
				>
					Inside, outside and under the bonnet.
				</h2>
			</div>
			<p use:reveal={160} class="max-w-sm text-lg text-mute">
				Every service is available on its own or as part of a package.
			</p>
		</div>

		<div class="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each services as service, i}
				<article
					use:reveal={i * 90}
					class="group relative isolate flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-ink-3 p-6"
				>
					<Photo
						photo={service.photo}
						sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
						class="absolute inset-0 -z-10 h-full w-full object-cover transition duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-105"
					/>
					<div
						class="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-transparent"
					></div>
					<span class="text-sm font-bold text-ember font-wide">0{i + 1}</span>
					<h3 class="mt-2 text-2xl font-bold font-wide">{service.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-bone/75">{service.body}</p>
				</article>
			{/each}
		</div>

		<!-- Process -->
		<div class="mt-28">
			<p use:reveal class="eyebrow">How we work</p>
			<ol class="mt-10 grid border-t border-line md:grid-cols-4">
				{#each processSteps as step, i}
					<li
						use:reveal={i * 90}
						class="border-b border-line py-8 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
					>
						<span class="text-5xl font-black text-dim font-wide"
							>{String(i + 1).padStart(2, '0')}</span
						>
						<h3 class="mt-6 text-xl font-bold font-wide">{step.title}</h3>
						<p class="mt-3 leading-relaxed text-mute">{step.body}</p>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>
