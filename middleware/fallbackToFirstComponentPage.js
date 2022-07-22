import { componentPages } from '../config'

export default defineNuxtRouteMiddleware((to) => {
  if (!to.params.componentName) {
    return navigateTo('linna-vue/' + componentPages[0])
  }
})

