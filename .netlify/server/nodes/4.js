import * as universal from '../entries/pages/kontakt/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/kontakt/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/kontakt/+page.js";
export const imports = ["_app/immutable/nodes/4.196220a9.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.5d7b83de.js"];
export const stylesheets = [];
export const fonts = [];
