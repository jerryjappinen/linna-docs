<script>
import { sassPages, utilPages, componentPages } from '@/config'

export default {
  data () {
    return {
      sassPages,
      utilPages,
      componentPages
    }
  }
}
</script>

<template>
  <div class="c-layout-default">
    <div class="c-layout-default-menu">

      <NuxtLink to="/" class="c-layout-default-menu-link">
        Linna readme
      </NuxtLink>

      <h3 class="c-layout-default-menu-lib">
        <code>linna-sass</code>
      </h3>

      <ul>
        <li v-for="sassPage in sassPages" :key="sassPage">
          <NuxtLink :to="'/linna-sass/' + sassPage" class="c-layout-default-menu-link">
            {{ sassPage }}
          </NuxtLink>
        </li>
      </ul>

      <h3 class="c-layout-default-menu-lib">
        <code>linna-util</code>
      </h3>

      <ul>
        <li v-for="utilPage in utilPages" :key="utilPage">
          <NuxtLink :to="'/linna-util/' + utilPage" class="c-layout-default-menu-link">
            {{ utilPage }}
          </NuxtLink>
        </li>
      </ul>

      <h3 class="c-layout-default-menu-lib">
        <code>linna-vue</code>
      </h3>

      <ul>
        <li v-for="componentPage in componentPages" :key="componentPage">
          <NuxtLink :to="'/linna-vue/c-' + componentPage" class="c-layout-default-menu-link">
            {{ componentPage }}
          </NuxtLink>
        </li>
      </ul>

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

.c-layout-default-menu-lib {
  @include discreet;
  @include no-push-bottom;

  +ul {
    @include no-push-top;
  }

}

.c-layout-default-menu-link {
  @include mono;

  &.router-link-active {
    @include bold;
  }
}

.c-layout-default-content {
  @include flex-fluid;
  @include buffer-relative;
}

</style>
