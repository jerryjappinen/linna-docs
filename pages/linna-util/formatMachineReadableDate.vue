<script>
import formatMachineReadableDate from 'linna-util/formatMachineReadableDate'

export default {

  data () {
    return {
      renderedDate: formatMachineReadableDate(new Date())
    }
  }

}

</script>

<template>
  <div>

    <h2><code>formatMachineReadableDate(date)</code></h2>

    <pre><code>npm i date-fns</code></pre>

    <pre><code>import formatMachineReadableDate from 'linna-util/formatMachineReadableDate'</code></pre>

    <h3>Example</h3>

    <table>
      <tr>
        <td><code>formatMachineReadableDate(new Date())</code></td>
        <td>{{ renderedDate }}</td>
      </tr>
    </table>

  </div>
</template>
