<script lang="ts">
	export let name: string;
	export let type: string;
	export let placeholder: string;
	export let value;
</script>

<div>
	<label for={name} class="px-2 font-thin text-md">{name}</label>
	<input
		bind:value
		type="text"
		{name}
		required
		{placeholder}
		class={`h-[43px] hover:border-[#4e80ee] active:border-[#4e80ee] transition-colors ease-in-out bg-black p-2 border-[1px] rounded-sm border-gray-500 outline-none text-left} w-full`}
	/>
</div>
