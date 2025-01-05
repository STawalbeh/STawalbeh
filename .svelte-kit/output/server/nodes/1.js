

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BCjwJrel.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CFe7QnyN.js","_app/immutable/chunks/entry.B7yLesum.js"];
export const stylesheets = [];
export const fonts = [];
