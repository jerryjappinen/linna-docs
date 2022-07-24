<script setup>
import { formatMachineReadableDateTime } from 'linna-util'
import UtilPage from '../../components/UtilPage.vue';
</script>

<template>
  <UtilPage
    name="formatMachineReadableDateTime"
    args="date: new Date()"
    deps="date-fns"
  >
    <table>
      <tr>
        <td><code>formatMachineReadableDateTime(new Date())</code></td>
        <td>{{ formatMachineReadableDateTime(new Date()) }}</td>
      </tr>
    </table>
  </UtilPage>
</template>
