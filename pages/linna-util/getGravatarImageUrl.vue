<script setup>
import { getGravatarImageUrl } from 'linna-util'
import LinnaUtilPage from '../../components/LinnaUtilPage.vue';

const email = ref('eiskis@gmail.com')
const size = ref(128)

const imageUrl = computed(getGravatarImageUrl(email.value, size.value))
</script>

<template>
  <LinnaUtilPage
    getGravatarImageUrl=""
    :args="['email', 'size', 'fallbackImageUrl']"
    deps="md5"
  >
    <p>
      <input v-model=" email">

      <input v-model="size" type="number">
    </p>

    <pre><code>const imageUrl = getGravatarImageUrl(email, size)
// {{ imageUrl }}</code></pre>

    <p>
      <img :src="imageUrl">
    </p>
  </LinnaUtilPage>
</template>
