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

const configName = props.name
const configArgs = props.args ? (Array.isArray(props.args) ? props.args : [props.args]) : []
const configArgSamples = props.argSamples ? (Array.isArray(props.argSamples) ? props.argSamples : [props.argSamples]) : []
const configDeps = props.deps ? (Array.isArray(props.deps) ? props.deps : [props.deps]) : []
</script>

<template>
  <div>

    <h2><code>{{ configName }}({{ configArgs.join(', ') }})</code></h2>

    <pre v-if="configDeps.length"><code>npm i -D {{ configDeps.join(' ') }}</code></pre>

    <pre><code>import { merge, assets } from 'linna-vue/nuxt.config'</code></pre>

    <template v-if="configArgSamples.length">
      <Dump
        v-for="(sample, i) in configArgSamples"
        :key="i"
        :data="sample"
      />
    </template>

    <pre><code>defineNuxtConfig(merge({{ configName }}({{ configArgs.join(', ') }}), { ... }))</code></pre>

    <p>
      <ExternalLink :href="`https://github.com/jerryjappinen/linna-vue/blob/master/nuxt.config/${configName}.js`">
        <Icon>
          <IconGithub /> Source
        </Icon>
      </ExternalLink>
    </p>

    <slot />

  </div>
</template>
