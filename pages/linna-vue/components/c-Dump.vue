<script>
export default {
  data () {
    return {
      dump: {
        startDate: '2022-01-01',
        endDate: '2022-04-01'
      }
    }
  }
}
</script>

<template>
  <div>

    <h2><code>Dump</code></h2>

    <p>
      <Dump :value="dump" />
    </p>

  </div>
</template>
