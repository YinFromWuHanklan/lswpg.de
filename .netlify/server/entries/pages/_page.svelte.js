import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
const welcome_fallback = "/_app/immutable/assets/Logo_Linner_Seidemann_2023_white.6d9ba326.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-19xx0bt.svelte-19xx0bt{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}h1.svelte-19xx0bt.svelte-19xx0bt{width:100%}.welcome.svelte-19xx0bt.svelte-19xx0bt{display:block;position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}.welcome.svelte-19xx0bt img.svelte-19xx0bt{position:absolute;width:100%;height:100%;top:0;display:block}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-t32ptj_END -->`, ""} <section class="svelte-19xx0bt" data-svelte-h="svelte-7jedb"><h1 class="svelte-19xx0bt"><span class="welcome svelte-19xx0bt"><picture><img${add_attribute("src", welcome_fallback, 0)} alt="Welcome" class="svelte-19xx0bt"></picture></span></h1> <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p> </section>`;
});
export {
  Page as default
};
