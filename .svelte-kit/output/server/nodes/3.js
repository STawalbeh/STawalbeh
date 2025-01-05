

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CGs9bTZ5.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CFe7QnyN.js","_app/immutable/chunks/navbar.BZNzyy3t.js"];
export const stylesheets = [];
export const fonts = [];
