<script setup>
import { tryPromises, wait } from 'linna-util'

const results = ref(null)

const tryOne = async () => {
  await wait(Math.random() * 1000)

  if (Math.random() > 0.5) {
    return true
  }

  throw new Error('Failed randomly')
}

const demo = async () => {
  results.value = null
  results.value = await tryPromises([
    tryOne(),
    tryOne(),
    tryOne()
  ])
}

onMounted(demo)
</script>

<template>
  <UtilPage
    name="tryPromises"
    :args="['promise1', 'promise2', '...']"
    :async="true"
  >
    <p>
      Wait for multiple promises in parallel, but always resolve even if some promises fail. Failed promises resolve
      with <code>undefined</code>. Wraps <code>Promise.all</code> but doesn't throw an error.
    </p>

    <h3>Example</h3>

    <pre><code>async function demo () {
  await wait(Math.random() * 1000)

  if (Math.random() &lt; 0.5) {
    return true
  }

  throw new Error('Failed randomly')
}

await tryPromises([
  demo(),
  demo(),
  demo()
])</code></pre>

    <p>
      <button @click="demo">
        Reload
      </button>
    </p>

    <pre v-if="results"><code>{{ results }}</code></pre>

    <p v-else>
      Waiting...
    </p>

  </UtilPage>
</template>
