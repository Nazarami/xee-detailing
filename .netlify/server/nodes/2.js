import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.cca7c70d.js","_app/immutable/chunks/index.8f7ae15a.js","_app/immutable/chunks/index.f31289af.js"];
export const stylesheets = ["_app/immutable/assets/2.f559cf0b.css"];
export const fonts = [];
