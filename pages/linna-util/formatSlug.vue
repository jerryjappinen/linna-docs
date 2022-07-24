<script setup>
import { formatSlug } from 'linna-util'

const string = 'Foo bar foo bar'
</script>

<template>
  <LinnaUtilPage
    name="formatSlug"
    args="string"
    deps="lodash-es"
  >
    <table>
      <tr>
        <td>{{ string }}</td>
        <td>{{ formatSlug(string) }}</td>
      </tr>
    </table>
  </LinnaUtilPage>
</template>
