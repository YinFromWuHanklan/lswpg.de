import * as universal from '../entries/pages/impressum/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/impressum/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/impressum/+page.js";
export const imports = ["_app/immutable/nodes/5.8f5fc240.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/index.71439af6.js"];
export const stylesheets = ["_app/immutable/assets/index.34c55b4e.css"];
export const fonts = [];
