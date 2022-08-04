<script setup>
import production from 'linna-vue/nuxt/config/production'

const sampleOptions = {
  app: {
    baseUrl: 'https://mydomain.com'
  }
}
</script>

<template>
  <NuxtConfigPage
    name="production"
    args="nuxtConfigParameters"
    :args-sample="sampleOptions"
  >

    <p>
      Add any Nuxt config you like, but only in dev mode.
    </p>

    <Dump :data="production(sampleOptions)" />
  </NuxtConfigPage>
</template>
