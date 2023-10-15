import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../chunks/ssr.js";
import { I as Intro } from "../../../chunks/Intro.js";
import { B as Background } from "../../../chunks/Background.js";
const Accordion_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".accordion.svelte-1rt5v15.svelte-1rt5v15{margin:2rem auto;padding:1rem;color:#FFF;border:1px solid #FFF;border-radius:2px;width:80%}.accordion.svelte-1rt5v15 .header.svelte-1rt5v15{display:flex;width:100%;align-items:center}.accordion.svelte-1rt5v15 .header .text.svelte-1rt5v15{flex:1;margin-right:5px;margin-top:1rem}.accordion.svelte-1rt5v15 .header button.svelte-1rt5v15{background-color:transparent;border:none;color:#FFF;height:fit-content;padding:0.8rem;font-size:1.5rem}.accordion.svelte-1rt5v15 .details.svelte-1rt5v15{padding:1rem}@media(max-width: 672px){.accordion.svelte-1rt5v15.svelte-1rt5v15{width:100%}}",
  map: null
};
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$1);
  return `<div class="accordion svelte-1rt5v15"><div class="header svelte-1rt5v15"><div class="text svelte-1rt5v15">${slots.head ? slots.head({}) : ``}</div> <button class="svelte-1rt5v15" data-svelte-h="svelte-4zok3">▼</button></div> ${open ? `<div class="details svelte-1rt5v15">${slots.details ? slots.details({}) : ` `}</div>` : ``} </div>`;
});
const BgServices = "/_app/immutable/assets/intro-bg-services.e933d92a.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1yla37v.svelte-1yla37v{width:100vw;z-index:-1}.content.svelte-1yla37v.svelte-1yla37v{padding:1rem;width:60%;display:flex;flex-direction:column;margin:0 auto}.content.svelte-1yla37v .acc_head.svelte-1yla37v{display:flex;flex-direction:column}.content.svelte-1yla37v .acc_head svg.svelte-1yla37v{fill:#FFF}.content.svelte-1yla37v .detail.svelte-1yla37v{width:fit-content;margin:0 auto}.content.svelte-1yla37v .detail li ul li.svelte-1yla37v{list-style-type:disclosure-closed}@media(max-width: 1055px){.content.svelte-1yla37v.svelte-1yla37v{width:80%}}@media(max-width: 672px){.content.svelte-1yla37v.svelte-1yla37v{width:100%}.content.svelte-1yla37v h2.svelte-1yla37v{font-size:1.2rem}.content.svelte-1yla37v ul.svelte-1yla37v{padding-left:1rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-13flzj7_START -->${$$result.title = `<title>Services</title>`, ""}<meta name="description" content="Services"><!-- HEAD_svelte-13flzj7_END -->`, ""} ${validate_component(Intro, "Intro").$$render($$result, {}, {}, {
    intro_bg: () => {
      return `<img slot="intro_bg"${add_attribute("src", BgServices, 0)} alt="Services Linner Seidemann Wirtschaftsprüfung" class="svelte-1yla37v">`;
    }
  })} ${validate_component(Background, "Background").$$render($$result, {}, {}, {
    section_content: () => {
      return `<div slot="section_content" class="content svelte-1yla37v">${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
        details: () => {
          return `<ul slot="details" class="detail svelte-1yla37v" data-svelte-h="svelte-lyy7ke"><li class="svelte-1yla37v">Jahres- und Konzernabschlussprüfung von
					<ul class="svelte-1yla37v"><li class="svelte-1yla37v">Wertpapierinstituten</li> <li class="svelte-1yla37v">Finanzdienstleistungsinstituten</li> <li class="svelte-1yla37v">Kreditinstituten</li> <li class="svelte-1yla37v">Kapitalverwaltungsgesellschaften</li> <li class="svelte-1yla37v">Leasinggesellschaften</li></ul></li> <li class="svelte-1yla37v">WpHG-Prüfung
					<ul class="svelte-1yla37v"><li class="svelte-1yla37v">Prüfung nach § 89 Abs. 1 Satz 1 WpHG</li></ul></li> <li class="svelte-1yla37v">Prüferische Durchsicht von Abschlüssen</li></ul>`;
        },
        head: () => {
          return `<div slot="head" class="acc_head svelte-1yla37v" data-svelte-h="svelte-16jwhvi"><svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 640 512" class="svelte-1yla37v"><path d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"></path></svg> <h2 class="svelte-1yla37v">AUDIT – FINANCIAL SERVICES</h2></div>`;
        }
      })} ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
        details: () => {
          return `<ul slot="details" class="detail svelte-1yla37v" data-svelte-h="svelte-rgrppp"><li class="svelte-1yla37v">Jahres- und Konzernabschlussprüfung nach deutschen, handelsrechtlichen Vorschriften (HGB)</li> <li class="svelte-1yla37v">Jahres- und Konzernabschlussprüfung nach internationalen Vorschriften (IFRS)</li> <li class="svelte-1yla37v">Prüferische Durchsicht von Abschlüssen</li> <li class="svelte-1yla37v">Sonderprüfungen (u.a. MaBV, FinVermV, Sonderprüfungen nach dem AktG, GmbHG, UmwG)</li></ul>`;
        },
        head: () => {
          return `<div slot="head" class="acc_head svelte-1yla37v" data-svelte-h="svelte-1vomzif"><svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 576 512" class="svelte-1yla37v"><path d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"></path></svg> <h2 class="svelte-1yla37v">AUDIT – CORPORATE CLIENTS</h2></div>`;
        }
      })} ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
        details: () => {
          return `<ul slot="details" class="detail svelte-1yla37v" data-svelte-h="svelte-1aavbww"><li class="svelte-1yla37v">Unternehmensbewertung nach IDW S 1</li> <li class="svelte-1yla37v">Bewertung von kleinen und mittleren Unternehmen</li> <li class="svelte-1yla37v">Bewertung von einzelnen Vermögenswerten</li> <li class="svelte-1yla37v">Indikative Wertermittlungen</li> <li class="svelte-1yla37v">Financial Due Diligence</li> <li class="svelte-1yla37v">Ankaufsbewertung gemäß KAGB</li></ul>`;
        },
        head: () => {
          return `<div slot="head" class="acc_head svelte-1yla37v" data-svelte-h="svelte-v1tbef"><svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512" class="svelte-1yla37v"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg> <h2 class="svelte-1yla37v">VALUATION &amp; TRANSACTION SERVICES</h2></div>`;
        }
      })} ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
        details: () => {
          return `<ul slot="details" class="detail svelte-1yla37v" data-svelte-h="svelte-1jr48hl"><li class="svelte-1yla37v">Innenrevision</li> <li class="svelte-1yla37v">Funktion des Geldwäsche-Beauftragten</li> <li class="svelte-1yla37v">Funktion des Compliance-Beauftragten</li> <li class="svelte-1yla37v">Umsetzung neuer Regularien im Banken- und <br>Finanzdienstleistungsbereich</li> <li class="svelte-1yla37v">Risikomanagementfunktion</li></ul>`;
        },
        head: () => {
          return `<div slot="head" class="acc_head svelte-1yla37v" data-svelte-h="svelte-16dmdqc"><svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 640 512" class="svelte-1yla37v"><path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160h44.8c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V464c0 26.5-21.5 48-48 48H496c-26.5 0-48-21.5-48-48V391.2l47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240v32h96V240c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V336H272v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z"></path></svg> <h2 class="svelte-1yla37v">INSOURCING &amp; OUTSOURCING</h2></div>`;
        }
      })}</div>`;
    },
    section_title: () => {
      return `<h1 slot="section_title" data-svelte-h="svelte-zjg3ap">Services</h1>`;
    }
  })}`;
});
export {
  Page as default
};
