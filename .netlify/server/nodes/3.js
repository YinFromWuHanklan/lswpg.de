import * as universal from '../entries/pages/bildrechte/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/bildrechte/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/bildrechte/+page.js";
export const imports = ["_app/immutable/nodes/3.39bcd26c.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/index.71439af6.js"];
export const stylesheets = ["_app/immutable/assets/index.34c55b4e.css"];
export const fonts = [];
