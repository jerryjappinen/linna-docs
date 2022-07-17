<script>
export default {

  data () {
    return {
      selected: null,
      options: [
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
    }
  },

  methods: {
    clear () {
      this.selected = null
    }
  }

}
</script>

<template>
  <div>

    <h2><code>Dropdown</code></h2>

    <h3>Example</h3>

    <Dump :data="options" />

    <p>
      Selected: <code>{{ selected }}</code> (<button @click="clear">clear</button>)
    </p>

    <p>
      <Dropdown placeholder="Select an option..." :options="options" v-model="selected" />
    </p>

  </div>
</template>
