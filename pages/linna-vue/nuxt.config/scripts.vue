<script setup>
const scriptTags = [
  'https://script.domain.com/script.js',
  {
    src: 'https://foo.com/script.js',
    async: false,
    defer: true
  }
]
</script>

<template>
  <NuxtConfigPage
    name="scripts"
    args="scriptTags"
    :args-sample="scriptTags"
    deps="lodash-es"
  >
    <p>
      Add script tags to the site that link to external assets. Will be async by default, but you can override this by passing an object with the desired attributes.
    </p>

    <p>
      <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script">Read more about script tags</ExternalLink>
    </p>
  </NuxtConfigPage>
</template>
