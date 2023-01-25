<script>
	import '../app.css';
	import Navbar from '../components/navbar/main.svelte';
	import Footer from '../components/footer/main.svelte';
	export const prerender = true;
</script>

<head>
	<title>Xee Detailing</title>
</head>

<Navbar />
<slot />
<Footer />
