<script setup>
import useDevice from 'linna-vue/stores/device'

const device = useDevice()
</script>

<template>
  <div>
    <h3>Pinia store: <code>device</code></h3>

    <pre><code>import { useDevice } from 'linna-vue/stores/device'

const device = useDevice()</code></pre>

    <Dump :data="{
      cursor: device.cursor,
      network: device.network,
      platform: device.platform,
      time: device.time,
      viewport: device.viewport
    }" />

  </div>
</template>
