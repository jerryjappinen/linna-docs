<script setup>
import { toPlainText } from 'linna-util'

const demo1 = '# Foo\n\nBar foo'
const demo2 = '<h1>Foo</h1>\n<p>Bar <strong>foo</strong></p>'
</script>

<template>
  <LinnaUtilPage
    name="toPlainText"
    args="string"
    deps="remove-markdown"
  >
    <table>
      <tr>
        <td>
          <code>{{ demo1 }}</code>
        </td>
        <td>{{ toPlainText(this.demo1) }}</td>
      </tr>
      <tr>
        <td>
          <code>{{ demo2 }}</code>
        </td>
        <td>{{ toPlainText(this.demo2) }}</td>
      </tr>
    </table>
  </LinnaUtilPage>
</template>
