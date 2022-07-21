<script setup>
import { wait } from 'linna-util'

const delay = 3000

const pings = ref([])

const ping = () => {
  pings.push(Math.random())
}

const async demo = () => {
  for (let i = 0; i < 10; i++) {
    ping()
    await wait(delay)
  }
}

onMounted(demo)
</script>

<template>
  <div>

    <h2><code>async wait(delay: 2000)</code></h2>

    <pre><code>import { wait } from 'linna-util'</code></pre>

    <p>
      Delay resolution of asynchronous code. This is mostly useful for debugging and testing.
    </p>

    <h3>Example</h3>

    <pre><code>const pings = []

function ping () {
  pings.push(Math.random())
}

function async demo () {
  for (let i = 0; i $lt; 10; i++) {
    ping()
    await wait(3000)
  }
}</code></pre>

    <p>{{ pings }}</p>

  </div>
</template>
