import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../chunks/ssr.js";
import { I as Intro } from "../../../chunks/Intro.js";
const severn = "/_app/immutable/assets/Severn-Logo.cac0a75d.jpeg";
const BgKooperationen = "/_app/immutable/assets/intro-bg-kooperationen.01f97a47.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1k4fh0b.svelte-1k4fh0b{width:100vw;z-index:-1}section.svelte-1k4fh0b.svelte-1k4fh0b{background-color:#FFF;padding:1rem}section.svelte-1k4fh0b .content.svelte-1k4fh0b{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;padding:2rem 0}section.svelte-1k4fh0b .content .partner_logo.svelte-1k4fh0b{margin:1rem 1.5rem;width:auto;z-index:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1uy7q86_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="Kooperationen"><!-- HEAD_svelte-1uy7q86_END -->`, ""} ${validate_component(Intro, "Intro").$$render($$result, {}, {}, {
    intro_bg: () => {
      return `<img slot="intro_bg"${add_attribute("src", BgKooperationen, 0)} alt="Kooperationen Linner Seidemann Wirtschaftsprüfung" class="svelte-1k4fh0b">`;
    }
  })} <section class="svelte-1k4fh0b" data-svelte-h="svelte-11kv6o5"><h1>Unsere Kooperations­partner</h1> <div class="content svelte-1k4fh0b"><img${add_attribute("src", severn, 0)} alt="Severn" height="200" class="partner_logo svelte-1k4fh0b"></div> </section>`;
});
export {
  Page as default
};
