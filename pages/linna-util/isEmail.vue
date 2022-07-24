<script setup>
import { isEmail } from 'linna-util'

const demo = ref('foo@bar.io')
</script>

<template>
  <LinnaUtilPage
    name="isEmail"
    args="string"
  >
    <p>
      <input v-model="demo">
      {{ isEmail(demo.value) }}
    </p>
  </LinnaUtilPage>
</template>
