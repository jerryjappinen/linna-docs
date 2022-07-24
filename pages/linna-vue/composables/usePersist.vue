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

    <pre><code>import usePersist from 'linna-vue/composables/usePersist'</code></pre>

    <pre><code>const persistData = ref({ ... })
const persist = usePersist(persistData)</code></pre>

    <p>Automatically initialised on mount unless prevented with <code>loadManually</code>. Persist will store your data into localStorage when it changes. Upon initialisation, it will read it from storage and set it to the ref (or settable computed).</p>

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
