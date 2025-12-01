

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/service/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.CRsDWTpR.js","_app/immutable/chunks/scheduler.DiXKfncd.js","_app/immutable/chunks/index.CGk6yORO.js"];
export const stylesheets = [];
export const fonts = [];
