import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index2.js";
const app = "";
const Popup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `<div${add_attribute("class", `fixed inset-0 z-10 bg-black ${open ? "" : "hidden"}  flex justify-center items-center`, 0)}><div class="text-4xl space-y-20 text-white"><h1>Home</h1>
		</div></div>`;
});
const Main$7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  return `<div><div class="md:hidden"><button class="w-10 h-10 relative focus:outline-none z-30"><span class="sr-only">Open main menu</span>
        <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"><span aria-hidden="true"${add_attribute("class", `block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${"-translate-y-1.5"}`, 0)}></span>
          <span aria-hidden="true"${add_attribute("class", `block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${"block"}`, 0)}></span>
          <span aria-hidden="true"${add_attribute("class", `block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${"translate-y-1.5"}`, 0)}></span></div></button>
      ${validate_component(Popup, "PopUpMenu").$$render($$result, { open }, {}, {})}</div></div>`;
});
const Main$6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Main$5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main$7, "MobileView").$$render($$result, {}, {}, {})}
${validate_component(Main$6, "DesktopView").$$render($$result, {}, {}, {})}`;
});
const Instagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path></svg>`;
});
const Facebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="24px" height="24px" fill="white"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path></svg>`;
});
const Tiktok = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 30 30" width="24px" height="24px"><path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"></path></svg>`;
});
const Main$4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="https://www.instagram.com/xeedetailing/" target="_blank" rel="noreferrer">${validate_component(Instagram, "Instagram").$$render($$result, {}, {}, {})}</a>
<a href="https://m.facebook.com/profile.php?id=100087631721670&eav=Afb3pRAyo2tUHx5G8_706g8dbGT51LkRY4svfCMnjUdHjcWtlX5a7Y49rqsPN4T5E4M&paipv=0&_rdr/" target="_blank" rel="noreferrer">${validate_component(Facebook, "Facebook").$$render($$result, {}, {}, {})}</a>
<a href="https://www.tiktok.com/@xeedetailing?_t=8YydBDV9oCA&_r=1" target="_blank" rel="noreferrer">${validate_component(Tiktok, "Tiktok").$$render($$result, {}, {}, {})}</a>`;
});
const Main$3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-[40px]"><nav class="bg-[#19191e] flex h-[40px] px-[25px] justify-between items-center z-0 text-white"><div class="flex space-x-2 items-center">${validate_component(Main$4, "SocialMedia").$$render($$result, {}, {}, {})}</div>
		${validate_component(Main$5, "HamburgerMenu").$$render($$result, {}, {}, {})}</nav></div>`;
});
const Main$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-[#0c0c0d] h-[140px] p-[20px] flex flex-col justify-center text-white md:flex-row md:justify-between md:px-[75px] md:h-[115px] md:items-center"><div class="flex items-center"><img src="logo.svg" alt="" class="h-10">
		<h1 class="text-xl font-bold mb-[25px] md:mb-0 mt-6 ml-1 md:mt-0">Xee Detailing</h1></div>
	<button class="h-[60px] w-full text-center py-[10px] border-solid border-white border-2 rounded-md box-border md:h-[45px] md:w-[125px] cursor-pointer hover:border-blue-500 active:bg-gray-800 transition-all duration-150 ease-in-out hover:scale-105 text-small">Get In Touch
	</button></div>`;
});
const Main$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class=""><div class="flex flex-col md:flex-col-reverse">${validate_component(Main$3, "UpperNavbar").$$render($$result, {}, {}, {})}
		${validate_component(Main$2, "LowerNavbar").$$render($$result, {}, {}, {})}</div></nav>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="h-[240px] bg-[#0c0c0d] justify-center items-center flex font-bold" id="element-to-scroll-to"><div class="flex space-y-4 flex-col text-white text-center items-center"><h1 class="text-2xl font-bold">Xee Detailing</h1>
		<h3 class="text-sm"><a href="mailto:xeedetailing.com">xeedetailing@gmail.com</a></h3>
		<h4><a href="tel:+61401760066" class="text-sm">0401 760 066 </a></h4>
		<div class="flex space-x-2 items-center"><a href="https://www.instagram.com/xeedetailing/" target="_blank" rel="noreferrer">${validate_component(Instagram, "Instagram").$$render($$result, {}, {}, {})}</a>
			<a href="https://m.facebook.com/profile.php?id=100087631721670&eav=Afb3pRAyo2tUHx5G8_706g8dbGT51LkRY4svfCMnjUdHjcWtlX5a7Y49rqsPN4T5E4M&paipv=0&_rdr/" target="_blank" rel="noreferrer">${validate_component(Facebook, "Facebook").$$render($$result, {}, {}, {})}</a>
			<a href="https://www.tiktok.com/@xeedetailing?_t=8YydBDV9oCA&_r=1" target="_blank" rel="noreferrer">${validate_component(Tiktok, "Tiktok").$$render($$result, {}, {}, {})}</a></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<head><title>Xee Detailing</title>
	<link rel="icon" href="logo.svg"></head>

${validate_component(Main$1, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Main, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
