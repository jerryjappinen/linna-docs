<script setup>
const props = defineProps = ({

  name: {
    type: String,
    required: true
  },

  args: {
    type: [Array, String, Object],
    default: null
  },

  argSamples: {
    type: [Array, String, Object],
    default: null
  },

  deps: {
    type: [Array, String],
    default: null
  }

})

const utilArgs = props.args ? (Array.isArray(props.args) ? props.args : [props.args]) : []
const utilArgSamples = props.argSamples ? (Array.isArray(props.argSamples) ? props.argSamples : [props.argSamples]) : []
const utilDeps = props.deps ? (Array.isArray(props.deps) ? props.deps : [props.deps]) : []
</script>

<template>
  <div>

    <h2><code>{{ props.name }}({{ utilArgs.join(', ') }})</code></h2>

    <pre v-if="utilDeps.length"><code>npm i {{ utilDeps.join(' ') }}</code></pre>

    <pre><code>import { merge, assets } from 'linna-vue/nuxt.config'</code></pre>

    <template v-if="utilArgSamples.length">
      <Dump
        v-for="(sample, i) in utilArgSamples"
        :key="i"
        :data="sample"
      />
    </template>

    <pre><code>defineNuxtConfig(merge({{ props.name }}({{ utilArgs.join(', ') }}), { ... }))</code></pre>

    <slot />

  </div>
</template>
