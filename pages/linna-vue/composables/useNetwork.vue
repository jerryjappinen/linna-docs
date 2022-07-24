<script setup>
const { isOnline, isOffline } = useNetwork()
</script>

<template>
  <ComposablePage
    name="network"
    :props="{ isOnline, isOffline }"
  >
    <p>Automatically initialised on mount.</p>
  </ComposablePage>
</template>
