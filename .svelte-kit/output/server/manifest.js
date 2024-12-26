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
		client: {"start":"_app/immutable/entry/start.Djop1mV9.js","app":"_app/immutable/entry/app.CDbD0kcv.js","imports":["_app/immutable/entry/start.Djop1mV9.js","_app/immutable/chunks/entry.DvpEgWdj.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.CDbD0kcv.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DaH0rpvx.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
