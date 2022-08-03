<script setup>
// import markdown from 'linna-vue/nuxt/config/markdown'

const sampleOptions = {}
</script>

<template>
  <NuxtConfigPage
    name="markdown"
    args="markdownItOptions"
    :args-sample="sampleOptions"
    :deps="['markdown-it']"
  >
    <p>
      <strong>Support for Markdown imports.</strong> See <ExternalLink href="https://github.com/markdown-it/markdown-it#init-with-presets-and-options">markdown-it docs</ExternalLink> for supported options.
    </p>

    <p>
      Note that you can add markdown-it plugins. You need to install them as dev dependencies. Add <code>plugins: []</code> to the options and they will be loaded.
    </p>

    <!-- <Dump :data="markdown(sampleOptions)" /> -->

  </NuxtConfigPage>
</template>
