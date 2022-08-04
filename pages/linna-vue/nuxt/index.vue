<template>
  <div>
    <h2>Nuxt 3</h2>

    <h3>Config helpers</h3>

    <p>
      <ExternalLink href="https://nuxt.js">Nuxt config</ExternalLink> can be quite complex and require careful orchestration when creating a non-trivial app. Linna's Nuxt config helpers make it easy to add various features in <code>nuxt.config</code> without knowing the exact various config parameters that need to be added to enable said feature.
    </p>

    <p>
      For example, to enable SCSS in your Nuxt app, you can simply use the <NuxtLink href="/linna-vue/nuxt/config/scss">scss helper</NuxtLink>.
    </p>

    <pre><code>defineNuxtConfig(scss({
  global: 'stylehels/global.scss',
  shared: 'styles/shared.scss'
}))</code></pre>

    <p>
      This helper will enable the required modules and add the required options in Nuxt config. You don't have to know the exact format, the helper will take care of it. In most cases the required dependencies are also included in <code>linna-vue</code>.
    </p>

    <p>
      You will of course want to combine all these configs like this:
    </p>

    <pre><code>import { merge, dev, assets, scss, svg } from 'linna-vue/nuxt/config'

export default defineNuxtConfig(merge(
  assets({ /*...*/ }),
  scss({
    global: 'stylehels/global.scss',
    shared: 'styles/shared.scss'
  }),
  svg(),
  dev({
    typescript: {
      shim: false
    }
  })
))</code></pre>



    <h3>Auto imports</h3>

    <p>
      You can easily add the auto-imports to include <code>linna-icons</code> and all the components and composables from <code>linna-vue</code> in your Nuxt app.
    </p>

    <pre><code>defineNuxtConfig(linna())</code></pre>

    <p>
      Use the <a href="./config/linna">nuxt.config helper</a>. This will add the included modules from each library to your <code>nuxt.config</code>. This will include the Nuxt modules from each package and pass the options to each one.
    </p>

    <p>
      You can also include the modules manually.
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
