<template lang="html">
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <form class="ui large form" @submit.prevent="submitForm" :class="{loading: loading}">
        <div class="ui segment">
          <h1 class="ui header">Sign up</h1>
          <div class="field">
            <div class="ui left input">
              <input type="text" name="username" placeholder="Username">
            </div>
          </div>
          <div class="field">
            <div class="ui left input">
              <input type="text" name="email" placeholder="E-mail">
            </div>
          </div>
          <div class="field">
            <div class="ui left input">
              <input type="password" name="password" placeholder="Password">
            </div>
          </div>
          <input type="submit" class="ui fluid large violet submit button" value="Submit" />
          <div class="ui error message" v-if="errMsg">
            <p>{{errMsg}}</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'signup',
    computed: mapState({
      loading: state => state.auth.signup.loading,
      errMsg: state => state.auth.signup.errMessage
    }),
    methods: {
      ...mapActions (['signupSubmit']),
      submitForm(form) {
        this.signupSubmit(form.target)
      }
    }
  }
</script>

<style scoped>
  .ui.middle.aligned.center.aligned.grid {
    padding-top: 8%;
  }
  body > .grid {
    height: 100%;
  }
  .column {
    max-width: 450px;
  }
  .info {
    display: flex;
    padding-bottom: 30px;
    justify-content: center;
  }
  h2 {
    color: #e83d73;
    padding-left: 40px;
    font-size: 40px;
  }
  .ui.error.message {
    display: inherit;
  }
</style>