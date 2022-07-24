<script setup>
import { formatMonth } from 'linna-util'
</script>

<template>
  <UtilPage
    name="formatMonth"
    args="date: new Date()"
    deps="date-fns"
  >
    <table>
      <tr>
        <td><code>formatMonth(new Date())</code></td>
        <td>{{ formatMonth(new Date()) }}</td>
      </tr>
    </table>
  </UtilPage>
</template>
