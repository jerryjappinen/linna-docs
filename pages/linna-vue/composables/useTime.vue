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
  endLoop,
  startLoop
}
</script>

<template>
  <ComposablePage
    name="time"
    :props="{
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
