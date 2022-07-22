<script setup>
const selected = ref(null)

const options = [
  {
    label: 'Foo Bar',
    value: 'foobar'
  },
  {
    label: 'Group',
    value: [
      {
        label: 'Foo',
        value: 'foo'
      },
      {
        label: 'bar',
        value: 'bar'
      }
    ]
  }
]

const clear = () => {
  selected.value = null
}
</script>

<template>
  <div>

    <p>
      Selected: <code>{{ selected }}</code> (<button @click="clear">clear</button>)
    </p>

    <p>
      <Dropdown
        placeholder="Select one of the options available..."
        :options="options"
        v-model="selected"
      />
    </p>

    <Dump :data="options" />

  </div>
</template>
