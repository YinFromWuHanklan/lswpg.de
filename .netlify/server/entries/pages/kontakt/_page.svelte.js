import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.intro.svelte-6ll351{background-image:url("$lib/images/telephone-586266_1920.jpg");background-repeat:no-repeat;background-size:cover;height:30vh;display:flex;align-items:center;justify-content:center}.content.svelte-6ll351{display:flex;flex-direction:row;justify-content:center;margin:2rem;padding:2rem;color:#FFF}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ieg176_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="Kontakt"><!-- HEAD_svelte-1ieg176_END -->`, ""} <div class="intro svelte-6ll351" data-svelte-h="svelte-1roh62f"><h1>Kontakt</h1></div> <div class="content svelte-6ll351" data-svelte-h="svelte-12gnkgs"><div>Bild</div> <div>Kontaktdaten etc.</div> <div>Bild</div> </div>`;
});
export {
  Page as default
};
