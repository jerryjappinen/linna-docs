<template>
  <div>

    <h2>Breakpoints</h2>

    <div class="demo">
      <div class="breakpoint-tiny" />
      <div class="breakpoint-small" />
      <div class="breakpoint-medium" />
      <div class="breakpoint-large" />
      <div class="breakpoint-very-large" />
      <div class="breakpoint-full" />
      <div class="breakpoint-phone-tight" />
      <div class="breakpoint-phone" />
      <div class="breakpoint-tablet" />
      <div class="breakpoint-laptop" />
      <div class="breakpoint-monitor" />
    </div>

    <h4>Defaults</h4>

    <HighlightedCode lang="scss">$breakpoint-tiny: $iphone-6-plus-width;
$breakpoint-small: 800px;
$breakpoint-medium: 960px;
$breakpoint-large: 1280px;
$breakpoint-very-large: 1440px;
$breakpoint-full: 1920px;

$breakpoint-phone-tight: $breakpoint-tiny;
$breakpoint-phone: $breakpoint-small;
$breakpoint-tablet: $breakpoint-large;
$breakpoint-laptop: $breakpoint-very-large;
$breakpoint-monitor: $breakpoint-full;</HighlightedCode>

  </div>
</template>

<style lang="scss" scoped>

.breakpoint-tiny {
  width: $breakpoint-tiny;
}
.breakpoint-small {
  width: $breakpoint-small;
}
.breakpoint-medium {
  width: $breakpoint-medium;
}
.breakpoint-large {
  width: $breakpoint-large;
}
.breakpoint-very-large {
  width: $breakpoint-very-large;
}
.breakpoint-full {
  width: $breakpoint-full;
}
.breakpoint-phone-tight {
  width: $breakpoint-phone-tight;
}
.breakpoint-phone {
  width: $breakpoint-phone;
}
.breakpoint-tablet {
  width: $breakpoint-tablet;
}
.breakpoint-laptop {
  width: $breakpoint-laptop;
}
.breakpoint-monitor {
  width: $breakpoint-monitor;
}

</style>
