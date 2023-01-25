<script lang="ts">
    export let open: boolean;
</script>
<div class={`fixed inset-0 z-10 bg-black ${open ? "" : "hidden"}  flex justify-center items-center`}>
    <div class="text-4xl space-y-20">
        <h1>Home</h1>
        <h1>Book Online</h1>
        <h1>Services</h1>
    </div>
</div>
