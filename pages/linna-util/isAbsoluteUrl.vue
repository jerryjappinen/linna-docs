<script>
import isAbsoluteUrl from 'linna-util/isAbsoluteUrl'

export default {

  data () {
    return {
      urls: [
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
    }
  },

  methods: {
    isAbsoluteUrl
  }

}

</script>

<template>
  <div>

    <h2><code>isAbsoluteUrl(urlString)</code></h2>

    <pre><code>import isAbsoluteUrl from 'linna-util/isAbsoluteUrl'</code></pre>

    <h3>Example</h3>

    <table>
      <tbody>
        <tr v-for="(url, i) in urls" :key="i">
          <td><code>isAbsoluteUrl('{{ url }}')</code></td>
          <td><code>{{ isAbsoluteUrl(url) }}</code></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
