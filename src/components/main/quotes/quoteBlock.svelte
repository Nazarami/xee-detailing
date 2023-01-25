<script lang="ts">
	import QuoteSvg from './quoteSVG.svelte';
	export let text: string;
</script>

<div class="md:flex flex-col md:items-center md:space-y-4 flex items-center">
	<QuoteSvg />
	<p class="px-4">{text}</p>
</div>
