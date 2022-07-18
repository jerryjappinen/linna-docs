<script>
// import useIsMounted from 'linna-vue/composables/isMounted'
import usePersist from 'linna-vue/composables/persist'

export default {

  data () {
    // const { isMounted } = useIsMounted()
    // const { persistKey } = usePersist()

    return {
      data: {
      }
    }
  },

  computed: {

    data () {
      return {
        // el: !!this.$el,
        // root: !!this.$root,
        // rootType: typeof this.$root,
        // rootLength: this.$root.length,
        // slots: !!this.$slots,
        // 'slots.root': !!(this.$slots && this.$slots.root)
      }
    }

  }

}
</script>

<template>
  <div>

    <h2>Dump</h2>

    <Dump :data="data" />

  </div>
</template>
