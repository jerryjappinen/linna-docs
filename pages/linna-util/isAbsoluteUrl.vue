<script setup>
import { isAbsoluteUrl } from 'linna-util'

const urls = [
  'http://foo.bar',
  'https://foo.bar',
  'ftp://foo.bar',
  '//foo.bar',
  '/foo.bar',
  '/myapp.com',
  'myapp.com',
  '/path',
  'path'
]
</script>

<template>
  <UtilPage
    name="isAbsoluteUrl"
    args="urlString"
  >
    <table>
      <tbody>
        <tr v-for="(url, i) in urls" :key="i">
          <td><code>isAbsoluteUrl('{{ url }}')</code></td>
          <td><code>{{ isAbsoluteUrl(url) }}</code></td>
        </tr>
      </tbody>
    </table>
  </UtilPage>
</template>
