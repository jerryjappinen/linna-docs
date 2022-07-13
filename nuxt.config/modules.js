import mdPlugin from 'vite-plugin-markdown'
import svgLoader from 'vite-svg-loader'

import svgoConfig from './svgoConfig'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/styles/shared.scss';`
        }
      }
    },

    plugins: [
      mdPlugin({
        mode: 'vue',
        markdownIt: {
          html: true,
          linkify: true,
          typographer: false
        }
      }),

      // https://www.npmjs.com/package/vite-svg-loader
      svgLoader({ svgoConfig })
    ]
  },

  buildModules: [
    // State management
    // '@pinia/nuxt',
  ],

  modules: [
    'linna-vue/nuxt'
  ]
}
