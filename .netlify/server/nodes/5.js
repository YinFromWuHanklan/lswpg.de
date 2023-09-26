import * as universal from '../entries/pages/impressum/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/impressum/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/impressum/+page.js";
export const imports = ["_app/immutable/nodes/5.085d2b31.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.60f45e3a.js"];
export const stylesheets = [];
export const fonts = [];
