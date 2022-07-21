<script>
const { isOnline, isOffline } = useNetwork()
</script>

<template>
  <div>

    <h2><code>network</code></h2>

    <pre><code>import useNetwork from 'linna-vue/composables/network'</code></pre>

    <pre><code>data () {
  return {
    network: useNetwork()
  }
}</code></pre>

    <h3>Example</h3>

    <p>Automatically initialised on mount.</p>

    <table>
      <tr>
        <th><code>network.isOnline</code></th>
        <td><code>{{ isOnline }}</code></td>
      </tr>
      <tr>
        <th><code>network.isOffline</code></th>
        <td><code>{{ isOffline }}</code></td>
      </tr>
    </table>

  </div>
</template>

<style lang="scss" scoped>

button {
  @include link;
}

</style>
