<script lang="ts">
	export let src: string;
</script>

<div class="w-screen" id="image-container">
	<img {src} alt="" class="h-full w-full object-cover object-center" />
</div>

<style>
	#image-container {
		height: calc(100vh - 155px);
	}
</style>
