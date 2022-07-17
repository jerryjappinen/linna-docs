// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {

  // Include library components in the compilation
  build: {
    transpile: [
      'linna-vue/components'
    ]
  },

  // Auto load linna (will auto-import components)
  modules: [
    'linna-vue/nuxt'
  ]
}
