<script setup>
// import googleFonts from 'linna-vue/nuxt/config/googleFonts'
import googleFonts from 'linna-vue/nuxt/config/googleFonts'

// https://github.com/vbenjs/vite-plugin-compression#options
const sampleOptions = {
  'Poppins': true,
  'Mouse+Memoirs': false,
  'Dosis': [200, 300, 800]
}
</script>

<template>
  <NuxtConfigPage
    name="googleFonts"
    args="fontFamilies"
    :args-sample="sampleOptions"
  >
    <p>
      Load Google Fonts.
    </p>

    <Dump :data="googleFonts('Poppins', 'Dosis')" />

    <Dump :data="googleFonts(sampleOptions)" />

  </NuxtConfigPage>
</template>
