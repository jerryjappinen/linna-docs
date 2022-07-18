<script>
export default {

  data () {
    return {
      time: useTime()
    }
  },

  computed: {

    methods () {
      return [
        'init',
        'uninit',
        'setIntervalDuration',
        'endLoop',
        'startLoop'
      ]
    },

    values () {
      return {
        current: this.time.current,
        currentMillisecond: this.time.currentMillisecond,
        currentSecond: this.time.currentSecond,
        currentMinute: this.time.currentMinute,
        currentHour: this.time.currentHour,
        currentDate: this.time.currentDate,
        intervalDuration: this.time.intervalDuration,
      }
    }

  }

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
      <tr v-for="(name) in methods" :key="name">
        <th><code>time.{{ name }}()</code></th>
        <td>
          <button @click="time[name]">Run</button>
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
