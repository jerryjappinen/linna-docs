import { defineNuxtConfig } from 'nuxt'
import { merge } from 'linna-vue/nuxt.config'

import nuxtConfigs from './nuxt.config/index.js'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig(merge(nuxtConfigs))
