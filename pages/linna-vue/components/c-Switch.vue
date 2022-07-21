<script setup>
const value = ref(false)
</script>

<template>
  <div>

    <h2><code>Slider</code></h2>

    <h3>Example</h3>

    <p>
      <Toggle v-model="value">
        <Switch :value="value" />
      </Toggle>
    </p>

  </div>
</template>
