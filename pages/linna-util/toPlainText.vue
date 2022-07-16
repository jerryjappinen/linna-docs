<script>
import toPlainText from 'linna-util/toPlainText'

export default {

  data () {
    return {
      demo1: '# Foo\n\nBar foo',
      demo2: '<h1>Foo</h1>\n<p>Bar <strong>foo</strong></p>'
    }
  },

  methods: {
    toPlainText
  }

}

</script>

<template>
  <div>

    <h2><code>toPlainText(string)</code></h2>

    <pre><code>npm i remove-markdown</code></pre>

    <pre><code>import toPlainText from 'linna-util/toPlainText'</code></pre>

    <h3>Example</h3>

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

  </div>
</template>
