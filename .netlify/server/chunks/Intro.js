import { c as create_ssr_component } from "./ssr.js";
const Intro_svelte_svelte_type_style_lang = "";
const css = {
  code: ".intro.svelte-lu51s7{height:40vh;display:flex;align-items:center}@media(max-width: 672px){.intro.svelte-lu51s7{height:25vh}}",
  map: null
};
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="intro svelte-lu51s7">${slots.intro_bg ? slots.intro_bg({}) : ``} </div>`;
});
export {
  Intro as I
};
