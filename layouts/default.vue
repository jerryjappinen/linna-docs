<template>
  <div class="c-layout-default">
    <div class="c-layout-default-menu">
      <MainMenu />
    </div>

    <div class="c-layout-default-content">
      <slot class="c-layout-default-page" />
    </div>
  </div>
</template>

<style lang="scss">

.c-layout-default {
  @include flex;
}

.c-layout-default-menu {
  @include flex-fixed;
  @include buffer;
  border-right-width: 1px;
  width: 16em;
}

.c-layout-default-content {
  @include flex-fluid;
  @include buffer-relative;
}

</style>
