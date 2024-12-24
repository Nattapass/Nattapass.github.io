
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-collection/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2542, hash: '9e1e42aaea78f3cb9a5ed35352f056a1aeca0b484437d3da3a88d60a931d321c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1358, hash: 'c0c98d146554c1535072ffb2871a66db81177f10049cd3a2cfb9aed3c9d0f8c4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WKGWGCJM.css': {size: 33268, hash: '2FO2XjqqvB8', text: () => import('./assets-chunks/styles-WKGWGCJM_css.mjs').then(m => m.default)}
  },
};
