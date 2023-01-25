<script lang="ts">
	import Field from './field.svelte';
	import Button from './button.svelte';
</script>

<form
	class="w-full md:px-72 px-8 py-10 space-y-4"
	action="https://formsubmit.co/xeedetailing@gmail.com"
	method="POST">
	<Field name="Name" type="text" placeholder="Enter your name" />
	<Field name="Email" type="email" placeholder="Enter your email" />
	<Field name="Subject" type="text" placeholder="Type the subject" />
	<Field name="Message" type="text" placeholder="Type your message..." />
	<Button />
</form>
