<script>
import { formatDate } from 'linna-util'

export default {

  data () {
    return {
      renderedDate: formatDate(new Date())
    }
  }

}

</script>

<template>
  <div>

    <h2><code>formatDate(date)</code></h2>

    <pre><code>npm i date-fns</code></pre>

    <pre><code>import { formatDate } from 'linna-util'</code></pre>

    <h3>Example</h3>

    <table>
      <tr>
        <td><code>formatDate(new Date())</code></td>
        <td>{{ renderedDate }}</td>
      </tr>
    </table>

  </div>
</template>
