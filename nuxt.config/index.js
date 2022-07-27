import { isDev } from 'linna-util'

import {
  assets,
  compression,
  linna,
  markdown,
  meta,
  pinia,
  // scripts,
  scss,
  sitemap,
  svg,
  viewport
} from 'linna-vue/nuxt.config'

import {
  baseUrl,
  siteAuthor,
  siteTitle,
  siteDescription,
  siteMainColor,
  twitterUsername,
  longSiteTitle
} from './config'

import dev from './dev'
import routes from './routes'



// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default [
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

  compression(),
  markdown(),

  meta({
    siteAuthor,
    siteTitle,
    longSiteTitle,
    siteDescription,
    siteMainColor,
    facebookAppId,
    twitterUsername
  }),

  linna(),
  pinia(),
  // scripts(),
  scss({
    global: ['styles/index.scss'],
    shared: ['styles/shared.scss']
  }),
  sitemap({
    baseUrl,
    routes
  }),
  svg(),
  viewport(),

  // Dev config locally
  isDev() ? dev : {}
]
