<script lang="ts">
	export let name: string;
	export let time: string;
	export let paragraph: string;
	export let image: string;
</script>

<li class="">
	<div class="flex flex-col ">
		<h4 class="text-center font-bold text-lg">{name}</h4>
		<h5 class="text-center font-thin text-xs -mt-1">{time}</h5>
		<p class="text-sm text-center font-normal px-4">{paragraph}</p>
		<img class="h-48 object-cover mt-3" src={image} alt="" />
		<div
			class="h-12 px-10 border-[1px] border-white cursor-pointer active:border-blue-500 transition-all ease-in-out">
			<div class="flex justify-center items-center h-full">
				<p>Inquire Now</p>
			</div>
		</div>
	</div>
</li>
