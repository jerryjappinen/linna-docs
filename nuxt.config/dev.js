import { resolve } from 'path'

export default {
  // These are only to make early development easier
  // https://v3.nuxtjs.org/getting-started/introduction
  ssr: false,
  typescript: {
    shim: false
  },

  // Link to local source files when running docs
  alias: {
    'linna-sass': resolve(__dirname, '../../linna-sass'),
    'linna-util': resolve(__dirname, '../../linna-util/src'),
    'linna-vue': resolve(__dirname, '../../linna-vue')
  }
}
