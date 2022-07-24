<script setup>
const {
  breakpoints,
  hasObtrusiveScrollbars,
  darkMode,
  width,
  height,
  scroll,
  scrollX,
  isScrollingDown,
  isScrollingUp,
  centerX,
  centerY,
  isScrolled,
  isScrolledX,
  isLandscape,
  isPortrait,
  currentBreakpointRange,
  previousBreakpoint,
  exactBreakpoint,
  nextBreakpoint,

  setBreakpoints
} = useViewport()

const methods = {
  setBreakpoints
}

</script>

<template>
  <ComposablePage
    name="viewport"
    :props="{
      breakpoints,
      hasObtrusiveScrollbars,
      darkMode,
      width,
      height,
      scroll,
      scrollX,
      isScrollingDown,
      isScrollingUp,
      centerX,
      centerY,
      isScrolled,
      isScrolledX,
      isLandscape,
      isPortrait,
      currentBreakpointRange,
      previousBreakpoint,
      exactBreakpoint,
      nextBreakpoint
    }"
    :methods="methods"
  >
    <p>Automatically initialised on mount.</p>
  </ComposablePage>
</template>
