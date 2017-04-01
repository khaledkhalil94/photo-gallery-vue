<template lang="html">
  <div class='ui compact segment'>
    <div class="picture name-date">
      <router-link :to="'/user/'+data[i].uid">
        <img class="ui avatar image" :src="Pic" />
        <span class="username">{{data[i].username}}</span>
      </router-link>
      <div>
        <MakeDate :date="data[i].created" />
        <div class="photo-favorites" title="Favorites">
          <i class="ui icon yellow star"></i>
          <span class="rating-number">{{data[i].fav_count}}</span>
        </div>
      </div>
    </div>
    <div class="main-img">
      <router-link :to="'/gallery/'+data[i].pic_id">
        <img class="ui image" :src="'/static/img/'+data[i].filename">
      </router-link>
    </div>
  </div>
</template>

<script>
  import Pic from '@/assets/profilePicture.png'
  import MakeDate from '@/components/date'

  export default {
    components: {
      MakeDate
    },
    props: ['data', 'i'],
    data() {
      return {
        id: null,
        Pic
      }
    }
  }
</script>

<style lang="sass" scoped>
  .ui.segment
    margin: 30px auto

  img.ui.avatar.image
    border-radius: 0px

  .picture.name-date
    margin: 10px auto
    justify-content: space-between
    display: flex
    .photo-favorites
      text-align: right
      i
        margin-right: 0px
    .username
      font:
        size: 16px
        weight: bold

  .main-img img
    margin: 0 auto
    max-width: 900px
</style>
