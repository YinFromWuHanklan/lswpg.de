import * as universal from '../entries/pages/about-us/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about-us/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about-us/+page.js";
export const imports = ["_app/immutable/nodes/3.cdf949bf.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.5d7b83de.js"];
export const stylesheets = ["_app/immutable/assets/3.a87a5bee.css"];
export const fonts = [];
