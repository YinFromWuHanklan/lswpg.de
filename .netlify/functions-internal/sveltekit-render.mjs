import { init } from '../serverless.js';

export const handler = init((() => {
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
		client: {"start":"_app/immutable/entry/start.d7264d63.js","app":"_app/immutable/entry/app.6e6c28c4.js","imports":["_app/immutable/entry/start.d7264d63.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/singletons.0f88db8c.js","_app/immutable/entry/app.6e6c28c4.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/index.71439af6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
