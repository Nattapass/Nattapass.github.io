
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-collection/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2542, hash: 'fa803d759cb4a0782024bcb2a0fd6dd785a82a29408bdb00ef2c91cf7abbf574', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1358, hash: '6796497d4a0bbd6aed022f7fec3695a30cfd11d2273ebab16d0ada206b2804ff', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ES666NSD.css': {size: 41872, hash: 'polUG9fdQtw', text: () => import('./assets-chunks/styles-ES666NSD_css.mjs').then(m => m.default)}
  },
};
