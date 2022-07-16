<script>
export default {
  data () {
    return {
      startDate: '2022-01-01',
      endDate: '2022-04-01'
    }
  }
}
</script>

<template>
  <div>

    <h2><code>DateInterval</code></h2>

    <h3>Example</h3>

    <pre><code>&lt;DateInterval :startDate="{{ startDate }}" :endDate="{{ endDate }}" /&gt;</code></pre>

    <p>
      <DateInterval
        :startDate="startDate"
        :endDate="endDate"
      />
    </p>

  </div>
</template>
