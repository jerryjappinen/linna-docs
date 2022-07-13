import { resolve } from 'path'

process.env.ALIAS_LINNA_SASS

// Link to local source files when running docs
const alias = {}

if (process.env.ALIAS_LINNA_SASS) {
  alias['linna-sass'] = resolve(__dirname, process.env.ALIAS_LINNA_SASS)
}

if (process.env.ALIAS_LINNA_UTIL) {
  alias['linna-util'] = resolve(__dirname, process.env.ALIAS_LINNA_UTIL)
}

if (process.env.ALIAS_LINNA_VUE) {
  alias['linna-vue'] = resolve(__dirname, process.env.ALIAS_LINNA_VUE)
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
