<script setup>
import { userPrefersDarkMode } from 'linna-util'
</script>

<template>
  <UtilPage name="userPrefersDarkMode">
    <p>
      <code>userPrefersDarkMode()</code>: {{ userPrefersDarkMode() }}
    </p>
  </UtilPage>
</template>
