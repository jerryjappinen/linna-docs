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

    <pre><code>import Dropdown from 'linna-vue/components/Dropdown'</code></pre>

    <h3>Example</h3>

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
