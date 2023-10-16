import * as universal from '../entries/pages/kontakt/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/kontakt/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/kontakt/+page.js";
export const imports = ["_app/immutable/nodes/6.841263d0.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.48484398.js","_app/immutable/chunks/index.31e5d8ca.js","_app/immutable/chunks/Intro.c3b57cdc.js","_app/immutable/chunks/Background.4549dc1a.js"];
export const stylesheets = ["_app/immutable/assets/6.abb7a856.css","_app/immutable/assets/index.34c55b4e.css","_app/immutable/assets/Intro.06f41ab6.css","_app/immutable/assets/Background.74cf50bf.css"];
export const fonts = [];
