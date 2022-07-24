<script setup>
import { formatMonth } from 'linna-util'
</script>

<template>
  <div>

    <h2><code>formatMonth(date)</code></h2>

    <pre><code>npm i date-fns</code></pre>

    <pre><code>import { formatMonth } from 'linna-util'</code></pre>

    <h3>Example</h3>

    <table>
      <tr>
        <td><code>formatMonth(new Date())</code></td>
        <td>{{ formatMonth(new Date()) }}</td>
      </tr>
    </table>

  </div>
</template>
