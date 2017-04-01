<template>
  <div class="ui very padded segment container">
    <Item v-for="(i, k) in data" :key="k"
      :data="data"
      :i="k"
    />
  </div>
</template>

<script>
  import Item from './feedItem'
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'hello',
    components: {
      Item
    },
    created: function() {
      this.getFeedData()
    },
    computed: mapState({
      data: state => state.gallery.feedData
    }),
    methods: mapActions(['getFeedData']),
  }
</script>

<style scoped>

</style>
