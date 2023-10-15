import * as universal from '../entries/pages/kooperationen/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/kooperationen/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/kooperationen/+page.js";
export const imports = ["_app/immutable/nodes/7.411e86fe.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/index.71439af6.js","_app/immutable/chunks/Intro.20113476.js"];
export const stylesheets = ["_app/immutable/assets/7.febcdd0f.css","_app/immutable/assets/index.34c55b4e.css","_app/immutable/assets/Intro.06f41ab6.css"];
export const fonts = [];
