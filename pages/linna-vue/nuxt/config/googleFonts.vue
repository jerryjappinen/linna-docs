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

    <h4>Quick and dirty</h4>

    <pre><code>googleFonts('Poppins', 'Dosis')</code></pre>

    <Dump :data="googleFonts('Poppins', 'Dosis')" />



    <h4>Full weight options</h4>

    <pre><code>googleFonts({{ sampleOptions }})</code></pre>

    <Dump :data="googleFonts(sampleOptions)" />

  </NuxtConfigPage>
</template>
