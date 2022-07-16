<script>
import useNetwork from 'linna-vue/composables/network'

export default {

  data () {
    return {
      network: useNetwork()
    }
  },

  computed: {

    methods () {
      return [
        'init',
        'uninit'
      ]
    },

    values () {
      return {
        isOnline: this.network.isOnline,
        isOffline: this.network.isOffline
      }
    }

  }

}
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
      <tr v-for="(name) in methods" :key="name">
        <th><code>network.{{ name }}()</code></th>
        <td>
          <button @click="network[name]">Run</button>
        </td>
      </tr>

      <tr v-for="(value, name) in values" :key="name">
        <th><code>network.{{ name }}</code></th>
        <td><code>{{ value }}</code></td>
      </tr>
    </table>

  </div>
</template>

<style lang="scss" scoped>

button {
  @include link;
}

</style>
