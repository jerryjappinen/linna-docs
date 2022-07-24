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
  <NuxtConfigPage
    name="assets"
    args="options"
    :args-sample="sampleOptions"
  />
</template>
