<script setup>
import { getNameFromEmail } from 'linna-util'

const testStrings = [
  '',
  '.com',
  '@',
  'foo',
  'foo@',
  'foo.bar@',
  'foo.bar@something',
  'foo.bar@something.',
  'foo.bar@something.com'
]

const names = {}
testStrings.forEach((testString) => {
  names[testString] = getNameFromEmail(testString)
})
</script>

<template>
  <LinnaUtilPage
    name="getNameFromEmail"
    args="email"
    deps="lodash-es"
  >
    <table>
      <tbody>
        <tr
          v-for="(name, email) in names"
          :key="email"
        >
          <td><code>getNameFromEmail({{ email }})</code></td>
          <td>{{ typeof name }}</td>
          <td>{{ name }}</td>
        </tr>
      </tbody>
    </table>
  </LinnaUtilPage>
</template>
