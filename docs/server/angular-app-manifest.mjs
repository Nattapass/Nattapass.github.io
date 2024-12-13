
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-collection/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2542, hash: 'f8b21822dd440561161f3e3fc3117df90d06355d97b6cc8a13c97671f8cb72e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1358, hash: 'd5f469de33124e0effe2ed2cc945b2b5979fb6838aa8a09f98efcb2a0d868021', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ES666NSD.css': {size: 41872, hash: 'polUG9fdQtw', text: () => import('./assets-chunks/styles-ES666NSD_css.mjs').then(m => m.default)}
  },
};
