import { longSiteTitle, splashImagePath } from '../config';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {
  // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#meta
  meta: {
    link: [

      // Icons
      // { rel: 'alternate icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      {
        rel: 'mask-icon',
        type: 'image/svg+xml',
        href: '/mask-icon.svg',
        color: '#000000',
      },
      { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' },

      // Manifest
      { rel: 'manifest', href: '/manifest.json' }
    ],

    // Splash images
    meta: [

      // Twitter cards
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:image', name: 'twitter:image', content: splashImagePath },
      {
        hid: 'twitter:image:alt',
        property: 'twitter:image:alt',
        content: longSiteTitle,
      },

      // OpenGraph, Facebook
      { hid: 'og:image', property: 'og:image', content: splashImagePath },
      { hid: 'og:image:alt', property: 'og:image:alt', content: longSiteTitle }
    ]
  }
}
