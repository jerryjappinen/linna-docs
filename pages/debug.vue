<script setup>
const isMounted = useIsMounted()
</script>

<template>
  <div>

    <h2>Dump</h2>

    <Dump :data="{
      isMounted
    }" />

  </div>
</template>
