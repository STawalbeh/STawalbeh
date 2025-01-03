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
		client: {"start":"_app/immutable/entry/start.C2Nh2gMB.js","app":"_app/immutable/entry/app.BAVzi8sQ.js","imports":["_app/immutable/entry/start.C2Nh2gMB.js","_app/immutable/chunks/entry.BgCKYb4z.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.BAVzi8sQ.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DaH0rpvx.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
