<script>
import { ref, computed, getCurrentInstance } from 'vue'

// import usePersist from 'linna-vue/composables/persist'

// const testVar1 = ref(1)
// const testVar2 = ref('Foo')

// const persistData = computed(() => {
//   return {
//     testVar1,
//     testVar2
//   }
// })

// const persist = usePersist(persistData)

// const values = computed(() => {
//   return {
//     persistLoaded: persist.persistLoaded,
//     loadPersistOnCreate: persist.loadPersistOnCreate,
//     componentName: persist.componentName,
//     componentId: persist.componentId,
//     defaultPersistKey: persist.defaultPersistKey,
//     defaultInstancePersistKey: persist.defaultInstancePersistKey,
//     persistKey: persist.persistKey
//   }
// })

const i = getCurrentInstance()
</script>

<template>
  <div>

    <h2><code>persist</code></h2>

    <pre><code>import usePersist from 'linna-vue/composables/persist'</code></pre>

    <pre><code>data () {
  return {
    persist: usePersist()
  }
}</code></pre>

    <h3>Example</h3>

    <p>Automatically initialised on mount.</p>

    <table>
      <!-- <tr v-for="(name) in methods" :key="name">
        <th><code>persist.{{ name }}()</code></th>
        <td>
          <button @click="persist[name]">Run</button>
        </td>
      </tr> -->

      <!-- <tr v-for="(value, name) in values" :key="name">
        <th><code>persist.{{ name }}</code></th>
        <td><code>{{ value }}</code></td>
      </tr> -->
    </table>

  </div>
</template>
