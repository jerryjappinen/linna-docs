<script>
import { getGravatarImageUrl } from 'linna-util'

export default {

  data () {
    return {
      email: 'eiskis@gmail.com',
      size: 128
    }
  },

  computed: {

    imageUrl () {
      return getGravatarImageUrl(this.email, this.size)
    }

  }

}

</script>

<template>
  <div>

    <h2><code>getGravatarImageUrl(email, size)</code></h2>

    <pre><code>npm i md5</code></pre>

    <pre><code>import { getGravatarImageUrl } from 'linna-util'</code></pre>

    <h3>Example</h3>

    <p>
      <input v-model=" email">

      <input v-model="size" type="number">
    </p>

    <pre><code>const imageUrl = getGravatarImageUrl(email, size)
// {{ imageUrl }}</code></pre>

    <p>
      <img :src="imageUrl">
    </p>

  </div>
</template>
