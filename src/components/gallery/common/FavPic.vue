<template lang="html">
  <div class="fav-photo" @click="fav">
    <i class="ui icon star link bordered" :class="faved ? 'yellow' : ''"></i>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'FavPic',
    props: ['params'],
    methods: {
      ...mapActions(['favPic']),
      fav: function() {
        this.favPic(this.params)
      },
    },
    computed: {
      ...mapState({
        faved: state => state.gallery.activePic.pic.isFaved
      })
    }
  }
</script>

<style lang="css">
</style>
