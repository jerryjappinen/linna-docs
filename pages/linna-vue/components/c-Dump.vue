<script setup>
const dump = {
  startDate: '2022-01-01',
  endDate: '2022-04-01'
}
</script>

<template>
  <div>

    <h2><code>Dump</code></h2>

    <h3>Example</h3>

    <Dump :data="dump" />

  </div>
</template>
