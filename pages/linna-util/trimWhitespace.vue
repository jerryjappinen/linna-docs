<script setup>
import { trimWhitespace } from 'linna-util'

const string = `



foo


bar     bar



      `
</script>

<template>
  <LinnaUtilPage
    name="trimWhitespace"
    args="string"
  >
    <p>
      String with copious amounts of whitespace like this
    </p>

    <pre><code>{{ string }}</code></pre>

    <p>
      becomes
    </p>

    <pre><code>{{ trimWhitespace(string) }}</code></pre>
  </LinnaUtilPage>
</template>
