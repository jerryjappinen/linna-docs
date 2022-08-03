import { defineNuxtConfig } from 'nuxt'

import {
  mergeConfigs,

  dev,
  linna,

  assets,
  // compression,
  markdown,
  meta,
  pinia,
  // scripts,
  scss,
  sitemap,
  svg,
  viewport
} from 'linna-vue/nuxt/config'

import {
  baseUrl,
  // facebookAppId,
  siteAuthor,
  siteTitle,
  siteDescription,
  siteMainColor,
  twitterUsername,
  longSiteTitle
} from './config'

import routes from './routes'

const config = mergeConfigs(
  // {
  //   build: {
  //     transpile: [
  //       'md5-hex',
  //       'blueimp-md5',
  //       'gravatar-url',
  //       'lodash-es'
  //     ]
  //   }
  // },

  assets({
    baseUrl,
    longSiteTitle,

    coverImage: true,
    favicon: true,
    faviconIco: false,
    appleTouchIcon: false,
    maskIcon: true,
    // maskIconColor: '#000',
    manifest: true
  }),
  markdown(),
  meta({
    siteAuthor,
    siteTitle,
    longSiteTitle,
    siteDescription,
    // facebookAppId,
    twitterUsername
  }),
  pinia(),
  scss({
    global: ['styles/index.scss'],
    shared: ['styles/shared.scss']
  }),
  sitemap({
    baseUrl,
    routes
  }),
  svg(),
  viewport({
    themeColor: siteMainColor
  }),

  linna({
    icons: true,
    components: true,
    composables: true,
    dev: false
  }),
  // compression(),

  // Dev only
  dev({
    typescript: {
      shim: false
    }
  })
)

// console.log(JSON.stringify(config, null, 2))

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig(config)
