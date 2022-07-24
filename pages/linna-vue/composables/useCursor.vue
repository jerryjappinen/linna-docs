<script setup>
const { x, y } = useCursor()
</script>

<template>
  <ComposablePage
    name="cursor"
    :props="{ x, y }"
  >
    <p>Automatically initialised on mount.</p>
  </ComposablePage>
</template>
