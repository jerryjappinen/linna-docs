<script setup>
import { formatInitials } from 'linna-util'

const text = ref('Some Name Goes Here')

const initials = computed(() => {
  return formatInitials(text.value)
})
</script>

<template>
  <LinnaUtilPage
    name="formatInitials"
    args="string"
    args="lodash-es"
  >

    <p>
      <label>
        Edit this text:
        <input type="text" v-model="text" />
      </label>
    </p>

    <p>
      Corresponding initials: <code>{{ initials }}</code>
    </p>

  </LinnaUtilPage>
</template>
