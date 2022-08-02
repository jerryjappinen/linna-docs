<script setup>
const sampleOptions = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#123abc'
}
</script>

<template>
  <NuxtConfigPage
    name="viewport"
    args="options"
    :args-sample="sampleOptions"
  >
    <p>Add common viewport meta tags and mobile zooming options.</p>
  </NuxtConfigPage>
</template>
