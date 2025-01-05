

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/talks/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CSgLQ9f9.js","_app/immutable/chunks/scheduler.DiXKfncd.js","_app/immutable/chunks/index.CGk6yORO.js","_app/immutable/chunks/navbar.CJV0_Ip2.js"];
export const stylesheets = [];
export const fonts = [];
