

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.66bccc31.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.60f45e3a.js","_app/immutable/chunks/singletons.f34ef7c9.js"];
export const stylesheets = [];
export const fonts = [];
