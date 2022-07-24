<script setup>
import { formatMonth } from 'linna-util'
</script>

<template>
  <LinnaUtilPage
    name="formatMonth"
    args="date"
    deps="date-fns"
  >
    <table>
      <tr>
        <td><code>formatMonth(new Date())</code></td>
        <td>{{ formatMonth(new Date()) }}</td>
      </tr>
    </table>
  </LinnaUtilPage>
</template>
