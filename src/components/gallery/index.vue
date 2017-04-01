<template lang="html">
  <div class='ui segment very padded container'>
    <h2>Your gallery album</h2>
    <br>
    <div v-if="data.length > 0" class="gallery-album ui three cards">
      <Item v-for="(i, k) in data"
        :key="k"
        :src="i.filename"
        :title="i.title"
        :id="i.id"
        :fav="i.fav_count"
      />
    </div>
    <div v-else class="gallery-album not-logged">
      <h3>You don't have any content yet.</h3>
      <router-link to="/gallery/upload">
        <button type="button" class="ui violet button">Upload now!</button>
      </router-link>
    </div>
    <Pagination v-if="data.length" />
  </div>
</template>

<script>
  import Item from './item'
  import Pagination from './pagination'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'gallery',
    components: {
      Item, Pagination
    },
    data() {
      return {
        src: 'srcc',
        title: 'titlee',
        desc: 'descc'
      }
    },
    created: function() {
      this.getData()
    },
    computed: mapState({
      userId: state => state.user.id,
      data: state => state.gallery.data
    }),
    methods: {
      ...mapActions (['getData']),
    },
    watch: {
      'userId': function(x) {
        this.getData()
      }
    }
  }
</script>

<style lang="sass">
  .gallery-album.not-logged
    text-align: center

    button
      border-radius: 0px
</style>
