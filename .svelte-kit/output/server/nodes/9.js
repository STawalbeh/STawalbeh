

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/talks/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.CQvOwnKf.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CFe7QnyN.js"];
export const stylesheets = [];
export const fonts = [];
