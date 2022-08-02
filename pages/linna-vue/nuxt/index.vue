<template>
  <div>
    <h2>Nuxt 3</h2>

    <p>
      <code>linna-icons</code> and all the components and composables from <code>linna-vue</code> can be added to the auto-imports in your Nuxt app.
    </p>

    <p>
      The easiest way to do this is to use the <a href="./config/linna">nuxt.config helper</a> included in this library. This will add the included modules from each library to your <code>nuxt.config</code>.
    </p>

    <h3>Using Nuxt modules manually</h3>

    <p>
      You can easily auto import <code>linna-icons</code> as Vue components as well as all the components and composables from <code>linna-vue</code> in your Nuxt app. For this, there is a Nuxt module that you can use.
    </p>

    <pre><code>defineNuxtConfig({
  modules: {
    'linna-icons/nuxt'

    // These are the default options
    ['linna-vue/nuxt', {
      components: true,
      composables: true,
      prefix: '' // Currently only prefixes components, not composables
    }]
  }
})</code></pre>

  </div>
</template>
