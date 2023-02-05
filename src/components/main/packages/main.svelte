<script lang="ts">
  import Card from "./card.svelte";
  type Package = {
    title: string,
    duration: string,
    price: string,
    services: string[]
  }
  const preSale: Package = {
    title: "Pre-sale",
    duration: "1 Day",
    price: "Starting from $500",
    services: [
      "Wheels and arches cleaned",
      "Engine bay detail",
      "High pressure rinse & foam with two bucket wash",
      "Contactless heated blow dry to prevent any further scratches",
      "Gloss enhancement polish",
      "Hydrophobic spray sealant applied",
      "Tyres dressed",
      "Carpet cleaned and sanitised",
      "Rubber floor mats pressure cleaned and sanitised",
      "Leather seats cleaned & conditioned",
      "Interior glass and windshield cleaned",
      "Foot pedals cleaned and sanitised"
    ]
  }
  const standard: Package = {
    title: "Standard",
    duration: "1 - 2 Days",
    price: "Starting from $800",
    services: [
      "Wheels and arches cleaned",
      "High pressure rinse & foam with two bucket wash",
      "Decontamination and clay bar treatment",
      "Contactless heated blow dry to prevent any further scratches",
      "Single stage paint correction",
      "Application of Gyeon ONE EVO ( two year year coating)",
      "Tyres dressed",
      "Carpet cleaned and sanitised",
      "Rubber floor mats pressure cleaned",
      "Interior glass and windshield cleaned",
      "Foot pedals cleaned and sanitised"
    ]
  }
  const premium: Package = {
    title: "Premium",
    duration: "1 - 2 Days",
    price: "Starting from $1200",
    services: [
      "Wheels and arches cleaned",
      "High pressure rinse & foam with two bucket wash",
      "Decontamination and clay bar treatment",
      "Contactless heated blow dry to prevent any further scratches",
      "Multi stage paint correction",
      "Application of Gyeon MOHS EVO ( four year coating)",
      "Application of Gyeon View (glass coating)",
      "Tyres dressed",
      "Carpet cleaned and sanitised",
      "Rubber floor mats pressure cleaned and sanitised",
      "Leather seats cleaned & conditioned",
      "Interior glass and windshield cleaned",
      "Foot pedals cleaned and sanitised"
    ]
  }
  const presidential: Package = {
    title: "Presidential",
    duration: "2 - 3 Days",
    price: "Starting from $1700",
    services: [
      "Wheels and arches cleaned",
      "High pressure rinse & foam with two bucket wash",
      "Decontamination and clay bar treatment",
      "Contactless heated blow dry to prevent any further scratches",
      "Multi stage paint correction",
      "Application of Gyeon SYNCRO EVO ( Dual Layer coating)",
      "Application of Gyeon View (glass coating)",
      "Tyres dressed",
      "Carpet cleaned and sanitised",
      "Rubber floor mats pressure cleaned and sanitised",
      "Leather seats steam cleaned",
      "Application of Gyeon leather shield (leather coating)",
      "Interior glass and windshield cleaned",
      "Foot pedals cleaned and sanitised"
    ]
  }



</script>

<div class="flex flex-col space-y-6 p-4 md:justify-evenly md:flex-row md:space-y-0 md:space-x-8 md:h-[1000px]">
  <Card p={preSale}/>
  <Card p={standard}/>
  <Card p={premium}/>
  <Card p={presidential}/>
</div>