import { componentPages } from './config'

// This should be a list of local paths
export default [

  // Define dynamic routes here
  ...componentPages.map((componentName) => {
    return `linna-vue/components/${componentName}`
  })
]
