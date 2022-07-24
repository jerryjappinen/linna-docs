<script setup>
const sampleOptions = {
  longSiteTitle: 'My Site Title - Doing this and that for you',
  baseUrl: 'https://mysitetitle.com',

  coverImage: 'cover-image.png', // or `true`
  favicon: 'favicon.svg', // or `true`
  faviconIco: 'favicon.ico', // or `true`
  appleTouchIcon: 'apple-touch-icon.png', // or `true`
  maskIcon: 'mask-icon.svg', // or `true`
  maskIconColor: '#000',
  manifest: 'manifest.json' // or `true`
}
</script>

<template>
  <div>

    <h2><code>assets({ ... })</code></h2>

    <pre><code>import { merge, assets } from 'linna-util/nuxt.config'</code></pre>

    <pre><code>defineNuxtConfig(merge(assets(options), { ... }))</code></pre>

    <Dump :data="sampleOptions" />

  </div>
</template>
