

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.45e7aebf.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/index.71439af6.js","_app/immutable/chunks/singletons.c7deb6d8.js"];
export const stylesheets = [];
export const fonts = [];
