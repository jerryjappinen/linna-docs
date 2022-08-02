<script setup>
const sampleOptions = {
  components: true,
  composables: true,
  icons: true,
  prefix: 'MyComponentPrefix'
}
</script>

<template>
  <NuxtConfigPage
    name="assets"
    args="options"
    :args-sample="sampleOptions"
  >
    <p>
      Currently <code>prefix</code> is not passed on to <code>linna-icons</code>.
    </p>
  </NuxtConfigPage>
</template>
