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
  <div>

    <h2><code>getDomain(url)</code></h2>

    <pre><code>import { getDomain } from 'linna-util'</code></pre>

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

  </div>
</template>
