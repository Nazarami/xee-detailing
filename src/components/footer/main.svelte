<script lang="ts">
	import Instagram from '../navbar/upper/socialMedia/assets/instagram.svelte';
	import Facebook from '../navbar/upper/socialMedia/assets/facebook.svelte';
	import Tiktok from '../navbar/upper/socialMedia/assets/tiktok.svelte';
</script>

<footer
	class="h-[240px] bg-[#0c0c0d] justify-center items-center flex font-bold"
	id="element-to-scroll-to">
	<div class=" flex space-y-4 flex-col text-white text-center items-center">
		<h1 class="text-2xl font-bold">Xee Detailing</h1>
		<h3 class="text-sm">
			<a href="mailto:xeedetailing.com">xeedetailing@gmail.com</a>
		</h3>
		<h4>
			<a href="tel:+61401760066" class="text-sm"> 0401 760 066 </a>
		</h4>
		<div class="flex space-x-2 items-center">
			<a href="https://www.instagram.com/xeedetailing/" target="_blank" rel="noreferrer">
				<Instagram />
			</a>
			<a
				href="https://m.facebook.com/profile.php?id=100087631721670&eav=Afb3pRAyo2tUHx5G8_706g8dbGT51LkRY4svfCMnjUdHjcWtlX5a7Y49rqsPN4T5E4M&paipv=0&_rdr/"
				target="_blank"
				rel="noreferrer">
				<Facebook />
			</a>
			<a
				href="https://www.tiktok.com/@xeedetailing?_t=8YydBDV9oCA&_r=1"
				target="_blank"
				rel="noreferrer">
				<Tiktok />
			</a>
		</div>
	</div>
</footer>
