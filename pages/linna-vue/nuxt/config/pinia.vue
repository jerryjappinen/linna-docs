<script setup>
import pinia from 'linna-vue/nuxt/config/pinia'
</script>

<template>
  <NuxtConfigPage name="pinia">
    <p>
      Enable <ExternalLink href="https://pinia.vuejs.org/">Pinia</ExternalLink> in your Nuxt app.
    </p>

    <Dump :data="pinia()" />
  </NuxtConfigPage>
</template>
