<script lang="ts">
	import Logo from './Logo.svelte';
	import Icon from './Icon.svelte';
	import { business } from '$lib/data';

	const socials = [
		{ href: business.socials.instagram, label: 'Instagram', icon: 'instagram' },
		{ href: business.socials.facebook, label: 'Facebook', icon: 'facebook' },
		{ href: business.socials.tiktok, label: 'TikTok', icon: 'tiktok' }
	] as const;
</script>

<footer class="border-t border-line">
	<div class="container-x py-16">
		<p
			class="text-[clamp(4rem,17vw,15rem)] leading-[0.8] font-black tracking-[-0.04em] text-bone/[0.06] select-none font-wide"
			aria-hidden="true"
		>
			XEE
		</p>
		<div class="mt-12 grid gap-10 md:grid-cols-3">
			<div>
				<Logo />
				<p class="mt-5 max-w-xs text-sm leading-relaxed text-mute">
					Paint correction, ceramic coatings and interior detailing in {business.city}.
				</p>
			</div>
			<div class="text-sm">
				<p class="mb-4 text-xs font-semibold tracking-widest text-dim uppercase">Get in touch</p>
				<ul class="space-y-2">
					<li>
						<a href={business.phoneHref} class="transition hover:text-ember">{business.phone}</a>
					</li>
					<li>
						<a href="mailto:{business.email}" class="transition hover:text-ember"
							>{business.email}</a
						>
					</li>
					<li class="text-mute">{business.city}, {business.region}</li>
				</ul>
			</div>
			<div>
				<p class="mb-4 text-xs font-semibold tracking-widest text-dim uppercase">Follow</p>
				<div class="flex gap-3">
					{#each socials as s}
						<a
							href={s.href}
							target="_blank"
							rel="noreferrer"
							aria-label={s.label}
							class="grid h-11 w-11 place-items-center rounded-full border border-line transition hover:border-ember hover:bg-ember hover:text-ink"
						>
							<Icon name={s.icon} class="h-5 w-5" />
						</a>
					{/each}
				</div>
			</div>
		</div>
		<div
			class="mt-14 flex flex-col justify-between gap-2 border-t border-line pt-6 text-xs text-dim sm:flex-row"
		>
			<p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
			<a href="#top" class="transition hover:text-bone">Back to top ↑</a>
		</div>
	</div>
</footer>
