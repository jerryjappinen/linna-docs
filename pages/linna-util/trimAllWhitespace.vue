<script>
import trimAllWhitespace from 'linna-util/trimAllWhitespace'

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
    trimAllWhitespace
  }

}

</script>

<template>
  <div>

    <h2><code>trimAllWhitespace(string)</code></h2>

    <pre><code>import trimAllWhitespace from 'linna-util/trimAllWhitespace'</code></pre>

    <p>
      String with copious amounts of whitespace like this
    </p>

    <pre><code>{{ string  }}</code></pre>

    <p>
      becomes
    </p>

    <pre><code>{{ trimAllWhitespace(string) }}</code></pre>

  </div>
</template>
