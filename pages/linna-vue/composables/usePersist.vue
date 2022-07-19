<script setup>
const someValue = ref(1)

const { persistKey, persistData, clearPersistData } = usePersist(someValue)

const iterate = () => {
  someValue.value++
}
</script>

<template>
  <div>

    <h2>Dump</h2>

    <pre><code>import usePersist from 'linna-vue/composables/persist'</code></pre>

    <p>Automatically initialised on mount unless prevented with <code>loadManually</code>.</p>

    <p>
      <button @click="iterate">Iterate</button>
    </p>

    <p>
      <button @click="clearPersistData">Clear</button>
    </p>

    <Dump :data="{
      someValue,
      persistKey,
      persistData
    }" />

  </div>
</template>
