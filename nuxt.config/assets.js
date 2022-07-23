import {
  longSiteTitle,
  baseUrl,

  coverImagePath,
  faviconPath,
  icoFaviconPath,
  appleTouchIconPath,
  maskIconPath,
  maskIconColor,
  manifestPath
} from '../config';

const linkTags = []
const metaTags = []



// Icons
if (faviconPath) {
  linkTags.push({
    rel: 'icon',
    type: 'image/' + (faviconPath.indexOf('.svg') > -1 ? 'svg+xml' : 'png'),
    href: '/' + faviconPath
  })
}

if (icoFaviconPath) {
  linkTags.push({
    rel: 'alternate icon',
    href: '/' + icoFaviconPath
  })
}

if (maskIconPath) {
  linkTags.push({
    rel: 'mask-icon',
    type: 'image/svg+xml',
    href: '/' + maskIconPath,
    color: maskIconColor || '#000000',
  })
}

if (appleTouchIconPath) {
  linkTags.push({
    rel: 'apple-touch-icon',
    href: '/' + appleTouchIconPath
  })
}



// Cover image
if (coverImagePath) {

  // Twitter cards
  metaTags.push({
    hid: 'twitter:card',
    name: 'twitter:card',
    content: 'summary_large_image',
  })

  metaTags.push({
    hid: 'twitter:image',
    name: 'twitter:image',
    content: baseUrl + '/' + coverImagePath
  })

  metaTags.push({
    hid: 'twitter:image:alt',
    property: 'twitter:image:alt',
    content: longSiteTitle,
  })

  // Facebook (OpenGraph)
  metaTags.push({
    hid: 'og:image',
    property: 'og:image',
    content: baseUrl + '/' + coverImagePath
  })

  metaTags.push({
    hid: 'og:image:alt',
    property: 'og:image:alt',
    content: longSiteTitle
  })

}



// Web app manifest
// FIXME: we should really generate the JSON file instead of manually configuring it
if (manifestPath) {
  linkTags.push({
    rel: 'manifest',
    href: '/' + manifestPath
  })
}



// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {
  // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#meta
  meta: {
    link: links,
    meta: metaTags
  }
}
