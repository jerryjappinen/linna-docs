<script setup>
import compression from 'linna-vue/nuxt/config/compression'

// https://github.com/vbenjs/vite-plugin-compression#options
const sampleOptions = {
  verbose: true,
  filter: /\.(js|mjs|json|css|html)$/i,
  disable: false,
  threshold: 1025,
  algorithm: 'brotliCompress',
  ext: '.gz',
  compressionOptions: {},
  deleteOriginFile: false
}
</script>

<template>
  <NuxtConfigPage
    name="compression"
    args="options"
    :args-sample="sampleOptions"
  >
    <p>
      Enable compression of assets delivered by the Nuxt app.
    </p>

    <Dump :data="compression(sampleOptions)" />
  </NuxtConfigPage>
</template>
