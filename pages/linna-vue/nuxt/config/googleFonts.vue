<script setup>
import googleFonts from 'linna-vue/nuxt/config/googleFonts'

// https://github.com/vbenjs/vite-plugin-compression#options
const sampleOptions = ['Poppins', ['Dosis', 200, 300, 800], 'Mouse+Memoirs']
</script>

<template>
  <NuxtConfigPage
    name="googleFonts"
    args="...fontFamilies"
    :args-sample="sampleOptions"
  >
    <p>
      Load Google Fonts.
    </p>

    <Dump :data="googleFonts(...sampleOptions)" />

  </NuxtConfigPage>
</template>
