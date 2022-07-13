<script>
import formatInitials from 'linna-util/formatInitials'

export default {

  data () {
    return {
      text: 'Some Name Goes Here'
    }
  },

  computed: {

    initials () {
      return formatInitials(this.text)
    }

  }

}
</script>

<template>
  <div>

    <h2>
      <code>formatInitials</code>
    </h2>

    <p>
      <label>
        Edit this text:
        <input type="text" v-model="text" />
      </label>
    </p>

    <p>
      Corresponding initials: <code>{{ initials }}</code>
    </p>

  </div>
</template>
