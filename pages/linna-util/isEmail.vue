<script setup>
import { isEmail } from 'linna-util'

const demo = ref('foo@bar.io')
</script>

<template>
  <div>

    <h2><code>isEmail(string)</code></h2>

    <pre><code>import { isEmail } from 'linna-util'</code></pre>

    <h3>Example</h3>

    <p>
      <input v-model="demo">
      {{ isEmail(demo.value) }}
    </p>

  </div>
</template>
