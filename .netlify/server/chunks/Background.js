import { c as create_ssr_component } from "./ssr.js";
const Background_svelte_svelte_type_style_lang = "";
const css = {
  code: 'section.svelte-1u2s66{background-image:url("$lib/images/blue-bg.png");background-repeat:no-repeat;background-size:cover;color:#FFF}',
  map: null
};
const Background = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-1u2s66">${slots.section_title ? slots.section_title({}) : ``} ${slots.section_content ? slots.section_content({}) : ``} </section>`;
});
export {
  Background as B
};
