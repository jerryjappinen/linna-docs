<script setup>
import {
  sassPages,
  utilPages,
  componentPages,
  composablePages,
  nuxtConfigPages,
  storePages
} from '@/config'
</script>

<template>
  <div class="c-layout-default">

    <!-- Sidebar -->
    <div class="c-layout-default-sidebar">
      <div class="c-layout-default-sidebar-content">

        <h3>Linna</h3>

        <ul>
          <li>
            <NuxtLink to="/" class="c-layout-default-sidebar-link">
              Readme
            </NuxtLink>
          </li>

          <!-- Icons -->
          <li>
            <NuxtLink to="/linna-icons" class="c-layout-default-sidebar-link">
              Icons
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/linna-vue/nuxt/" class="c-layout-default-sidebar-link">
              Nuxt 3
            </NuxtLink>
          </li>
        </ul>

        <!-- Sass -->
        <h3 class="c-layout-default-sidebar-lib">
          <code>linna-sass</code>
        </h3>

        <ul>
          <li v-for="sassPage in sassPages" :key="sassPage">
            <NuxtLink :to="'/linna-sass/' + sassPage" class="c-layout-default-sidebar-link">
              <IconScssColor class="c-layout-default-sidebar-icon" />
              <code>{{ sassPage }}</code>
            </NuxtLink>
          </li>
        </ul>

        <!-- Utilities -->
        <h3 class="c-layout-default-sidebar-lib">
          <code>linna-util</code>
        </h3>

        <ul>
          <li v-for="utilPage in utilPages" :key="utilPage">
            <NuxtLink :to="'/linna-util/' + utilPage" class="c-layout-default-sidebar-link">
              <IconJavascriptColor class="c-layout-default-sidebar-icon" />
              <code>{{ utilPage }}</code>
            </NuxtLink>
          </li>
        </ul>

        <!-- Components -->
        <h3 class="c-layout-default-sidebar-lib">
          <code>linna-vue/components</code>
        </h3>

        <ul>
          <li v-for="componentPage in componentPages" :key="componentPage">
            <NuxtLink :to="'/linna-vue/components/' + componentPage" class="c-layout-default-sidebar-link">
              <IconVueColor class="c-layout-default-sidebar-icon" />
              <code>{{ componentPage }}</code>
            </NuxtLink>
          </li>
        </ul>

        <!-- Composables -->
        <h3 class="c-layout-default-sidebar-lib">
          <code>linna-vue/composables</code>
        </h3>

        <ul>
          <li v-for="composablePage in composablePages" :key="composablePage">
            <NuxtLink :to="'/linna-vue/composables/' + composablePage" class="c-layout-default-sidebar-link">
              <IconVue class="c-layout-default-sidebar-icon" />
              <code>{{ composablePage }}</code>
            </NuxtLink>
          </li>
        </ul>

        <!-- nuxt.config -->
        <h3 class="c-layout-default-sidebar-lib">
          <code>linna-vue/nuxt.config</code>
        </h3>

        <ul>
          <li v-for="nuxtConfigPage in nuxtConfigPages" :key="nuxtConfigPage">
            <NuxtLink :to="'/linna-vue/nuxt/config/' + nuxtConfigPage" class="c-layout-default-sidebar-link">
              <IconNuxtColor class="c-layout-default-sidebar-icon" />
              <code>{{ nuxtConfigPage }}</code>
            </NuxtLink>
          </li>
        </ul>

        <!-- Pinia stores -->
        <h3 class="c-layout-default-sidebar-lib">
          <code>linna-vue/stores</code>
        </h3>

        <ul>
          <li v-for="storePage in storePages" :key="storePage">
            <NuxtLink :to="'/linna-vue/stores/' + storePage" class="c-layout-default-sidebar-link">
              <IconPiniaColor class="c-layout-default-sidebar-icon" />
              <code>{{ storePage }}</code>
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
  max-width: 35%;
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

.c-layout-default-sidebar-lib,
.c-layout-default-sidebar-link {
  @include flex;
  @include flex-center;
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

  &:not(.router-link-active):not(:hover):not(:focus) {
    color: $dark-grey;
  }

}

.c-layout-default-sidebar-icon {
  @include flex-fixed;
  @include push-pad-tight-right;
  width: 0.75em;
  height: 0.75em;
}

</style>
