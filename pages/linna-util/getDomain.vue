<script>
import getDomain from 'linna-util/getDomain'

export default {

  data () {
    return {
      url: 'https://foo.bar.com:8080/video/sadkhehsdaksd?thisnadthat=123&foo=bar'
    }
  },

  methods: {
    getDomain
  }

}

</script>

<template>
  <div>

    <h2><code>getDomain(url)</code></h2>

    <pre><code>import getDomain from 'linna-util/getDomain'</code></pre>

    <table>
      <tbody>

        <tr>
          <td>
            <code>
              getDomain('{{ url }}')
            </code>
          </td>
          <td>{{ getDomain(url) }}</td>
        </tr>

        <tr>
          <td>
            <code>
              getDomain('http://www.foo.com')
            </code>
          </td>
          <td>{{ getDomain('http://www.foo.com') }}</td>
        </tr>

        <tr>
          <td>
            <code>
              getDomain('http://api.foo.com')
            </code>
          </td>
          <td>{{ getDomain('http://api.foo.com') }}</td>
        </tr>

        <tr>
          <td>
            <code>
              getDomain('www.foo.com/')
            </code>
          </td>
          <td>{{ getDomain('www.foo.com/') }}</td>
        </tr>

        <tr>
          <td>
            <code>
              getDomain('www.foo.com')
            </code>
          </td>
          <td>{{ getDomain('www.foo.com') }}</td>
        </tr>

        <tr>
          <td>
            <code>
              getDomain('api.foo.com')
            </code>
          </td>
          <td>{{ getDomain('api.foo.com') }}</td>
        </tr>

        <tr>
          <td>
            <code>
              getDomain('foo.com')
            </code>
          </td>
          <td>{{ getDomain('foo.com') }}</td>
        </tr>

        <tr>
          <td>
            <code>
              getDomain('foo')
            </code>
          </td>
          <td>{{ getDomain('foo') }}</td>
        </tr>

        <tr>
          <td>
            <code>
              getDomain('')
            </code>
          </td>
          <td>{{ getDomain('') }}</td>
        </tr>

        <tr>
          <td>
            <code>
              getDomain()
            </code>
          </td>
          <td>{{ getDomain() }}</td>
        </tr>

      </tbody>
    </table>

  </div>
</template>
