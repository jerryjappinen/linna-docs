<script setup>
const someValue = ref(1)

const { persistKey, persistData, clearPersistData } = usePersist(someValue)

const iterate = () => {
  someValue.value++
}
</script>

<template>
  <ComposablePage
    name="persist"
    args="persistingValue"
  >

    <p>
      Persist will store your data into localStorage when it changes. Upon initialisation, it will read it from storage and set it to the ref (or settable computed).
    </p>

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

    <p>
      Automatically initialised on mount unless prevented with <code>loadManually</code>.
    </p>

  </ComposablePage>
</template>
