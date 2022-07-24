<script setup>
import { formatMachineReadableDate } from 'linna-util'

const renderedDate = formatMachineReadableDate(new Date())
</script>

<template>
  <LinnaUtilPage
    name="formatMachineReadableDate"
    args="date: new Date()"
    deps="date-fns"
  >
    <table>
      <tr>
        <td><code>formatMachineReadableDate(new Date())</code></td>
        <td>{{ renderedDate }}</td>
      </tr>
    </table>
  </LinnaUtilPage>
</template>
