<script setup>
const value = ref(2)
</script>

<template>
  <Slider v-model="value" :min="1" :max="100" :step="1" />
</template>
