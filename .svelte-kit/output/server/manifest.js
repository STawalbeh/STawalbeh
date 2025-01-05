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
		client: {"start":"_app/immutable/entry/start.DjE2rQxW.js","app":"_app/immutable/entry/app.XddVS7gV.js","imports":["_app/immutable/entry/start.DjE2rQxW.js","_app/immutable/chunks/entry.BdyiGke-.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.XddVS7gV.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CFe7QnyN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
