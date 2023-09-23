import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1hytyay{color:blue}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ds1qyu_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1ds1qyu_END -->`, ""} <h1 class="svelte-1hytyay" data-svelte-h="svelte-1g0uanb">About us</h1>`;
});
export {
  Page as default
};
