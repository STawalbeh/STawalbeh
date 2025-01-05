

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/teaching/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.CQvOwnKf.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CFe7QnyN.js"];
export const stylesheets = [];
export const fonts = [];
