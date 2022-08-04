<script setup>
import { ref, computed } from 'vue'

import hljs from 'highlight.js'

const props = defineProps({
  lang: {
    type: String,
    default: null
  }
})



const nativeContent = ref(null)

const html = computed(() => {
  const el = nativeContent.value

  if (el) {
    return hljs.highlightBlock(el, {
      language: props.lang
    }).value
  }

  return null
})
</script>

<template>
  <pre class="c-highlighted-code"><code
    :data-language="lang"
    class="c-highlighted-code-content"
  ><span
    v-if="html"
    v-html="html"
  /><span
    v-else
    ref="nativeContent"
  ><slot /></span></code></pre>
</template>
