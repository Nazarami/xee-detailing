import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, d as each } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const image_svelte_svelte_type_style_lang = "";
const css = {
  code: "#image-container.svelte-1w6soiy{height:calc(100vh - 155px);max-width:100%}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  $$result.css.add(css);
  return `<div class="w-screen svelte-1w6soiy" id="image-container"><img${add_attribute("src", src, 0)} alt="" class="h-full w-full object-cover object-center">
</div>`;
});
const ParagraphBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<div class="bg-black h-48 flex items-center p-2 md:px-44 px-12 "><p class="text-center font-thin text-white font-sans text-xs md:text-lg">${escape(text)}</p></div>`;
});
const QuoteSVG = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-8 w-8 mb-8"><svg preserveAspectRatio="xMidYMid meet" data-bbox="48.8 51 102.4 98.1" xmlns="http://www.w3.org/2000/svg" viewBox="48.8 51 102.4 98.1" role="presentation" aria-hidden="true" fill="#4e80ee"><g><path d="M89.9 51H51.6c-1.5 0-2.8 1.2-2.8 2.8v38.3c0 1.5 1.2 2.8 2.8 2.8h18.1c-.2 4.3-.9 9.1-3.2 15.2-2.3 5.9-11.1 13.1-16.3 16.2-.9.5-1.4 1.4-1.4 2.4v17.6c0 .9.5 1.8 1.3 2.3.5.3 1 .5 1.5.5.4 0 .8-.1 1.1-.2 9.1-4 16.7-9.4 22.6-15.9 5.8-6.5 10.2-13.8 13.1-21.6 2.9-7.8 4.3-19.1 4.3-33.7V53.8c0-1.5-1.2-2.8-2.8-2.8zm-2.8 26.6c0 13.9-1.3 24.6-4 31.8-2.6 7.1-6.7 13.8-12 19.8-4.5 5-10.1 9.3-16.7 12.7v-11.6c4.7-3 14.3-10.5 17.3-18.1 3.2-8.3 3.6-14.7 3.6-20 0-1.5-1.2-2.8-2.8-2.8H54.4V56.6h32.7v21z"></path><path d="M148.4 51h-38.3c-1.5 0-2.8 1.2-2.8 2.8v38.3c0 1.5 1.2 2.8 2.8 2.8h18.1c-.2 4.3-.9 9.1-3.2 15.2-2.3 5.9-11.1 13.1-16.3 16.2-.9.5-1.4 1.4-1.4 2.4v17.6c0 .9.5 1.8 1.3 2.3.5.3 1 .5 1.5.5.4 0 .8-.1 1.1-.2 9.1-4 16.7-9.4 22.6-15.9 5.8-6.5 10.2-13.8 13.1-21.6 2.9-7.8 4.3-19.1 4.3-33.7V53.8c0-1.5-1.3-2.8-2.8-2.8zm-2.8 26.6c0 13.9-1.3 24.6-4 31.8-2.6 7.1-6.7 13.8-12 19.8-4.5 5-10.1 9.3-16.7 12.7v-11.6c4.7-3 14.3-10.5 17.3-18.1 3.2-8.3 3.6-14.7 3.6-20 0-1.5-1.2-2.8-2.8-2.8h-18.1V56.6h32.7v21z"></path></g></svg></div>`;
});
const QuoteBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<div class="md:flex flex-col md:items-center md:space-y-4 flex items-center">${validate_component(QuoteSVG, "QuoteSvg").$$render($$result, {}, {}, {})}
	<p class="px-4">${escape(text)}</p></div>`;
});
const Main$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const textArray = [
    `Huss at Xee Detailing is an exceptional professional with an unparalleled work rate and ethic. He offers the best value for your money with fair and transparent pricing, and his attention to detail is impeccable. I highly recommend his services, whether you're looking for a simple wash or a full detailing, and as a regular customer, I confidently rate his service as a perfect 10 out of 10.`,
    `I recently brought my car in for Xee Detailing's paint protection package and couldn't be happier with the results. The coating is of high quality and performs well even under harsh weather conditions in Melbourne. I highly recommend their service and team for their professionalism, attention to detail and top-notch customer service. They exceeded my expectations and I'll definitely be a returning customer.`,
    `I am extremely satisfied with my experience at Xee Detailing. Huss's attention to detail is truly impressive and he took the time to explain each step of the detailing process. I am impressed by his professional and friendly service and I highly recommend Xee Detailing for anyone in need of high-quality detailing services. Thank you, Huss and team, for a job well done.`
  ];
  return `<div><div class="flex flex-col text-center px-12 space-y-4 md:flex-row md:space-y-0 py-4">${each(textArray, (text) => {
    return `${validate_component(QuoteBlock, "QuoteBlock").$$render($$result, { text }, {}, {})}`;
  })}</div></div>`;
});
const Field = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { type } = $$props;
  let { placeholder } = $$props;
  let { value } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<div><label${add_attribute("for", name, 0)} class="px-2 font-thin text-md">${escape(name)}</label>
	<input type="text"${add_attribute("name", name, 0)} required${add_attribute("placeholder", placeholder, 0)}${add_attribute("class", `h-[43px] hover:border-[#4e80ee] active:border-[#4e80ee] transition-colors ease-in-out bg-black p-2 border-[1px] rounded-sm border-gray-500 outline-none text-left} w-full`, 0)}${add_attribute("value", value, 0)}></div>`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button type="submit" class="text-white w-full bg-gray-800 h-[42px] text-center flex justify-center items-center cursor-pointer active:bg-gray-700 select-none">Submit</button>`;
});
const initialValue = { value: "" };
const myStore = writable(initialValue);
const Main$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let subjectText = "";
  subjectText = myStore.value;
  return `<form class="w-full md:px-72 px-8 py-10 space-y-4" action="https://formsubmit.co/xeedetailing@gmail.com" method="POST">${validate_component(Field, "Field").$$render(
    $$result,
    {
      name: "Name",
      type: "text",
      placeholder: "Enter your name"
    },
    {},
    {}
  )}
	${validate_component(Field, "Field").$$render(
    $$result,
    {
      name: "Email",
      type: "email",
      placeholder: "Enter your email"
    },
    {},
    {}
  )}
	${validate_component(Field, "Field").$$render(
    $$result,
    {
      name: "Subject",
      type: "text",
      placeholder: "Type the subject",
      value: subjectText
    },
    {},
    {}
  )}
	${validate_component(Field, "Field").$$render(
    $$result,
    {
      name: "Message",
      type: "text",
      placeholder: "Type your message..."
    },
    {},
    {}
  )}
	${validate_component(Button, "Button").$$render($$result, {}, {}, {})}</form>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { p } = $$props;
  if ($$props.p === void 0 && $$bindings.p && p !== void 0)
    $$bindings.p(p);
  return `<div class="rounded-lg py-8 bg-[#141414] h-[618px] w-full flex-1 md:w-[250px] md:h-full md:p-8"><div class="my-4 text-center text-4xl text-blue-500">${escape(p.title)}</div>
	<div class="text-center text-sm"><p class="text-xs mb-2">${escape(p.duration)}</p>
		<p class="text-xs mb-2">${escape(p.price)}</p>
		<p class="text-xs">Prices vary depending on size and condition of vehicle</p></div>
	<div class="mt-6"><ul class="flex flex-col space-y-8 px-4">${each(p.services, (service) => {
    return `<li class="flex items-center"><img src="checkbox.svg" alt="" class="h-6">
					<p class="text-xs ml-4">${escape(service)}</p>
				</li>`;
  })}</ul></div></div>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const preSale = {
    title: "Pre-sale",
    duration: "1 Day",
    price: "",
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
  };
  const standard = {
    title: "Standard",
    duration: "1 - 2 Days",
    price: "",
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
  };
  const premium = {
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
  };
  const presidential = {
    title: "Presidential",
    duration: "2 - 3 Days",
    price: "",
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
  };
  return `<div class="flex flex-col space-y-6 p-4 md:justify-evenly md:flex-row md:space-y-0 md:space-x-8 md:h-[1120px]">${validate_component(Card, "Card").$$render($$result, { p: preSale }, {}, {})}
	${validate_component(Card, "Card").$$render($$result, { p: standard }, {}, {})}
	${validate_component(Card, "Card").$$render($$result, { p: premium }, {}, {})}
	${validate_component(Card, "Card").$$render($$result, { p: presidential }, {}, {})}</div>`;
});
const mainText = "Our mission at Xeedetailing is simple: to provide high-quality packages for our valued clients. Our team goes above and beyond to cater to each project’s specific needs. Through open communication and exceptional service, we hope you’ll find what you’re looking for with our Car Detailing Service. For more information or general inquiries, get in touch today.";
const commitmentText = "Xeedetailing is committed to getting the job done, especially when it comes to their packages. You can count on us to be professional, timely, efficient and make sure you’re satisfied every step of the way.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex-1 bg-black text-white">${validate_component(Image, "Image").$$render($$result, { src: "main-images/image-0.jpeg" }, {}, {})}
	${validate_component(ParagraphBlock, "ParagraphBlock").$$render($$result, { text: mainText }, {}, {})}
	${validate_component(Image, "Image").$$render($$result, { src: "main-images/image-1.jpeg" }, {}, {})}
	${validate_component(ParagraphBlock, "ParagraphBlock").$$render($$result, { text: commitmentText }, {}, {})}
	${validate_component(Main, "Packages").$$render($$result, {}, {}, {})}
	${validate_component(Main$2, "Quotes").$$render($$result, {}, {}, {})}
	${validate_component(Main$1, "ContactForm").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
