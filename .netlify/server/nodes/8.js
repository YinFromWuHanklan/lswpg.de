import * as universal from '../entries/pages/services/_page.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/services/+page.js";
export const imports = ["_app/immutable/nodes/8.e23e2a38.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/index.71439af6.js","_app/immutable/chunks/Intro.20113476.js","_app/immutable/chunks/Background.7f22db65.js"];
export const stylesheets = ["_app/immutable/assets/8.42bb83ee.css","_app/immutable/assets/index.34c55b4e.css","_app/immutable/assets/Intro.06f41ab6.css","_app/immutable/assets/Background.74cf50bf.css"];
export const fonts = [];
