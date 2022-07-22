<script setup>
const value = ref(2)
</script>

<template>
  <div>

    <p>
      <Slider v-model="value" :max="100" />
    </p>

  </div>
</template>
