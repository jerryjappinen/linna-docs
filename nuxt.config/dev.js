import { resolve } from 'path'

const devConfig = {
  alias: {},

  // These are only to make early development easier
  // https://v3.nuxtjs.org/getting-started/introduction
  ssr: false,
  typescript: {
    shim: false
  }
}

// Link to local source files when running docs
const packages = {
  'linna-sass': 'ALIAS_LINNA_SASS',
  'linna-util': 'ALIAS_LINNA_UTIL',
  'linna-vue': 'ALIAS_LINNA_VUE'
}

for (const packageName in packages) {
  if (process.env[packages[packageName]]) {
    devConfig.alias[packageName] = resolve(__dirname, '../', process.env[packages[packageName]])
  }
}

if (devConfig.alias['linna-util']) {
  devConfig.alias['linna-util'] = resolve(devConfig.alias['linna-util'], 'src')

  // Local utilities must be transpiled
  // devConfig.build = {
  //   transpile: [
  //     'linna-util'
  //   ]
  // }

}

export default devConfig
