<script setup>
import { formatDate } from 'linna-util'

const renderedDate = formatDate(new Date())
</script>

<template>
  <LinnaUtilPage
    name="formatDate"
    args="date"
    deps="date-fns"
  >
    <table>
      <tr>
        <td><code>formatDate(new Date())</code></td>
        <td>{{ renderedDate }}</td>
      </tr>
    </table>
  </LinnaUtilPage>
</template>
