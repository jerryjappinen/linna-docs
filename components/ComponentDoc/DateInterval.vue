<script setup>
const startDate = '2022-01-01'
const endDate = '2022-04-01'
</script>

<template>
  <div>

    <pre><code>&lt;DateInterval :startDate="{{ startDate }}" :endDate="{{ endDate }}" /&gt;</code></pre>

    <p>
      <DateInterval
        :startDate="startDate"
        :endDate="endDate"
      />
    </p>

  </div>
</template>
