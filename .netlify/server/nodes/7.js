import * as universal from '../entries/pages/kooperationen/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/kooperationen/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/kooperationen/+page.js";
export const imports = ["_app/immutable/nodes/7.8b8d27b5.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.60f45e3a.js"];
export const stylesheets = [];
export const fonts = [];
