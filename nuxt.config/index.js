import isArray from 'lodash/isArray'
import mergeWith from 'lodash/mergeWith'

import { isDev } from '../env'

import assets from './assets'
import dev from './dev'
import meta from './meta'
import modules from './modules'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
const configs = [
  assets,
  meta,
  modules,
  isDev ? dev : {},
  {

    // Include library components in the compilation
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
