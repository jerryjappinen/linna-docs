<script>
import { sassPages, utilPages, componentPages, composablePages } from '@/config'

export default {
  data () {
    return {
      sassPages,
      utilPages,
      componentPages,
      composablePages
    }
  }
}
</script>

<template>
  <div class="c-layout-default">

    <!-- Sidebar -->
    <div class="c-layout-default-sidebar">
      <div class="c-layout-default-sidebar-content">

        <NuxtLink to="/" class="c-layout-default-sidebar-link">
          Linna readme
        </NuxtLink>

        <h3 class="c-layout-default-sidebar-lib">
          <code>linna-sass/</code>
        </h3>

        <ul>
          <li v-for="sassPage in sassPages" :key="sassPage">
            <NuxtLink :to="'/linna-sass/' + sassPage" class="c-layout-default-sidebar-link">
              <code>{{ sassPage }}</code>
            </NuxtLink>
          </li>
        </ul>

        <h3 class="c-layout-default-sidebar-lib">
          <code>linna-util/</code>
        </h3>

        <ul>
          <li v-for="utilPage in utilPages" :key="utilPage">
            <NuxtLink :to="'/linna-util/' + utilPage" class="c-layout-default-sidebar-link">
              <code>{{ utilPage }}</code>
            </NuxtLink>
          </li>
        </ul>

        <h3 class="c-layout-default-sidebar-lib">
          <code>linna-vue/composables/</code>
        </h3>

        <ul>
          <li v-for="composablePage in composablePages" :key="composablePage">
            <NuxtLink :to="'/linna-vue/composables/' + composablePage" class="c-layout-default-sidebar-link">
              <code>{{ composablePage }}</code>
            </NuxtLink>
          </li>
        </ul>

        <h3 class="c-layout-default-sidebar-lib">
          <code>linna-vue/components/</code>
        </h3>

        <ul>
          <li v-for="componentPage in componentPages" :key="componentPage">
            <NuxtLink :to="'/linna-vue/components/c-' + componentPage" class="c-layout-default-sidebar-link">
              <code>{{ componentPage }}</code>
            </NuxtLink>
          </li>
        </ul>

      </div>
    </div>

    <!-- Content area -->
    <div class="c-layout-default-main">
      <div class="c-layout-default-main-content">
        <slot class="c-layout-default-page" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.c-layout-default {
  @include flex;
  height: 100vh;
}

.c-layout-default-sidebar,
.c-layout-default-main {
  @include scroll-vertical;
  height: 100%;
}

.c-layout-default-sidebar {
  @include flex-fixed;
  border-right-width: 1px;
  width: 18em;
}

.c-layout-default-main {
  @include flex-fluid;
}

.c-layout-default-main-content {
  @include buffer-relative;
}



// Menu

.c-layout-default-sidebar-content {
  @include buffer;
  font-size: 0.9em;
}

.c-layout-default-sidebar-lib {
  @include discreet;
  @include no-push-bottom;
  font-size: 1em;

  + ul {
    @include no-push-top;
  }

}

.c-layout-default-sidebar-link {
  &.router-link-active {
    @include bold;
  }
}

</style>
