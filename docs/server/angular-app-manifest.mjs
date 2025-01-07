
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-collection/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2542, hash: '04f0c21f5cabbb167b92f314b075be28fd4d22fd39389a0bdaab709075ead34f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1358, hash: 'ce2f3b3b626996d4fd3f707256e2a30f4aa5c250a2de4c32271336a2e7030166', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ES666NSD.css': {size: 41872, hash: 'polUG9fdQtw', text: () => import('./assets-chunks/styles-ES666NSD_css.mjs').then(m => m.default)}
  },
};
