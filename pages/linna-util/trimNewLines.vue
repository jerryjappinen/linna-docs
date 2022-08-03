<script setup>
import trimNewLines from 'linna-util/trimNewLines'

const string = `



foo


bar     bar



      `
</script>

<template>
  <UtilPage
    name="trimNewLines"
    args="string"
  >
    <p>
      String with copious amounts of whitespace like this
    </p>

    <pre><code>{{ string }}</code></pre>

    <p>
      becomes
    </p>

    <pre><code>{{ trimNewLines(string) }}</code></pre>

  </UtilPage>
</template>
