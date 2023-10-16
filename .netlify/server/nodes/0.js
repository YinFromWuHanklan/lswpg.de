

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.f7ca37d8.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/index.71439af6.js"];
export const stylesheets = ["_app/immutable/assets/0.d2bf67d1.css"];
export const fonts = [];
