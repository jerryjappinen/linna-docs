<script setup>
const themes = [
  'primary',
  'secondary',
  'tertiary',
  'transparent',
  'link'
]

defineProps({
  theme: {
    type: String,
    default: styles[0],
    validator (theme) {
      return themes.indexOf(theme) > -1
    }
  }
})
</script>

<template>
  <ClickButton
    class="c-styled-button"
    :class="'c-styled-button-' + theme"
    :theme="theme"
  />
</template>

<style lang="scss">

.c-styled-button-primary,
.c-styled-button-secondary,
.c-styled-button-tertiary,
.c-styled-button-transparent {
  @include pad-tight;
  @include radius;
}

.c-styled-button-primary,
.c-styled-button-secondary,
.c-styled-button-tertiary {
  border-width: 1px;
}

.c-styled-button-link-primary-enabled {
  color: $white;
  background-color: $very-dark;
  border-color: $very-dark;
}

.c-styled-button-link-primary-disabled {
  border-color: $dark-grey;
  background-color: $dark-grey;
}

.c-styled-button-link-secondary {
  border-color: currentColor;
}

.c-styled-button-link-tertiary {
  border-color: currentColor;
}

.c-styled-button-link-enabled {
  @include link;
}

</style>
