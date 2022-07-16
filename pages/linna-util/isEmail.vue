<script>
import isEmail from 'linna-util/isEmail'

export default {

  data () {
    return {
      demo: 'foo@bar.io'
    }
  },

  computed: {

    demoIsEmail () {
      return isEmail(this.demo)
    }

  }

}

</script>

<template>
  <div>

    <h2><code>isEmail(string)</code></h2>

    <pre><code>import isEmail from 'linna-util/isEmail'</code></pre>

    <h3>Example</h3>

    <p>
      <input v-model="demo">
      {{ demoIsEmail }}
    </p>

  </div>
</template>
