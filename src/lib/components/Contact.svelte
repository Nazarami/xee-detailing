<script lang="ts">
	import Icon from './Icon.svelte';
	import { business, packages } from '$lib/data';
	import { enquiry } from '$lib/enquiry.svelte';
	import { reveal } from '$lib/reveal';

	const field =
		'bg-ink border-line placeholder:text-dim focus:border-ember w-full rounded-xl border px-4 py-3.5 text-base transition outline-none';
	const label = 'text-mute mb-2 block text-xs font-semibold tracking-widest uppercase';
</script>

<section id="contact" class="relative overflow-hidden bg-ink-2 py-24 md:py-32">
	<div
		class="pointer-events-none absolute -bottom-40 -left-20 h-[32rem] w-[32rem] rounded-full bg-ember/15 blur-[160px]"
	></div>
	<div class="relative container-x grid gap-16 lg:grid-cols-5">
		<div class="lg:col-span-2">
			<p use:reveal class="eyebrow">Contact</p>
			<h2
				use:reveal={80}
				class="mt-5 text-4xl leading-[1] font-black tracking-tight font-wide md:text-6xl"
			>
				Let's book your car in.
			</h2>
			<p use:reveal={160} class="mt-6 text-lg leading-relaxed text-mute">
				Send through a few details and we'll get back to you with a quote, usually the same day.
				Prefer to chat? Call or message {business.owner} directly.
			</p>

			<ul use:reveal={240} class="mt-10 space-y-4">
				<li>
					<a href={business.phoneHref} class="group flex items-center gap-4">
						<span
							class="grid h-12 w-12 place-items-center rounded-full border border-line transition group-hover:border-ember group-hover:bg-ember group-hover:text-ink"
							><Icon name="phone" /></span
						>
						<span class="text-lg font-bold font-wide">{business.phone}</span>
					</a>
				</li>
				<li>
					<a href="mailto:{business.email}" class="group flex items-center gap-4">
						<span
							class="grid h-12 w-12 place-items-center rounded-full border border-line transition group-hover:border-ember group-hover:bg-ember group-hover:text-ink"
							><Icon name="mail" /></span
						>
						<span class="text-lg font-bold break-all font-wide">{business.email}</span>
					</a>
				</li>
				<li class="flex items-center gap-4">
					<span class="grid h-12 w-12 place-items-center rounded-full border border-line"
						><Icon name="pin" /></span
					>
					<span class="text-lg font-bold font-wide">{business.city}, {business.region}</span>
				</li>
			</ul>
		</div>

		<form
			use:reveal={120}
			action="https://formsubmit.co/{business.email}"
			method="POST"
			class="grid gap-5 rounded-[2rem] border border-line bg-ink-3/60 p-6 backdrop-blur sm:grid-cols-2 sm:p-10 lg:col-span-3"
		>
			<input type="hidden" name="_subject" value="New quote request from xeedetailing.com" />
			<input type="hidden" name="_template" value="table" />
			<input type="hidden" name="_next" value="{business.url}/thanks" />
			<input type="text" name="_honey" class="hidden" tabindex="-1" autocomplete="off" />

			<div>
				<label for="name" class={label}>Name</label>
				<input
					id="name"
					name="Name"
					required
					autocomplete="name"
					placeholder="Your name"
					class={field}
				/>
			</div>
			<div>
				<label for="phone" class={label}>Phone</label>
				<input
					id="phone"
					name="Phone"
					type="tel"
					autocomplete="tel"
					placeholder="04xx xxx xxx"
					class={field}
				/>
			</div>
			<div class="sm:col-span-2">
				<label for="email" class={label}>Email</label>
				<input
					id="email"
					name="Email"
					type="email"
					required
					autocomplete="email"
					placeholder="you@example.com"
					class={field}
				/>
			</div>
			<div>
				<label for="vehicle" class={label}>Vehicle</label>
				<input id="vehicle" name="Vehicle" placeholder="e.g. 2021 Golf R" class={field} />
			</div>
			<div>
				<label for="package" class={label}>Package</label>
				<div class="relative">
					<select
						id="package"
						name="Package"
						bind:value={enquiry.packageName}
						class="{field} appearance-none pr-10"
					>
						<option value="">Not sure yet</option>
						{#each packages as pkg}
							<option value={pkg.title}>{pkg.title}</option>
						{/each}
						<option value="Something else">Something else</option>
					</select>
					<Icon
						name="arrow"
						class="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 rotate-90 text-mute"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class={label}>Message</label>
				<textarea
					id="message"
					name="Message"
					rows="5"
					required
					placeholder="Tell us about the car's condition and what you're after."
					class="{field} resize-y"></textarea>
			</div>
			<div class="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
				<p class="text-sm text-dim">We'll only use your details to reply to you.</p>
				<button type="submit" class="btn-primary">
					Send enquiry <Icon name="arrow" class="h-4 w-4" />
				</button>
			</div>
		</form>
	</div>
</section>
