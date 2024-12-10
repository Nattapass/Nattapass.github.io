
export default {
  basePath: '/my-collection/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
