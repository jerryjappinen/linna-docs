<script setup>
useHead({
  title: 'AppStoreBadge'
})
</script>

<template>
  <div>

    <p>
      <AppStoreBadge />
    </p>

    <p>
      <AppStoreBadge :light="true" />
    </p>

  </div>
</template>
