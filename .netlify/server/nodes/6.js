import * as universal from '../entries/pages/kontakt/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/kontakt/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/kontakt/+page.js";
export const imports = ["_app/immutable/nodes/6.3195cf74.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.60f45e3a.js"];
export const stylesheets = ["_app/immutable/assets/6.cebc6a41.css"];
export const fonts = [];
