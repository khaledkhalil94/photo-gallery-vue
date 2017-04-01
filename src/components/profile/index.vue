<template lang="html">
  <div class="ui segment padded container user-profile">
    <div class="ui grid container">
      <div class='ui three wide column'>
        <div class="user-details">
          <h3>{{username}}</h3>
        </div>
        <div class="ui small image">
          <img :src="Pic">
        </div>
        <div class="profile-edit-link">
          <router-link to='/profile/settings'>
            <button class="ui button teal">Edit profile</button>
          </router-link>
        </div>
      </div>
      <div class='ui thirteen wide column'>
        <Album :username="username" :userId="id" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import Album from './userGallery'
  import Pic from '@/assets/profilePicture.png'

  export default {
    components: {Album},
    data() {
      return {
        Pic
      }
    },
    computed: {
      ...mapState({
        id: state => state.user.id,
        username: state => state.user.username,
        email: state => state.user.email
      }),
    }
  }
</script>

<style lang="sass" scoped>
  .user-details h3
    text-transform: capitalize

  .profile-edit-link
    margin-top: 10px
</style>
