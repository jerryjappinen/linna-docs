<script>
import tryPromises from 'linna-util/tryPromises'
import wait from 'linna-util/wait'

export default {

  data () {
    return {
      codeSample,
      results: null
    }
  },

  mounted () {
    this.demo()
  },

  methods: {

    async demo () {
      this.results = null
      this.results = await tryPromises([
        this.tryOne(),
        this.tryOne(),
        this.tryOne()
      ])
    },

    async tryOne () {
      await wait(Math.random() * 1000)

      if (Math.random() > 0.5) {
        return true
      }

      throw new Error('Failed randomly')
    }

  }

}

</script>

<template>
  <div>

    <h2><code>async tryPromises(promise1, promise2, ...)</code></h2>

    <pre><code>import tryPromises from 'linna-util/tryPromises'</code></pre>

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

  </div>
</template>
