

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/teaching/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DB0_hVq_.js","_app/immutable/chunks/scheduler.DiXKfncd.js","_app/immutable/chunks/index.CGk6yORO.js","_app/immutable/chunks/navbar.CJV0_Ip2.js"];
export const stylesheets = [];
export const fonts = [];
