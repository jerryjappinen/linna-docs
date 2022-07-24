<script setup>
import { getDomain } from 'linna-util'

const urls = [
  'https://foo.bar.com:8080/video/sadkhehsdaksd?thisnadthat=123&foo=bar',
  'http://www.foo.com',
  'http://api.foo.com',
  'www.foo.com/',
  'www.foo.com',
  'api.foo.com',
  'foo.com',
  'foo',
  ''
]
</script>

<template>
  <LinnaUtilPage
    name="getDomain"
    args="url"
  >
    <table>
      <tbody>

        <tr
          v-for="(url, i) in urls"
          :key="i"
        >
          <td>
            <code>getDomain('{{ url }}')</code>
          </td>
          <td>{{ getDomain(url) }}</td>
        </tr>

        <tr>
          <td>
            <code>getDomain()</code>
          </td>
          <td>{{ getDomain() }}</td>
        </tr>

      </tbody>
    </table>
  </LinnaUtilPage>
</template>
