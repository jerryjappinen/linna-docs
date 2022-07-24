<script setup>
import { userPrefersDarkMode } from 'linna-util'
</script>

<template>
  <LinnaUtilPage name="userPrefersDarkMode">
    <p>
      <code>userPrefersDarkMode()</code>: {{ userPrefersDarkMode() }}
    </p>
  </LinnaUtilPage>
</template>
