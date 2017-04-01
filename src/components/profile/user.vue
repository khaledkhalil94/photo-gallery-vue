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
      </div>
      <div class='ui thirteen wide column'>
        <Album :username="username" :userId="userId" />
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
        Pic,
        userId: Number(this.$route.params.id)
      }
    },
    created: function() {
      if(this.selfId === this.userId) this.$router.push('/profile')
      this.getUserData(this.userId)
    },
    computed: {
      ...mapState({
        selfId: state => state.user.id,
        id: state => state.profile.id,
        username: state => state.profile.username,
        email: state => state.profile.email
      }),
      self() {
        return this.$route.name === 'Profile' || (this.$route.params.id == this.id)
      }
    },
    methods: {
      ...mapActions(['getUserData']),
    }
  }
</script>

<style lang="sass" scoped>
  .user-details h3
    text-transform: capitalize

  .profile-edit-link
    margin-top: 10px
</style>
