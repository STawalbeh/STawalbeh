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
		client: {"start":"_app/immutable/entry/start.BliB4OEa.js","app":"_app/immutable/entry/app.TlW16Y9s.js","imports":["_app/immutable/entry/start.BliB4OEa.js","_app/immutable/chunks/entry.DvEgNQso.js","_app/immutable/chunks/scheduler.DiXKfncd.js","_app/immutable/entry/app.TlW16Y9s.js","_app/immutable/chunks/scheduler.DiXKfncd.js","_app/immutable/chunks/index.CGk6yORO.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
