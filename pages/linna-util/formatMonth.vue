<script>
import formatMonth from 'linna-util/formatMonth'

export default {

  data () {
    return {
      renderedDate: formatMonth(new Date())
    }
  }

}

</script>

<template>
  <div>

    <h2><code>formatMonth(date)</code></h2>

    <pre><code>npm i date-fns</code></pre>

    <pre><code>import formatMonth from 'linna-util/formatMonth'</code></pre>

    <h3>Example</h3>

    <table>
      <tr>
        <td><code>formatMonth(new Date())</code></td>
        <td>{{ renderedDate }}</td>
      </tr>
    </table>

  </div>
</template>
