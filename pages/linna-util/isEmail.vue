<script setup>
import isEmail from 'linna-util/isEmail'

const demo = ref('foo@bar.io')
</script>

<template>
  <UtilPage
    name="isEmail"
    args="string"
  >
    <p>
      <input v-model="demo">
      {{ isEmail(demo.value) }}
    </p>
  </UtilPage>
</template>
