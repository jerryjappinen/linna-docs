<script setup>
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
    deps="@nuxtjs/sitemap"
  >
    <p>
      Define dynamic routes for prerendering and XML sitemap.
    </p>
  </NuxtConfigPage>
</template>
