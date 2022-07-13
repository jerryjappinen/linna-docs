<script>
export default {
  data () {
    return {
      sassPages: [
        'body'
      ],
      utilPages: [
        'formatInitials'
      ],
      componentPages: [
        'AppStoreBadge',
        'ExternalLink'
      ]
    }
  }
}
</script>

<template>
  <div class="c-main-menu">

    <NuxtLink
      to="/"
      class="c-main-menu-link"
    >
      Linna readme
    </NuxtLink>


    <h3 class="c-main-menu-lib">
      <code>linna-sass</code>
    </h3>

    <ul>
      <li
        v-for="sassPage in sassPages"
        :key="sassPage"
      >
        <NuxtLink
          :to="'/linna-sass/' + sassPage"
          class="c-main-menu-link"
        >
          {{ sassPage }}
        </NuxtLink>
      </li>
    </ul>

    <h3 class="c-main-menu-lib">
      <code>linna-util</code>
    </h3>

    <ul>
      <li
        v-for="utilPage in utilPages"
        :key="utilPage"
      >
        <NuxtLink
          :to="'/linna-util/' + utilPage"
          class="c-main-menu-link"
        >
          {{ utilPage }}
        </NuxtLink>
      </li>
    </ul>

    <h3 class="c-main-menu-lib">
      <code>linna-vue</code>
    </h3>

    <ul>
      <li
        v-for="componentPage in componentPages"
        :key="componentPage"
      >
        <NuxtLink
          :to="'/linna-vue/c-' + componentPage"
          class="c-main-menu-link"
        >
          {{ componentPage }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">

.c-main-menu-lib {
  @include discreet;
  @include no-push-bottom;

  + ul {
    @include no-push-top;
  }

}

.c-main-menu-link {
  @include mono;

  &.router-link-active {
    @include bold;
  }
}

</style>
