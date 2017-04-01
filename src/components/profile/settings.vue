<template lang="html">
  <div class="ui segment padded container">
    <div class="ui grid container">
      <div class='ui four wide column'>
        <div class="ui image">
          <img :src="pic">
        </div>
      </div>
      <div class='ui twelve wide column'>
        <div class='ui segment'>
          <form class="ui form" @submit.prevent="submitForm">
            <h2>Edit your profile</h2>
            <br>
            <div class="field">
              <label>Username</label>
              <input type="text" name="username" :value="stateUsername" placeholder="Username">
            </div>
            <div class="field">
              <label>E-mail</label>
              <input type="text" name="email" :value="stateEmail" placeholder="E-mail">
            </div>
            <br>
            <input class="ui button" type="submit" value="Update" />
            <input class="ui button basic" type="button" value="Cancel" @click="goBack" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import Pic from '@/assets/profilePicture.png'

  export default {
    data() {
      return {
        pic: Pic
      }
    },
    computed: mapState({
      stateUsername: state => state.user.username,
      stateEmail: state => state.user.email
    }),
    methods: {
      ...mapActions(['updateUserData']),
      submitForm(form) {
        this.updateUserData(form.target)
      },
      goBack() {
        window.history.back()
      }
    }
  }
</script>

<style lang="css">
</style>
