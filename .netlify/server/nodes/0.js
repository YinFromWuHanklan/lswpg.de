

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.f82c4223.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.60f45e3a.js"];
export const stylesheets = ["_app/immutable/assets/0.8e189d76.css"];
export const fonts = [];
