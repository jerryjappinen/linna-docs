<script setup>
const sampleOptions = {
  siteAuthor: 'Author Name',
  siteTitle: 'My App',
  longSiteTitle: 'My App – Super nice app for you',
  siteDescription: 'Longer description that can complement the title somehow',
  siteMainColor: '#abc',
  facebookAppId: 'abc-123',
  twitterUsername: 'TwitterHandle'
}
</script>

<template>
  <NuxtConfigPage
    name="meta"
    args="options"
    :args-sample="sampleOptions"
  >
    <p>
      Define the site-wide meta data for your Nuxt site.
    </p>
  </NuxtConfigPage>
</template>
