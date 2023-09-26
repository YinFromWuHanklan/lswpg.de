import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-k7308q.svelte-k7308q{padding:0.8rem 2rem}nav.svelte-k7308q .nav_lg.svelte-k7308q{display:flex;flex-direction:row;justify-content:flex-end}@media(max-width: 1056px){nav.svelte-k7308q .nav_lg.svelte-k7308q{display:none}}nav.svelte-k7308q .nav_lg li.svelte-k7308q{list-style:none;padding:0 1rem}nav.svelte-k7308q .nav_lg li a.svelte-k7308q{text-decoration:none}nav.svelte-k7308q .nav_mobile.svelte-k7308q{display:none}@media(max-width: 1056px){nav.svelte-k7308q .nav_mobile.svelte-k7308q{display:inline-block;cursor:pointer}nav.svelte-k7308q .nav_mobile .toggler .bar1.svelte-k7308q,nav.svelte-k7308q .nav_mobile .toggler .bar2.svelte-k7308q,nav.svelte-k7308q .nav_mobile .toggler .bar3.svelte-k7308q{width:35px;height:5px;background-color:#FFF;margin:6px 0;transition:0.4s}nav.svelte-k7308q .nav_mobile .change .bar1.svelte-k7308q{transform:translate(0, 11px) rotate(-45deg)}nav.svelte-k7308q .nav_mobile .change .bar2.svelte-k7308q{opacity:0}nav.svelte-k7308q .nav_mobile .change .bar3.svelte-k7308q{transform:translate(0, -11px) rotate(45deg)}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header><nav class="svelte-k7308q"><ul class="nav_lg svelte-k7308q" data-svelte-h="svelte-8nphu0"><li class="svelte-k7308q"><a class="nav-link svelte-k7308q" href="/">Home</a></li> <li class="svelte-k7308q"><a class="nav-link svelte-k7308q" href="/about-us">About us</a></li> <li class="svelte-k7308q"><a class="nav-link svelte-k7308q" href="/services">Services</a></li> <li class="svelte-k7308q"><a class="nav-link svelte-k7308q" href="/kooperationen">Kooperationen</a></li> <li class="svelte-k7308q"><a class="nav-link svelte-k7308q" href="/kontakt">Kontakt</a></li></ul> <div class="nav_mobile svelte-k7308q"><button class="toggler" data-svelte-h="svelte-111wfhr"><div class="bar1 svelte-k7308q"></div> <div class="bar2 svelte-k7308q"></div> <div class="bar3 svelte-k7308q"></div></button> <ul data-svelte-h="svelte-17o728e"><li class="svelte-k7308q"><a class="nav-link svelte-k7308q" href="/">Home</a></li> <li class="svelte-k7308q"><a class="nav-link svelte-k7308q" href="/about-us">About us</a></li> <li class="svelte-k7308q"><a class="nav-link svelte-k7308q" href="/services">Services</a></li> <li class="svelte-k7308q"><a class="nav-link svelte-k7308q" href="/kooperationen">Kooperationen</a></li> <li class="svelte-k7308q"><a class="nav-link svelte-k7308q" href="/kontakt">Kontakt</a></li></ul></div></nav> </header>`;
});
const global = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-12zere5.svelte-12zere5{display:flex;flex-direction:column;min-height:100vh}main.svelte-12zere5.svelte-12zere5{flex:1;display:flex;flex-direction:column;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-12zere5.svelte-12zere5{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}footer.svelte-12zere5 a.svelte-12zere5{font-weight:bold}@media(min-width: 480px){footer.svelte-12zere5.svelte-12zere5{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-12zere5">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-12zere5">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-12zere5" data-svelte-h="svelte-1vsbkkt"><p>© 2023 Linner Seidemann Wirtschaftsprüfung | <a href="/impressum" class="svelte-12zere5">Impressum</a> | <a href="/datenschutz" class="svelte-12zere5">Datenschutz</a></p></footer> </div>`;
});
export {
  Layout as default
};
