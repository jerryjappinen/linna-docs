<script setup>
const { x, y, init, uninit } = useCursor()
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
      <!-- Methods -->
      <tr>
        <th><code>cursor.init()</code></th>
        <td>
          <button @click="init">Run</button>
        </td>
        <th><code>cursor.uninit()</code></th>
        <td>
          <button @click="uninit">Run</button>
        </td>
      </tr>

      <!-- Values -->
      <tr>
        <th><code>cursor.x</code></th>
        <td><code>{{ x }}</code></td>
      </tr>
      <tr>
        <th><code>cursor.y</code></th>
        <td><code>{{ y }}</code></td>
      </tr>
    </table>

  </div>
</template>

<style lang="scss" scoped>

button {
  @include link;
}

</style>
