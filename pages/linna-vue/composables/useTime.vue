<script setup>
const time = useTime()

const methods = {
  setIntervalDuration: time.setIntervalDuration,
  endLoop: time.endLoop,
  startLoop: time.startLoop
}
</script>

<template>
  <ComposablePage
    name="time"
    :props="{
      current: time.current,
      currentMillisecond: time.currentMillisecond,
      currentSecond: time.currentSecond,
      currentMinute: time.currentMinute,
      currentHour: time.currentHour,
      currentDate: time.currentDate,
      intervalDuration: time.intervalDuration
    }"
    :methods="methods"
  >

    <h4>Change to a slower frame rate</h4>

    <p>
      <button @click="() => { time.setIntervalDuration(500) }">
        setIntervalDuration(500)
      </button>
    </p>

  </ComposablePage>
</template>
