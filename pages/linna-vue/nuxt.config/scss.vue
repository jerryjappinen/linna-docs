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
    :deps="['sass', 'sass-loader']"
  >
    <p>
      Enable Sass in your Nuxt app.
    </p>
  </NuxtConfigPage>
</template>
