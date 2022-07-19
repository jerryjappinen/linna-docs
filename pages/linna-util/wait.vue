<script>
import { wait } from 'linna-util'

const delay = 3000

export default {

  data () {
    return {
      pings: []
    }
  },

  mounted () {
    this.demo()
  },

  methods: {

    async demo () {
      for (let i = 0; i < 10; i++) {
        this.ping()
        await wait(delay)
      }
    },

    ping () {
      this.pings.push(Math.random())
    }

  }

}

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
