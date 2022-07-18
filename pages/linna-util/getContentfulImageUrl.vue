<script>
import getImageUrl from 'linna-util/contentful/getImageUrl'

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
    getImageUrl
  }

}

</script>

<template>
  <div>

    <h2><code>getImageUrl(url, options)</code></h2>

    <pre><code>npm i lodash</code></pre>

    <pre><code>import getImageUrl from 'linna-util/contentful/getImageUrl'</code></pre>

    <p>
      See <a
        href="https://www.contentful.com/developers/docs/references/images-api/#/reference/resizing-&-cropping/change-the-resizing-behavior">Contentful's
        documentation</a> for all the available options.
    </p>

    <h3>Passing a URL or Contentful image</h3>

    <table>

      <tr>
        <td><code>getImageUrl('{{ testUrl }}')</code></td>
        <td>{{ getImageUrl(testUrl) }}</td>
      </tr>

      <tr>
        <td><code>getImageUrl({ url: '{{ testUrl }}' })</code></td>
        <td>{{ getImageUrl({ url: testUrl }) }}</td>
      </tr>

      <tr>
        <td><code>getImageUrl({ image: contentfulImageField })</code></td>
        <td>{{ getImageUrl({ image: testImageObject }) }}</td>
      </tr>

    </table>

    <h3>Passing options</h3>

    <pre><code>getImageUrl(url, {
  width: 200,
  height: 200,
  fit: 'pad',
  focus: 'top_right'
})</code></pre>

    <p>
      {{
        getImageUrl(testUrl, {
          width: 200,
          height: 200,
          fit: 'pad',
          focus: 'top_right'
        })
      }}
    </p>

  </div>
</template>
