<template>
  <div class="photo-rating" title="Favorites">
      <i class="ui icon yellow star"></i>
      <span class="rating-number">{{fav_count}}</span>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Rating',
  computed: {
    ...mapState({
      fav_count: state => state.gallery.activePic.pic.fav_count
    })
  }
}
</script>

<style lang="sass" scoped>
  .photo-rating
    display: none
    margin-left: auto
    position: absolute
    right: 20px
    top: 110px
    color: white
    font-weight: bold

  .img-navigation:hover .photo-rating
    display: block

</style>
