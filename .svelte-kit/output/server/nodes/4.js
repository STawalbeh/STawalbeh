

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/talks/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.C97qt-JV.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CFe7QnyN.js","_app/immutable/chunks/navbar.VnRYv2VK.js"];
export const stylesheets = [];
export const fonts = [];
