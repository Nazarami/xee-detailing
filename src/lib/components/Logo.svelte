<script lang="ts">
	import LogoMark from './LogoMark.svelte';

	let { class: className = '' }: { class?: string } = $props();
</script>

<span class="inline-flex items-center gap-2.5 {className}">
	<LogoMark class="h-8 w-8 shrink-0" />
	<span class="flex flex-col leading-none">
		<span class="text-[1.35rem] font-black tracking-tight font-wide">XEE</span>
		<span class="mt-0.5 text-[0.55rem] font-semibold tracking-[0.42em] text-mute">DETAILING</span>
	</span>
</span>
