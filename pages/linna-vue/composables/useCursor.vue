<script setup>
const cursor = useCursor()
</script>

<template>
  <ComposablePage
    name="cursor"
    :props="{
      x: cursor.x,
      y: cursor.y
    }"
  >
    <p>Automatically initialised on mount.</p>
  </ComposablePage>
</template>
