<script>
import { formatMachineReadableDateTime } from 'linna-util'

export default {

  data () {
    return {
      renderedDate: formatMachineReadableDateTime(new Date())
    }
  }

}

</script>

<template>
  <div>

    <h2><code>formatMachineReadableDateTime(date)</code></h2>

    <pre><code>npm i date-fns</code></pre>

    <pre><code>import { formatMachineReadableDateTime } from 'linna-util'</code></pre>

    <h3>Example</h3>

    <table>
      <tr>
        <td><code>formatMachineReadableDateTime(new Date())</code></td>
        <td>{{ renderedDate }}</td>
      </tr>
    </table>

  </div>
</template>
