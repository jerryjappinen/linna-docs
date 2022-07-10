const svgoPluginsConfig = {
  removeViewBox: false,
  removeTitle: true,

  // cleanupIds: {
  //   remove: false,
  //   minify: false,
  //   prefix: 'svg-'
  // },

  // https://github.com/svg/svgo/blob/master/plugins/convertTransform.js
  convertTransform: {
    degPrecision: 0,
    floatPrecision: 0,
    transformPrecision: 0
  },

  convertColors: {
    names2hex: true,
    rgb2hex: true,
    shorthex: true,
    shortname: true,

    // Convert this color code in fills/strokes/etc. to currentColor (used to generate mono-capable assets)
    // NOTE: must be exact, case-sensitive match before any other conversions
    // Assets must be authored with this in mind
    // https://github.com/svg/svgo/blob/master/plugins/_collections.js#L2527
    // https://github.com/svg/svgo/blob/master/plugins/convertColors.js#L61
    currentColor: '#FF00FF'
  }
}

// The desired configuration format is a bit funky
// We convert into the final formatting here
const svgoPlugins = [];
for (const pluginName in svgoPluginsConfig) {
  svgoPlugins.push({
    name: pluginName,
    params: svgoPluginsConfig[pluginName]
  })
}

// https://github.com/svg/svgo
export default {
  // multipass: true,
  plugins: svgoPlugins
}
