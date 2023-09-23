

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e74a265f.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.5d7b83de.js","_app/immutable/chunks/stores.16eb9a31.js","_app/immutable/chunks/singletons.1a29778b.js","_app/immutable/chunks/index.5e7feea3.js"];
export const stylesheets = [];
export const fonts = [];
