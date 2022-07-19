<script>
import { getNameFromEmail } from 'linna-util'

export default {

  data () {
    return {
      testStrings: [
        '',
        '.com',
        '@',
        'foo',
        'foo@',
        'foo.bar@',
        'foo.bar@something',
        'foo.bar@something.',
        'foo.bar@something.com'
      ]
    }
  },

  computed: {

    names () {
      const names = {}

      this.testStrings.forEach((testString) => {
        names[testString] = getNameFromEmail(testString)
      })

      return names
    }

  }

}

</script>

<template>
  <div>

    <h2><code>getNameFromEmail(email)</code></h2>

    <pre><code>import { getNameFromEmail } from 'linna-util'</code></pre>

    <h3>Example</h3>

    <table>
      <tbody>
        <tr
          v-for="(name, email) in names"
          :key="email"
        >
          <td><code>getNameFromEmail({{ email }})</code></td>
          <td>{{ typeof name }}</td>
          <td>{{ name }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
