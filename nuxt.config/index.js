import { resolve } from 'path'

import isArray from 'lodash/isArray'
import mergeWith from 'lodash/mergeWith'

import { isDev } from '../env'

import assets from './assets'
import meta from './meta'
import modules from './modules'

const devSettings = {
  // These are only to make early development easier
  // https://v3.nuxtjs.org/getting-started/introduction
  ssr: false,
  typescript: {
    shim: false
  },

  // Link to local source files when running docs
  alias: {
    'linna-sass': resolve(__dirname, '../../linna-sass'),
    'linna-util': resolve(__dirname, '../../linna-util'),
    'linna-vue': resolve(__dirname, '../../linna-vue')
  }
}

isDev

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
const configs = [
  assets,
  meta,
  modules,
  isDev ? devSettings : {},
  {

    // Make uncompiled components work
    // FIXME: this should not be needed in production
    build: {
      transpile: [
        'linna-vue/components'
      ]
    }

  }
]

// Also merge arrays
// https://lodash.com/docs/4.17.15#mergeWith
export default mergeWith({}, ...configs, (objValue, srcValue) => {
  if (isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})
