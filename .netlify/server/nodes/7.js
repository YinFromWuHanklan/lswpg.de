import * as universal from '../entries/pages/kooperationen/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/kooperationen/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/kooperationen/+page.js";
export const imports = ["_app/immutable/nodes/7.a5347b15.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.48484398.js","_app/immutable/chunks/index.31e5d8ca.js","_app/immutable/chunks/Intro.c3b57cdc.js"];
export const stylesheets = ["_app/immutable/assets/7.e82b6e1c.css","_app/immutable/assets/index.34c55b4e.css","_app/immutable/assets/Intro.06f41ab6.css"];
export const fonts = [];
