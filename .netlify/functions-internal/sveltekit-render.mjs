import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["checkbox.svg","logo.svg","main-images/image-0.jpeg","main-images/image-1.jpeg","service-images/image-0.jpeg","service-images/image-1.jpeg","service-images/image-2.jpeg","service-images/image-3.jpeg","service-images/vertical-image.jpeg"]),
	mimeTypes: {".svg":"image/svg+xml",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.c7aef877.js","app":"_app/immutable/entry/app.d1b4823a.js","imports":["_app/immutable/entry/start.c7aef877.js","_app/immutable/chunks/index.8f7ae15a.js","_app/immutable/chunks/singletons.ab739f60.js","_app/immutable/chunks/index.f31289af.js","_app/immutable/entry/app.d1b4823a.js","_app/immutable/chunks/index.8f7ae15a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
