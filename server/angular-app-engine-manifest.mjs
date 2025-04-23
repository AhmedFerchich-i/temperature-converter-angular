
export default {
  basePath: 'https://AhmedFerchich-i.github.io/temperature-converter-angular',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
