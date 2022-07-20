import { isArray, mergeWith } from 'lodash-es'

import { isDev } from '../env'

import assets from './assets'
import base from './base'
// import env from './env'
import dev from './dev'
import linna from './linna'
import markdown from './markdown'
import meta from './meta'
// import pinia from './pinia'
// import scripts from './scripts'
import scss from './scss'
import svg from './svg'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
const configs = [
  assets,
  base,
  // env,
  linna,
  markdown,
  meta,
  // pinia,
  // scripts,
  scss,
  svg,

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
