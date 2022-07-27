<template>
  <Textfield class="c-styled-textfield" />
</template>

<style lang="scss">

.c-styled-textfield {
  @include radius;
  border-width: 1px;

  .c-textfield-input {
    @include pad-tight;
  }
}

</style>
