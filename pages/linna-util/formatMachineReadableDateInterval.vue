<script setup>
import { formatMachineReadableDateTime } from 'linna-util'
import LinnaUtilPage from '../../components/LinnaUtilPage.vue';
</script>

<template>
  <LinnaUtilPage
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
  </LinnaUtilPage>
</template>
