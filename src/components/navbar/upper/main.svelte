<script>
  import HamburgerMenu from "./hamburger/main.svelte"
	import SocialMedia from "./socialMedia/main.svelte";
</script>
<div class="bg-blue-500 h-[40px]">
    <nav class="bg-[#19191e] flex h-[40px] px-[25px] justify-between items-center z-0 text-white md:flex-row-reverse">
      <div class="flex space-x-2 items-center">
        <SocialMedia />
      </div>
      <HamburgerMenu />
    </nav>
  </div>
