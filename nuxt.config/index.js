import { isArray, mergeWith } from 'lodash-es'

import { isDev } from '../env'

import assets from './assets'
// import env from './env'
import dev from './dev'
import linna from './linna'
import markdown from './markdown'
import meta from './meta'
// import pinia from './pinia'
// import scripts from './scripts'
import scss from './scss'
import sitemap from './sitemap'
import svg from './svg'
import viewport from './viewport'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
const configs = [
  assets,
  // env,
  linna,
  markdown,
  meta,
  // pinia,
  // scripts,
  scss,
  sitemap,
  svg,
  viewport,

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
