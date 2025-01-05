export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","profile.jpg","readME","styles.css"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.CJSebPGO.js","app":"_app/immutable/entry/app.CJe7OazX.js","imports":["_app/immutable/entry/start.CJSebPGO.js","_app/immutable/chunks/entry.B7yLesum.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.CJe7OazX.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CFe7QnyN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
