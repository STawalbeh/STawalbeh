

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/teaching/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DX4ed7hP.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CFe7QnyN.js","_app/immutable/chunks/navbar.VnRYv2VK.js"];
export const stylesheets = [];
export const fonts = [];
