<script setup>
import { formatFileSize } from 'linna-util'

const fileSizes = [
  1,
  12,
  123,
  1234,
  12345,
  123456,
  1234567,
  12345678,
  123456789,
  1234567890,
  12345678901,
  123456789012,
  1234567890123,
  12345678901234,
  123456789012345,
  1234567890123456,
  12345678901234567,
  123456789012345678,
  1234567890123456789,
  12345678901234567890
]

const formattedFileSizes = fileSizes.map(formatFileSize)
</script>

<template>
  <UtilPage
    name="formatFileSize"
    args="fileSizeInBytes"
  >
    <p>Format a file size in bytes to be human readable.</p>

    <table>
      <tbody>
        <tr v-for="(formatted, i) in formattedFileSizes" :key="i">
          <td><code>formatFileSize({{ fileSizes[i] }})</code></td>
          <td>{{ formatted }}</td>
        </tr>
      </tbody>
    </table>
  </UtilPage>
</template>
