<script>
import formatSlug from 'linna-util/formatSlug'

export default {

  data () {
    const string = 'Foo bar foo bar'

    return {
      string,
      renderedSlug: formatSlug(string)
    }
  }

}

</script>

<template>
  <div>

    <h2><code>formatSlug(string)</code></h2>

    <pre><code>import formatSlug from 'linna-util/formatSlug'</code></pre>

    <h3>Example</h3>

    <table>
      <tr>
        <td>{{ string }}</td>
        <td>{{ renderedSlug }}</td>
      </tr>
    </table>

  </div>
</template>
