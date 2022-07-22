import { componentPages } from '../config'

// This should be a list of local paths
const routes = [

  // Define dynamic routes here
  ...componentPages.map((componentName) => {
    return `linna-vue/components/${componentName}`
  })
]

// https://v3.nuxtjs.org/guide/deploy/static-hosting#client-side-only-rendering
// https://nitro.unjs.io/config/#prerender
export default {
  nitro: {
    prerender: {
      routes
    }
  }
}
