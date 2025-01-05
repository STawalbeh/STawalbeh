

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/research/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.C8Q5LO9r.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CFe7QnyN.js"];
export const stylesheets = [];
export const fonts = [];
