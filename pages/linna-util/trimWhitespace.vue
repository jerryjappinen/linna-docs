<script setup>
import { trimWhitespace } from 'linna-util'

const string = `



foo


bar     bar



      `
</script>

<template>
  <div>

    <h2><code>trimWhitespace(string)</code></h2>

    <pre><code>import { trimWhitespace } from 'linna-util'</code></pre>

    <p>
      String with copious amounts of whitespace like this
    </p>

    <pre><code>{{ string }}</code></pre>

    <p>
      becomes
    </p>

    <pre><code>{{ trimWhitespace(string) }}</code></pre>

  </div>
</template>
