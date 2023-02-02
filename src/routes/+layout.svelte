<script>
	import '../app.css';
	import Navbar from '../components/navbar/main.svelte';
	import Footer from '../components/footer/main.svelte';
</script>

<head>
	<title>Xee Detailing</title>
	<link rel="icon" href="logo.svg" />
</head>

<Navbar />
<slot />
<Footer />
