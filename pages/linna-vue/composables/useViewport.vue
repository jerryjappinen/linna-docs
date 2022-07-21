<script>
const {
  breakpoints,
  hasObtrusiveScrollbars,
  darkMode,
  width,
  height,
  scroll,
  scrollX,
  isScrollingDown,
  isScrollingUp,
  centerX,
  centerY,
  isScrolled,
  isScrolledX,
  isLandscape,
  isPortrait,
  currentBreakpointRange,
  previousBreakpoint,
  exactBreakpoint,
  nextBreakpoint,

  init,
  uninit,
  setBreakpoints
} = useViewport()

const methods = {
  init,
  uninit,
  setBreakpoints
}

const values = {
  breakpoints,
  hasObtrusiveScrollbars,
  darkMode,
  width,
  height,
  scroll,
  scrollX,
  isScrollingDown,
  isScrollingUp,
  centerX,
  centerY,
  isScrolled,
  isScrolledX,
  isLandscape,
  isPortrait,
  currentBreakpointRange,
  previousBreakpoint,
  exactBreakpoint,
  nextBreakpoint
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
      <tr v-for="(method, name) in methods" :key="name">
        <th><code>time.{{ name }}()</code></th>
        <td>
          <button @click="method">Run</button>
        </td>
      </tr>

      <tr v-for="(value, name) in values" :key="name">
        <th><code>time.{{ name }}</code></th>
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
