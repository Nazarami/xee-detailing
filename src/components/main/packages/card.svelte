<script lang="ts">
  type Package = {
    title: string,
    duration: string,
    price: string,
    services: string[]
  }
  export let p: Package;
</script>
<div class="rounded-lg py-8 bg-[#141414] h-[618px] w-full flex-1 md:w-[250px] md:h-full md:p-8">
  <div class=" my-4 text-center text-4xl font-bold">{p.title}</div>
  <div class=" text-center text-sm">
    <p class="text-xs mb-2">{p.duration}</p>
    <p class="text-xs mb-2">{p.price}</p>
    <p class="text-xs">Prices vary depending on size and condition of vehicle</p>
  </div>
  <div class=" mt-6">
    <ul class="flex flex-col space-y-4 px-4">
      {#each p.services as service}
        <li class="flex items-center">
          <img src="checkbox.svg" alt="" class="h-6">
          <p class="text-xs ml-4">{service}</p>
        </li>
      {/each}
    </ul>
  </div>
</div>