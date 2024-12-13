
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-collection/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2542, hash: '8715bae0ee0ff71aa114470907b67cc0b4c4a0645ae7a8c46876f697e945fed1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1358, hash: 'f2d12008204b97ca98438835401f2c49aba6dfa7ce42134400b97df314283d8f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ES666NSD.css': {size: 41872, hash: 'polUG9fdQtw', text: () => import('./assets-chunks/styles-ES666NSD_css.mjs').then(m => m.default)}
  },
};
