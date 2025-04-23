
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://AhmedFerchich-i.github.io/temperature-converter-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/temperature-converter-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2287, hash: 'b27eb38230d9b3a4ca96764dc5352b60f295c656bb174d529f9696faa25e2525', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2434, hash: '2b5135d00a90247c9bc5a9f6cd5bde8c499e193d05e444f092e12e6fac6cc777', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 54713, hash: 'c2d8b8f4716bc05d308caf7783e5567083d3eee6d65fb1305a687e486d93025b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DC27IWQJ.css': {size: 13301, hash: 'MTJVWWXQkPI', text: () => import('./assets-chunks/styles-DC27IWQJ_css.mjs').then(m => m.default)}
  },
};
