<script setup>
import transpile from 'linna-vue/nuxt/config/transpile'

const sampleOptions = 'lodash-es'
</script>

<template>
  <NuxtConfigPage
    name="transpile"
    args="...moduleNames"
    :args-sample="sampleOptions"
  >

    <Dump :data="transpile(sampleOptions)" />

  </NuxtConfigPage>
</template>
