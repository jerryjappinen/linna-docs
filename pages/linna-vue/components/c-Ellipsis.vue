<script>
export default {
  data () {
    return {
      isLoading: true
    }
  }
}
</script>

<template>
  <div>

    <h2><code>Ellipsis</code></h2>

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
