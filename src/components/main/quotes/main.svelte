<script lang="ts">
	import QuoteBlock from './quoteBlock.svelte';
	const textArray: string[] = [
		`Huss at Xee Detailing is an exceptional professional with an unparalleled work rate and ethic. He offers the best value for your money with fair and transparent pricing, and his attention to detail is impeccable. I highly recommend his services, whether you're looking for a simple wash or a full detailing, and as a regular customer, I confidently rate his service as a perfect 10 out of 10.`,
		`I recently brought my car in for Xee Detailing's paint protection package and couldn't be happier with the results. The coating is of high quality and performs well even under harsh weather conditions in Melbourne. I highly recommend their service and team for their professionalism, attention to detail and top-notch customer service. They exceeded my expectations and I'll definitely be a returning customer.`,
		`I am extremely satisfied with my experience at Xee Detailing. Huss's attention to detail is truly impressive and he took the time to explain each step of the detailing process. I am impressed by his professional and friendly service and I highly recommend Xee Detailing for anyone in need of high-quality detailing services. Thank you, Huss and team, for a job well done.`
	];
</script>

<div>
	<div class="flex flex-col text-center px-12 space-y-4 md:flex-row md:space-y-0 py-4">
		{#each textArray as text}
			<QuoteBlock {text} />
		{/each}
	</div>
</div>
