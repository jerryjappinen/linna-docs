<script setup>
const sampleOptions = {
  global: [
    'stylehels/global.scss'
  ],
  shared: [
    'styles/shared.scss'
  ],
  external: [
    'https://somedomain.com/styles.css'
  ]
}
</script>

<template>
  <NuxtConfigPage
    name="scss"
    args="options"
    :args-sample="sampleOptions"
  >
    <p>
      <strong>Support for importing Sass.</strong> Easily enable global styling and sharing mixins and variables throughout the app.
    </p>
  </NuxtConfigPage>
</template>
