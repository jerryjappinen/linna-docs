<script setup>
const value = ref(false)
</script>

<template>
  <div>

    <p>
      <Toggle v-model="value">
        <Switch :value="value" />
      </Toggle>
    </p>

  </div>
</template>
