<script>
import useViewport from 'linna-vue/composables/viewport'

export default {

  data () {
    return {
      viewport: useViewport()
    }
  },

  computed: {

    methods () {
      return [
        'init',
        'uninit',
        'setBreakpoints'
      ]
    },

    values () {
      return {
        breakpoints: this.viewport.breakpoints,

        hasObtrusiveScrollbars: this.viewport.hasObtrusiveScrollbars,
        darkMode: this.viewport.darkMode,
        width: this.viewport.width,
        height: this.viewport.height,
        scroll: this.viewport.scroll,
        scrollX: this.viewport.scrollX,
        isScrollingDown: this.viewport.isScrollingDown,
        isScrollingUp: this.viewport.isScrollingUp,

        centerX: this.viewport.centerX,
        centerY: this.viewport.centerY,
        isScrolled: this.viewport.isScrolled,
        isScrolledX: this.viewport.isScrolledX,
        isLandscape: this.viewport.isLandscape,
        isPortrait: this.viewport.isPortrait,
        currentBreakpointRange: this.viewport.currentBreakpointRange,
        previousBreakpoint: this.viewport.previousBreakpoint,
        exactBreakpoint: this.viewport.exactBreakpoint,
        nextBreakpoint: this.viewport.nextBreakpoint
      }
    }

  }

}
</script>

<template>
  <div>

    <h2><code>viewport</code></h2>

    <pre><code>import useViewport from 'linna-vue/composables/viewport'</code></pre>

    <pre><code>data () {
  return {
    viewport: useViewport()
  }
}</code></pre>

    <h3>Example</h3>

    <p>Automatically initialised on mount.</p>

    <table>
      <tr v-for="(name) in methods" :key="name">
        <th><code>viewport.{{ name }}()</code></th>
        <td>
          <button @click="viewport[name]">Run</button>
        </td>
      </tr>

      <tr v-for="(value, name) in values" :key="name">
        <th><code>viewport.{{ name }}</code></th>
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
