<script setup>
import { formatSlug } from 'linna-util'

const string = 'Foo bar foo bar'
</script>

<template>
  <div>

    <h2><code>formatSlug(string)</code></h2>

    <pre><code>import { formatSlug } from 'linna-util'</code></pre>

    <h3>Example</h3>

    <table>
      <tr>
        <td>{{ string }}</td>
        <td>{{ formatSlug(string) }}</td>
      </tr>
    </table>

  </div>
</template>
