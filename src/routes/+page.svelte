<script>
	import Image from '../components/main/image.svelte';
	import ParagraphBlock from '../components/main/paragraphBlock.svelte';
	import Services from '../components/main/services/main.svelte';
	import Quotes from '../components/main/quotes/main.svelte';
	import ContactForm from '../components/main/contactForm/main.svelte';
	const mainText =
		'Our mission at Xeedetailing is simple: to provide high-quality services for our valued clients. Our team goes above and beyond to cater to each project’s specific needs. Through open communication and exceptional service, we hope you’ll find what you’re looking for with our Car Detailing Service. For more information or general inquiries, get in touch today.';
	const commitmentText =
		'Xeedetailing is committed to getting the job done, especially when it comes to their services. You can count on us to be professional, timely, efficient and make sure you’re satisfied every step of the way.';
</script>

<main class="flex-1 bg-black text-white">
	<Image src="main-images/image-0.jpeg" />
	<ParagraphBlock text={mainText} />
	<Image src="main-images/image-1.jpeg" />
	<ParagraphBlock text={commitmentText} />
	<Services />
	<Quotes />
	<ContactForm />
</main>
