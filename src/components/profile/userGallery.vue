<template lang="html">
  <div class='user-album'>
    <h2 v-if="self">Your gallery album</h2>
    <h2 v-else><span class="username">{{username}}</span>'s gallery album</h2>
    <br>
    <div v-if="data.length" class="gallery-album ui three cards">
      <Item v-for="(i, k) in data"
        :key="k"
        :src="i.filename"
        :title="i.title"
        :id="i.id"
        :fav="i.fav_count"
      />
    </div>
    <div v-else class="gallery-album not-logged">
      <h3 v-if="self">You don't have any albums yet.</h3>
      <h3 v-else>{{username}} doesn't have any albums yet.</h3>
    </div>
  </div>
</template>

<script>
  import Item from '@/components/gallery/item'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Album',
    components: {
      Item
    },
    props: ['username', 'userId'],
    created: function() {
      this.getData(this.userId)
    },
    computed: {
      ...mapState({
        data: state => state.gallery.data
      }),
      self() {
        return !this.$route.params.id
      }
    },
    methods: {
      ...mapActions (['getData']),
    },
    watch: {
      'userId': function() {
        this.getData()
      }
    }
  }
</script>

<style lang="sass">
  .user-profile .user-album .gallery-album img
    width: 265px
</style>

<style lang="sass" scoped>
  .user-album h2
    text-align: center
    span.username
      text-transform: capitalize

  .gallery-album.not-logged
    text-align: center

    button
      border-radius: 0px
</style>
