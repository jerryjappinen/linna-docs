<script setup>
const viewport = useViewport()

const methods = {
  setBreakpoints: viewport.setBreakpoints
}
</script>

<template>
  <ComposablePage
    name="viewport"
    :props="{
      breakpoints: viewport.breakpoints,
      hasObtrusiveScrollbars: viewport.hasObtrusiveScrollbars,
      darkMode: viewport.darkMode,
      width: viewport.width,
      height: viewport.height,
      scroll: viewport.scroll,
      scrollX: viewport.scrollX,
      isScrollingDown: viewport.isScrollingDown,
      isScrollingUp: viewport.isScrollingUp,
      centerX: viewport.centerX,
      centerY: viewport.centerY,
      isScrolled: viewport.isScrolled,
      isScrolledX: viewport.isScrolledX,
      isLandscape: viewport.isLandscape,
      isPortrait: viewport.isPortrait,
      currentBreakpointRange: viewport.currentBreakpointRange,
      previousBreakpoint: viewport.previousBreakpoint,
      exactBreakpoint: viewport.exactBreakpoint,
      nextBreakpoint: viewport.nextBreakpoint
    }"
    :methods="methods"
  >
    <p>Automatically initialised on mount.</p>
  </ComposablePage>
</template>
