<template>
  <div>

    <h2>Shadow</h2>

    <div class="shadows">
      <div class="hairline-shadow">
        hairline-shadow
      </div>

      <div class="solid-shadow">
        solid-shadow
      </div>

      <div class="shadow-very-tight">
        shadow-very-tight
      </div>

      <div class="shadow-tight">
        shadow-tight
      </div>

      <div class="shadow">
        shadow
      </div>

      <div class="shadow-loose">
        shadow-loose
      </div>

      <div class="shadow-very-loose">
        shadow-very-loose
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

.shadows {
  div {
    @include align-center;
    @include mono;
    @include pad-loose;
    @include push-loose-vertical-even;

    border-radius: $radius $radius-very-loose $radius-very-loose $radius;
  }
}

.hairline-shadow {
  @include hairline-shadow;
}

.solid-shadow {
  @include solid-shadow;
}

.shadow-very-tight {
  @include shadow-very-tight;
}

.shadow-tight {
  @include shadow-tight;
}

.shadow {
  @include shadow;
}

.shadow-loose {
  @include shadow-loose;
}

.shadow-very-loose {
  @include shadow-very-loose;
}

</style>
