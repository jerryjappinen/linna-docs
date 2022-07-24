<script setup>
import { trimAllWhitespace } from 'linna-util'

const string = `



foo


bar     bar



  `
</script>

<template>
  <UtilPage
    name="trimAllWhitespace"
    args="string"
  >
    <p>
      String with copious amounts of whitespace like this
    </p>

    <pre><code>{{ string  }}</code></pre>

    <p>
      becomes
    </p>

    <pre><code>{{ trimAllWhitespace(string) }}</code></pre>
  </UtilPage>
</template>
