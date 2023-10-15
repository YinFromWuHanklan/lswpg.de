export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.c1f38bb3.js","app":"_app/immutable/entry/app.835ff7a4.js","imports":["_app/immutable/entry/start.c1f38bb3.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/singletons.c7deb6d8.js","_app/immutable/entry/app.835ff7a4.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/index.71439af6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
