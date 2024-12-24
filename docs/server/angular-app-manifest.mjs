
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-collection/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2542, hash: '9de709787e022dfa655ee78557be65c8a159bb3727794bf285b8e316035902e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1358, hash: '4886326c92576a75f709c9f7ec2dbfad78a4419899d825dff649249b051dab43', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ES666NSD.css': {size: 41872, hash: 'polUG9fdQtw', text: () => import('./assets-chunks/styles-ES666NSD_css.mjs').then(m => m.default)}
  },
};
