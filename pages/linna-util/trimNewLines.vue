<script>
import trimNewLines from 'linna-util/trimNewLines'


export default {

  data () {
    return {
      string: `



foo


bar     bar



      `
    }
  },

  methods: {
    trimNewLines
  }

}

</script>

<template>
  <div>

    <h2><code>trimNewLines(string)</code></h2>

    <pre><code>import trimNewLines from 'linna-util/trimNewLines'</code></pre>

    <p>
      String with copious amounts of whitespace like this
    </p>

    <pre><code>{{ string }}</code></pre>

    <p>
      becomes
    </p>

    <pre><code>{{ trimNewLines(string) }}</code></pre>

  </div>
</template>
