<script setup>
const sampleOptions = {
}
</script>

<template>
  <NuxtConfigPage
    name="markdown"
    args="markdownItOptions"
    :args-sample="sampleOptions"
    deps="vite-plugin-markdown"
  >
    <p>
      Add support for Markdown imports. See <ExternalLink href="markdownIthttps://www.google.com/search?q=markdownIt">markdownIt docs</ExternalLink> for supported options.
    </p>
  </NuxtConfigPage>
</template>
