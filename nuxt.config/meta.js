import {
  siteAuthor,
  siteTitle,
  longSiteTitle,
  siteDescription,
  siteMainColor,
  twitterUsername
} from '../config'

// Site titles and descriptions
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#meta
export default {
  meta: {
    title: longSiteTitle,

    meta: [
      { hid: 'author', name: 'author', content: siteAuthor },
      { hid: 'description', name: 'description', content: siteDescription },
      { hid: 'theme-color', name: 'theme-color', content: siteMainColor },

      // Twitter
      { hid: 'twitter:site', name: 'twitter:site', content: '@' + twitterUsername },
      { hid: 'twitter:title', name: 'twitter:title', content: longSiteTitle },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: siteDescription,
      },

      // Facebook (OpenGraph)
      // { hid: 'fb:app_id', property: 'fb:app_id', content: facebookAppId },
      { hid: 'og:site_name', property: 'og:site_name', content: siteTitle },
      { hid: 'og:title', property: 'og:title', content: longSiteTitle },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDescription,
      }
    ]
  }
}
