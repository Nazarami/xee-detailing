<script lang="ts">
	type Name =
		| 'instagram'
		| 'facebook'
		| 'tiktok'
		| 'arrow'
		| 'check'
		| 'phone'
		| 'mail'
		| 'pin'
		| 'clock'
		| 'shield'
		| 'close'
		| 'star';
	let { name, class: className = 'h-5 w-5' }: { name: Name; class?: string } = $props();
</script>

<svg
	viewBox="0 0 24 24"
	class={className}
	fill="none"
	stroke="currentColor"
	stroke-width="1.75"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	{#if name === 'instagram'}
		<rect x="3" y="3" width="18" height="18" rx="5" />
		<circle cx="12" cy="12" r="4" />
		<circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
	{:else if name === 'facebook'}
		<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5Z" />
	{:else if name === 'tiktok'}
		<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
		<path d="M14 3c.5 2.8 2.4 4.6 5 5" />
	{:else if name === 'arrow'}
		<path d="M5 12h14M13 6l6 6-6 6" />
	{:else if name === 'check'}
		<path d="m5 12.5 4.5 4.5L19 7.5" />
	{:else if name === 'phone'}
		<path
			d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"
		/>
	{:else if name === 'mail'}
		<rect x="3" y="5" width="18" height="14" rx="2" />
		<path d="m3 7 9 6 9-6" />
	{:else if name === 'pin'}
		<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
		<circle cx="12" cy="9" r="2.5" />
	{:else if name === 'clock'}
		<circle cx="12" cy="12" r="9" />
		<path d="M12 7v5l3 2" />
	{:else if name === 'shield'}
		<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
	{:else if name === 'close'}
		<path d="M6 6l12 12M18 6 6 18" />
	{:else if name === 'star'}
		<path
			d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9L12 3Z"
			fill="currentColor"
			stroke="none"
		/>
	{/if}
</svg>
