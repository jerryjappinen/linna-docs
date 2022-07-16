<script>
import getContentfulImageUrl from 'linna-util/getContentfulImageUrl'

export default {

  data () {
    const testUrl = '//images.ctfassets.net/abcd/'

    return {
      testUrl,
      testImageObject: {
        fields: {
          file: {
            url: testUrl
          }
        }
      }
    }
  },

  methods: {
    getContentfulImageUrl
  }

}

</script>

<template>
  <div>

    <h2><code>getContentfulImageUrl(url, options)</code></h2>

    <pre><code>npm i lodash</code></pre>

    <pre><code>import getContentfulImageUrl from 'linna-util/getContentfulImageUrl'</code></pre>

    <p>
      See <a
        href="https://www.contentful.com/developers/docs/references/images-api/#/reference/resizing-&-cropping/change-the-resizing-behavior">Contentful's
        documentation</a> for all the available options.
    </p>

    <h3>Passing a URL or Contentful image</h3>

    <table>

      <tr>
        <td><code>getContentfulImageUrl('{{ testUrl }}')</code></td>
        <td>{{ getContentfulImageUrl(testUrl) }}</td>
      </tr>

      <tr>
        <td><code>getContentfulImageUrl({ url: '{{ testUrl }}' })</code></td>
        <td>{{ getContentfulImageUrl({ url: testUrl }) }}</td>
      </tr>

      <tr>
        <td><code>getContentfulImageUrl({ image: contentfulImageField })</code></td>
        <td>{{ getContentfulImageUrl({ image: testImageObject }) }}</td>
      </tr>

    </table>

    <h3>Passing options</h3>

    <pre><code>getContentfulImageUrl(url, {
  width: 200,
  height: 200,
  fit: 'pad',
  focus: 'top_right'
})</code></pre>

    <p>
      {{
        getContentfulImageUrl(testUrl, {
          width: 200,
          height: 200,
          fit: 'pad',
          focus: 'top_right'
        })
      }}
    </p>

  </div>
</template>
