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

    <h3>Example</h3>

    <p>
      <Dump :data="dump" />
    </p>

  </div>
</template>
