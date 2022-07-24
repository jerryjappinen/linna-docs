<script setup>
const sampleOptions = {
  currentColor: '#ff00ff'
}
</script>

<template>
  <NuxtConfigPage
    name="svg"
    args="options"
    :args-sample="sampleOptions"
    deps="vite-svg-loader"
  >
    <p>
      Add support for importing SVGs as Vue components. SVGs are passed through SVGO and replacing any usage of the <code>currentColor</code> color value with the CSS keyword <code>currentColor</code>.
    </p>
  </NuxtConfigPage>
</template>
