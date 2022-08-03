<script setup>
import svg from 'linna-vue/nuxt/config/svg'

const sampleOptions = {
  currentColor: '#ff00ff'
}
</script>

<template>
  <NuxtConfigPage
    name="svg"
    args="options"
    :args-sample="sampleOptions"
  >
    <p>
      <strong>Support for importing SVGs as Vue components.</strong> SVGs are passed through SVGO and replacing any usage of the <code>currentColor</code> color value with the CSS keyword <code>currentColor</code>.
    </p>

    <Dump :data="svg(sampleOptions)" />
  </NuxtConfigPage>
</template>
