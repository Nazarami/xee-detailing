<script>
  import PopUpMenu from "./popup.svelte";
  let open = false;
</script>

<div>
    <div class="md:hidden">
      <button class="w-10 h-10 relative focus:outline-none z-30" on:click={() => open = !open}>
        <span class="sr-only">Open main menu</span>
        <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span aria-hidden="true" class={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? "rotate-45" : "-translate-y-1.5"}`}/>
          <span aria-hidden="true" class={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? "opacity-0" : "block"}`}/>
          <span aria-hidden="true" class={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? "-rotate-45" : "translate-y-1.5"}`}/>
        </div>
      </button>
      <PopUpMenu open={open} />
    </div>
</div>
