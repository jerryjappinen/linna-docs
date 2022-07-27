<script setup>
const isLoading = ref(true)
</script>

<template>
  <div>

    <p>
      <label>
        <input type="checkbox" v-model="isLoading" /> <code>loading</code>
      </label>
    </p>

    <p>
      <Ellipsis :loading="isLoading" />
    </p>

  </div>
</template>
