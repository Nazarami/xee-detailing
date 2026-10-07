<script lang="ts">
	let {
		class: className = '',
		knockout = 'var(--color-ink)'
	}: { class?: string; knockout?: string } = $props();
</script>

<!-- Two crossed "blades" forming an X; the light blade cuts through the ember one like a polish line. -->
<svg viewBox="0 0 40 40" class={className} aria-hidden="true">
	<polygon points="26,4 36,4 14,36 4,36" fill="var(--color-ember)" />
	<polygon
		points="4,4 14,4 36,36 26,36"
		fill="var(--color-bone)"
		stroke={knockout}
		stroke-width="3"
		stroke-linejoin="miter"
		paint-order="stroke"
	/>
</svg>
