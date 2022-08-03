<script setup>
import linna from 'linna-vue/nuxt/config/linna'

const sampleOptions = {
  components: true,
  composables: true,
  icons: true,
  prefix: 'MyComponentPrefix'
}
</script>

<template>
  <NuxtConfigPage
    name="linna"
    args="options"
    :args-sample="sampleOptions"
  >
    <p>
      Currently <code>prefix</code> is not passed on to <code>linna-icons</code>.
    </p>

    <Dump :data="linna(sampleOptions)" />
  </NuxtConfigPage>
</template>
