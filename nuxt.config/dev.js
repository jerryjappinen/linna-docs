import { resolve } from 'path'

process.env.ALIAS_LINNA_SASS

// Link to local source files when running docs
const alias = {}
const packages = {
  'linna-sass': 'ALIAS_LINNA_SASS',
  'linna-util': 'ALIAS_LINNA_UTIL',
  'linna-vue': 'ALIAS_LINNA_VUE'
}

for (const packageName in packages) {
  if (process.env[packages[packageName]]) {
    alias[packageName] = resolve(__dirname, process.env[packages[packageName]])
  }
}

export default {
  alias,

  // These are only to make early development easier
  // https://v3.nuxtjs.org/getting-started/introduction
  ssr: false,
  typescript: {
    shim: false
  }
}
