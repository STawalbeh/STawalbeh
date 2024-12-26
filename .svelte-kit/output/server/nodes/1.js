

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ujCyT125.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DaH0rpvx.js","_app/immutable/chunks/entry.DvpEgWdj.js"];
export const stylesheets = [];
export const fonts = [];
