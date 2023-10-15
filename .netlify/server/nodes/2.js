import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.f07522f3.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/index.71439af6.js","_app/immutable/chunks/Background.7f22db65.js"];
export const stylesheets = ["_app/immutable/assets/2.3166b78d.css","_app/immutable/assets/index.34c55b4e.css","_app/immutable/assets/Background.74cf50bf.css"];
export const fonts = [];
