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
  // transpile,
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
  // transpile(
  //   // 'md5-hex',
  //   // 'blueimp-md5',
  //   // 'gravatar-url',
  //   // 'lodash-es',
  //   'vite-svg-loader'
  // ),

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
    // baseUrl, // breaks on RC6
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
  // compression(), // untested

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
