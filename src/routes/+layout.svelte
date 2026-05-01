<script>
import '../app.css'
import Navbar from '../components/navbar/main.svelte'
import Footer from '../components/footer/main.svelte'
</script>

<svelte:head>
	<title>Xee Detailing</title>
	<link rel="icon" href="logo.svg">
</svelte:head>

<Navbar />
<slot />
<Footer />
