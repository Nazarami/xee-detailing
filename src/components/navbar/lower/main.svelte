<script>
	function handleButtonClick() {
		const element = document.getElementById('element-to-scroll-to');
		if (element) {
			const targetPosition = element.offsetTop;
			let currentPosition = window.pageYOffset;
			const speed = (targetPosition - currentPosition) / 80;

			const animateScroll = () => {
				currentPosition += speed;
				if (currentPosition >= targetPosition) {
					window.scrollTo(0, targetPosition);
					return;
				}
				window.scrollTo(0, currentPosition);
				requestAnimationFrame(animateScroll);
			};

			animateScroll();
		}
	}
</script>

<div
	class="bg-[#0c0c0d] h-[140px] p-[20px] flex flex-col justify-center text-white md:flex-row md:justify-between md:px-[75px] md:h-[115px] md:items-center"
>
	<div class="flex items-center">
		<img src="logo.svg" alt="" class="h-10" />
		<h1 class="text-xl font-bold mb-[25px] md:mb-0 mt-6 ml-1 md:mt-0">Xee Detailing</h1>
	</div>
	<button
		on:click={handleButtonClick}
		class=" h-[60px] w-full text-center py-[10px] border-solid border-white border-2 rounded-md box-border md:h-[45px] md:w-[125px] cursor-pointer hover:border-blue-500 active:bg-gray-800 transition-all duration-150 ease-in-out hover:scale-105 text-small"
	>
		Get In Touch
	</button>
</div>
