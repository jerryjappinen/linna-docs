<script setup>
import sitemap from 'linna-vue/nuxt/config/sitemap'

const sampleOptions = {
  baseUrl: 'https://myappdomain.com',
  exclude: [],
  routes: [
    'entries/foo',
    'entries/bar'
  ]
}
</script>

<template>
  <NuxtConfigPage
    name="sitemap"
    args="options"
    :args-sample="sampleOptions"
  >
    <p>
      Define dynamic routes for prerendering and XML sitemap.
    </p>

    <Dump :data="sitemap(sampleOptions)" />
  </NuxtConfigPage>
</template>
