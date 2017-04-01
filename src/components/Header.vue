<template>
  <div class="ui menu">
    <router-link class="item" to="/" exact>Homepage</router-link>
    <router-link class="item" v-if="logged" to="/gallery" exact>Gallery</router-link>
    <router-link class="item" v-if="logged" to="/gallery/upload">Upload</router-link>

    <div class="right menu">
      <router-link class="item" v-if="logged" to="/profile">{{username}}</router-link>
      <a class="item" v-if="logged" @click="logout">Logout</a>
      <router-link class="item" v-if="!logged" to="/login">Login</router-link>
      <router-link class="item" v-if="!logged" to="/signup">sign up</router-link>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    computed: mapState({
      logged: state => state.user.logged,
      username: state => state.user.username
    }),
    methods: {
      ...mapActions(['setLogout']),
      logout() {
        this.setLogout()
      }
    }
  }
</script>

<style lang="sass">
  .ui.menu
    margin: 0
    border-radius: 0px

  .ui.menu .item.router-link-active
    background: rgba(0,0,0,.05)
    color: rgba(0,0,0,.95)
    font-weight: 400
    box-shadow: none
    &:hover
      @extend .item.router-link-active

  .ui.segment.container
    margin-top: 0px
    padding-top: 50px
    min-height: calc(100vh - 42px)
    border-radius: 0px
</style>
