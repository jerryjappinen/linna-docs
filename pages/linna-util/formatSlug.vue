<script setup>
import { formatSlug } from 'linna-util'

const string = 'Foo bar foo bar foo bar'
</script>

<template>
  <UtilPage
    name="formatSlug"
    :args="['string', 'length: 64']"
    deps="lodash-es"
  >
    <table>
      <tr>
        <td>formatSlug({{ string }})</td>
        <td>{{ formatSlug(string) }}</td>
      </tr>

      <tr>
        <td>formatSlug({{ string }}, 4)</td>
        <td>{{ formatSlug(string, 4) }}</td>
      </tr>
    </table>
  </UtilPage>
</template>
