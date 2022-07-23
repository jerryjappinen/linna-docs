// SCSS preprocessing
const autoInjectFile = 'styles/shared.scss'

export default {

  // Global CSS (internal)
  css: ['@/styles/index.scss'],

  // Links to static CSS files
  // link: [
  //   { rel: 'stylesheet', href: 'https://style.lib.com/styles.css' }
  // ],

  // Global style tags
  // meta: {
  //   style: [
  //     {
  //       type: 'text/css',
  //       children: ':root { color: red }'
  //     }
  //   ]
  // },

  // Inject shared SCSS into components
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/${autoInjectFile}';`
        }
      }
    }
  }

}
