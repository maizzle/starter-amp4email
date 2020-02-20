module.exports = {
  build: {
    destination: {
      path: 'build_production',
    },
  },

  cleanup: {
    removeUnusedCSS: {
      enabled: true,
      whitelist: ['.amp*'],
    },
  },

  prettify: {
    enabled: true,
  },
}
