<script setup>
import { getGravatarImageUrl } from 'linna-util'

const email = ref('eiskis@gmail.com')
const size = ref(128)

const imageUrl = computed(getGravatarImageUrl(email.value, size.value))
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
