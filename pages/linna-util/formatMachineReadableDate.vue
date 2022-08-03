<script setup>
import formatMachineReadableDate from 'linna-util/formatMachineReadableDate'

const renderedDate = formatMachineReadableDate(new Date())
</script>

<template>
  <UtilPage
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
  </UtilPage>
</template>
