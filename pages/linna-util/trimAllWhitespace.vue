<script setup>
import { trimAllWhitespace } from 'linna-util'

const string = `



foo


bar     bar



  `
</script>

<template>
  <div>

    <h2><code>trimAllWhitespace(string)</code></h2>

    <pre><code>import { trimAllWhitespace } from 'linna-util'</code></pre>

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
