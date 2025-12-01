

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BRQhr7hm.js","_app/immutable/chunks/scheduler.DiXKfncd.js","_app/immutable/chunks/index.CGk6yORO.js","_app/immutable/chunks/entry.DvEgNQso.js"];
export const stylesheets = [];
export const fonts = [];
