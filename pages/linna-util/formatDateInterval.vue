<script>
import formatDateInterval from 'linna-util/formatDateInterval'

const oldDate1 = new Date('2018-01-01 22:22:22')
const oldDate2 = new Date('2018-01-02 22:22:22')
const oldDate3 = new Date('2018-02-02 22:22:22')
const oldDate4 = new Date('2019-02-02 22:22:22')

export default {

  data () {
    return {
      oldDate1,
      oldDate2,
      oldDate3,
      oldDate4,

      renderedDateInterval1: formatDateInterval(oldDate1, oldDate2),
      renderedDateInterval2: formatDateInterval(oldDate2, oldDate3),
      renderedDateInterval3: formatDateInterval(oldDate3, oldDate4),
      renderedDateInterval4: formatDateInterval(oldDate1, oldDate4),
      renderedDateInterval5: formatDateInterval(oldDate4, oldDate1)
    }
  }

}

</script>

<template>
  <div>

    <h2><code>formatDateInterval(olderDate, newerDate)</code></h2>

    <pre><code>npm i date-fns</code></pre>

    <pre><code>import formatDateInterval from 'linna-util/formatDateInterval'</code></pre>

    <h3>Example</h3>

    <p>
    <pre><code>const oldDate1 = new Date('2018-01-01 22:22:22')
const oldDate2 = new Date('2018-01-02 22:22:22')
const oldDate3 = new Date('2018-02-02 22:22:22')
const oldDate4 = new Date('2019-02-02 22:22:22')</code></pre>
    </p>

    <table>

      <tr>
        <td><code>formatDateInterval(oldDate1, oldDate2)</code></td>
        <td>{{ renderedDateInterval1 }}</td>
      </tr>

      <tr>
        <td><code>formatDateInterval(oldDate2, oldDate3)</code></td>
        <td>{{ renderedDateInterval2 }}</td>
      </tr>

      <tr>
        <td><code>formatDateInterval(oldDate3, oldDate4)</code></td>
        <td>{{ renderedDateInterval3 }}</td>
      </tr>

      <tr>
        <td><code>formatDateInterval(oldDate1, oldDate4)</code></td>
        <td>{{ renderedDateInterval4 }}</td>
      </tr>

      <tr>
        <td><code>formatDateInterval(oldDate4, oldDate1)</code></td>
        <td>{{ renderedDateInterval5 }}</td>
      </tr>

    </table>

  </div>
</template>
