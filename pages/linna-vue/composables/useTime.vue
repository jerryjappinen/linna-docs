<script setup>
const {
  current,
  currentMillisecond,
  currentSecond,
  currentMinute,
  currentHour,
  currentDate,
  intervalDuration,

  init,
  uninit,
  setIntervalDuration,
  endLoop,
  startLoop
} = useTime()

const methods = {
  init,
  uninit,
  setIntervalDuration,
  endLoop,
  startLoop
}

const values = {
  current,
  currentMillisecond,
  currentSecond,
  currentMinute,
  currentHour,
  currentDate,
  intervalDuration
}
</script>

<template>
  <div>

    <h2><code>time</code></h2>

    <pre><code>import useTime from 'linna-vue/composables/time'</code></pre>

    <pre><code>data () {
  return {
    time: useTime()
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

    <h3>Change to a slower frame rate</h3>

    <p>
      <button @click="() => { time.setIntervalDuration(500) }">
        setIntervalDuration(500)
      </button>
    </p>

  </div>
</template>

<style lang="scss" scoped>

button {
  @include link;
}

</style>
