<script>
import useCursor from 'linna-vue/composables/cursor'

export default {

  data () {
    return {
      cursor: useCursor()
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
        x: this.cursor.x,
        y: this.cursor.y
      }
    }

  }

}
</script>

<template>
  <div>

    <h2><code>cursor</code></h2>

    <pre><code>import useCursor from 'linna-vue/composables/cursor'</code></pre>

    <pre><code>data () {
  return {
    cursor: useCursor()
  }
}</code></pre>

    <h3>Example</h3>

    <p>Automatically initialised on mount.</p>

    <table>
      <tr v-for="(name) in methods" :key="name">
        <th><code>cursor.{{ name }}()</code></th>
        <td>
          <button @click="cursor[name]">Run</button>
        </td>
      </tr>

      <tr v-for="(value, name) in values" :key="name">
        <th><code>cursor.{{ name }}</code></th>
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
