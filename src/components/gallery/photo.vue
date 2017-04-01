<template lang="html">
  <div class='ui segment padded container'>
    <div class="modal">
    </div>
    <div class="picture username date">
      <div class="photo-username">
        <router-link :to="'/user/'+userId">
          <img class="ui avatar image" :src="Pic" />
            <span class="username">
              {{username}}
            </span>
        </router-link>
      </div>
      <MakeDate :date="created" />
    </div>
    <div class="img-navigation">
      <Navigation :params="getParam()" />
      <Rating />
      <img class="ui main image" :src="'/static/img/'+filename">
      <Navigation :params="getParam()" right />
      <div class="album-thumbs">
        <Thumbs :uid="userId" />
      </div>
    </div>
    <div class="photo-details">
      <div class="photo-title photo-description">
        <h2>{{title}}</h2>
        <h3>{{description}}</h3>
      </div>
      <div class="photo-actions">
        <i class="ui icon expand bordered link" title="Fullscreen" @click="showModal()"></i>
        <FavPic v-if="loggedId" :params="getParam()" />
        <DeleteImg v-if="self" :params="getParam()" />
        <a :href="'static/img/'+filename" download>
          <i class="ui icon download link green bordered" title="Download picture"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import {
    Thumbs,
    Navigation,
    DeleteImg,
    Rating,
    FavPic
  } from './common'
  import MakeDate from '@/components/date'
  import Pic from '@/assets/profilePicture.png'

  export default {
    components: {
      MakeDate,
      Thumbs,
      Navigation,
      DeleteImg,
      Rating,
      FavPic
    },
    data() {
      return {
        Pic
      }
    },
    created: function() {
      this.getPicture(this.getParam())
    },
    methods: {
      ...mapActions(['getPicture', 'deletePicture', 'navigatePic']),
      delPicture: function() {
        this.deletePicture(this.getParam())
      },
      getParam: function() {
        return Number(this.$route.params.photo)
      },
      navigate(next) {
        this.navigatePic({param: this.getParam(), next})
      },
      showModal() {
        this.$store.commit('setModal', true)
      }
    },
    computed: {
      ...mapState({
        loggedId:    state => state.user.id,
        created:     state => state.gallery.activePic.pic.created,
        title:       state => state.gallery.activePic.pic.title,
        description: state => state.gallery.activePic.pic.description,
        filename:    state => state.gallery.activePic.pic.filename,
        userId:      state => state.gallery.activePic.user.id,
        username:    state => state.gallery.activePic.user.username
      }),
      self() {
        return this.loggedId === this.userId
      }
    },
    watch: {
      '$route' () {
        this.getPicture(this.getParam())
      }
    }
  }
</script>

<style lang="sass" scoped>
  .photo-details
    display: flex

  .picture.username.date
    display: flex
    justify-content: space-between
    margin-bottom: 10px

    span.username
      vertical-align: text-bottom
      font:
        size: 19px
        weight: bold

    .relative-date
      align-self: flex-end

  .ui.main.image
    margin: 0 auto

  .album-thumbs
    align-self: flex-end
    position: absolute
    margin-top: 31px

  i.ui.icon
    &.remove
      margin-left: auto
    &.chevron
      color: #9ba3e0

  .photo-details
    margin-top: 20px

  .photo-actions
    margin-left: auto
    display: flex

  .img-navigation
    margin: 0 -22px
    padding-bottom: 35px
    background-color: black
    display: flex
    align-items: center
    justify-content: center

    img
      max-width: 900px
</style>
