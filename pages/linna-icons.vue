<template>
  <div>

    <h2><code>linna-icons</code></h2>

    <Bodytext>

      <p>
        Generic icon set for Linna projects. Can be replaced with your custom icon set either fully or partly.
      </p>

      <p>
        See full icon set at <ExternalLink href="https://github.com/jerryjappinen/linna-icons">github.com/jerryjappinen/linna-icons</ExternalLink>.
      </p>

    </Bodytext>

    <h3>Using individual icons</h3>

    <pre><code>&lt;IconFigma /&gt; &lt;IconCheck /&gt;</code></pre>

    <!-- I want to use the Icon assets in some standardised way -->
    <p>
      <Icon>
        <IconFigma />
      </Icon>

      <Icon>
        <IconCheck />
      </Icon>

      <Icon>
        <IconCheck />
      </Icon>
    </p>

    <h3>Icons required by <code>linna-vue</code></h3>

    <p>
      <IconCheck /><IconChevronDown /><IconCross /><IconUndo />
    </p>

  </div>
</template>
