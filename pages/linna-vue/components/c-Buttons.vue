<template>
  <div>

    <h2><code>Buttons</code></h2>

    <buttons>
      <ClickButton>Foo</ClickButton>
      <ClickButton>Bar</ClickButton>
    </buttons>

    <buttons :center="true">
      <ClickButton>Foo</ClickButton>
      <ClickButton>Bar</ClickButton>
    </buttons>

    <buttons :fill="true">
      <ClickButton>Foo</ClickButton>
      <ClickButton>Bar</ClickButton>
    </buttons>

  </div>
</template>

<style lang="scss" scoped>

.c-click-button {
  background-color: rgba(0, 0, 0, 0.2);
}

</style>
