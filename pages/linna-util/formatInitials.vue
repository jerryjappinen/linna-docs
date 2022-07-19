<script>
import { formatInitials } from 'linna-util'

export default {

  data () {
    return {
      text: 'Some Name Goes Here'
    }
  },

  computed: {

    initials () {
      return formatInitials(this.text)
    }

  }

}
</script>

<template>
  <div>

    <h2><code>formatInitials(string)</code></h2>

    <pre><code>import { formatInitials } from 'linna-util'</code></pre>

    <h3>Example</h3>

    <p>
      <label>
        Edit this text:
        <input type="text" v-model="text" />
      </label>
    </p>

    <p>
      Corresponding initials: <code>{{ initials }}</code>
    </p>

  </div>
</template>
