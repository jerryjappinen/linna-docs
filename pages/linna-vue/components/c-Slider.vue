<script>
export default {
  data () {
    return {
      value: 2
    }
  }
}
</script>

<template>
  <div>

    <h2><code>Slider</code></h2>

    <h3>Example</h3>

    <p>
      <Slider v-model="value" :max="100" />
    </p>

  </div>
</template>
