<script setup>
const network = useNetwork()
</script>

<template>
  <ComposablePage
    name="network"
    :props="{
      isOnline: network.isOnline,
      isOffline: network.isOffline
    }"
  >
    <p>Automatically initialised on mount.</p>
  </ComposablePage>
</template>
