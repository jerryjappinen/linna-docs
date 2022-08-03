<template>
  <div>

    <Bodytext>

      <h2>Webfonts</h2>

      <h4>Google Fonts</h4>

      <p>
        The easiest way to implement Google Fonts is using the <code>nuxt.config</code> helper <NuxtLink to="/linna-vue/nuxt/config/googleFonts">googleFonts()</NuxtLink>.
      </p>

      <p>
        Or add the `import` code in your global style sheets:
      </p>

      <pre><code>@import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');</code></pre>

      <h4>Custom web fonts</h4>

      <p>
        If you're using the <code>linna-sass</code> default CSS, any web fonts added to the <code>$webfonts</code> variable will be loaded.
      </p>

      <pre><code>$webfonts: (
    (
      font-family: 'Source Sans Pro',
      font-weight: 400,
      font-style: normal,
      path: 'source-sans/sourcesanspro-regular-webfont',
    ),
    (
      font-family: 'Source Sans Pro',
      font-weight: 400,
      font-style: italic,
      path: 'source-sans/sourcesanspro-italic-webfont',
    ),
    (
      font-family: 'Source Sans Pro',
      font-weight: 700,
      font-style: normal,
      path: 'source-sans/sourcesanspro-bold-webfont',
    ),
    (
      font-family: 'Source Sans Pro',
      font-weight: 700,
      font-style: italic,
      path: 'source-sans/sourcesanspro-bolditalic-webfont',
    ),
  );
  </code></pre>

      <p>
        Loading will be done using the <code>font-face</code> mixin, which you can also use manually:
      </p>

      <pre><code>@include font-face(
    $font-family,
    $font-weight,
    $font-style,
    $filepath,
    $woffdata: null,
    $woff2data: null
  )</code></pre>

  </Bodytext>

  </div>
</template>
