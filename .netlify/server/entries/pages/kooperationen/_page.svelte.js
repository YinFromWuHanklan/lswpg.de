import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../chunks/ssr.js";
import { I as Intro } from "../../../chunks/Intro.js";
const severn = "/_app/immutable/assets/Severn-Logo.cac0a75d.jpeg";
const BgKooperationen = "/_app/immutable/assets/intro-bg-kooperationen.01f97a47.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-pmt60k.svelte-pmt60k{width:100vw;z-index:-1}section.svelte-pmt60k.svelte-pmt60k{background-color:#FFF;padding:1rem}section.svelte-pmt60k .content.svelte-pmt60k{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;padding:2rem 0}section.svelte-pmt60k .content .partner_logo.svelte-pmt60k{margin:1rem 1.5rem;width:auto;z-index:1}@media(max-width: 672px){section.svelte-pmt60k .content .partner_logo.svelte-pmt60k{width:70%;height:auto}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1uy7q86_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="Kooperationen"><!-- HEAD_svelte-1uy7q86_END -->`, ""} ${validate_component(Intro, "Intro").$$render($$result, {}, {}, {
    intro_bg: () => {
      return `<img slot="intro_bg"${add_attribute("src", BgKooperationen, 0)} alt="Kooperationen Linner Seidemann Wirtschaftsprüfung" class="svelte-pmt60k">`;
    }
  })} <section class="svelte-pmt60k" data-svelte-h="svelte-jr6xew"><h1>Unser Kooperations­partner</h1> <div class="content svelte-pmt60k"><img${add_attribute("src", severn, 0)} alt="Severn" height="200" class="partner_logo svelte-pmt60k"></div> </section>`;
});
export {
  Page as default
};
