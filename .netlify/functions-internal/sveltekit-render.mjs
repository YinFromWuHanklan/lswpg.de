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
		client: {"start":"_app/immutable/entry/start.d2ed7471.js","app":"_app/immutable/entry/app.38987961.js","imports":["_app/immutable/entry/start.d2ed7471.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/singletons.1a29778b.js","_app/immutable/chunks/index.5e7feea3.js","_app/immutable/entry/app.38987961.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.5d7b83de.js"],"stylesheets":[],"fonts":[]},
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
