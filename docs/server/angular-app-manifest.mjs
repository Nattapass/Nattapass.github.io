
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-collection/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2542, hash: 'ecaa36846da4c94027815f4142009bdf861436a06433feb3733b94fd6c7680bf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1358, hash: 'bf347e16da666148317ef29ef9ba5e801f52080f3158d35bb46633bcf6667066', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WKGWGCJM.css': {size: 33268, hash: '2FO2XjqqvB8', text: () => import('./assets-chunks/styles-WKGWGCJM_css.mjs').then(m => m.default)}
  },
};
