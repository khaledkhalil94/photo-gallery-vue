<template>
  <div id="app">
    <Modal />
    <HeaderBar></HeaderBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderBar from '@/components/Header'
  import Modal from '@/components/Modal'
  import { mapActions } from 'vuex'

  export default {
    name: 'app',
    components: {
      HeaderBar, Modal
    },
    created() {
      if(localStorage.getItem('loggedUser')) this.autoLoginUser(localStorage.getItem('loggedUser'))
    },
    methods: mapActions(['autoLoginUser'])
  }
</script>

<style>
  body {
    background-color: #DADADA;
  }
  body > .login-page {
    height: 80vh;
  }
  .login-page .image {
    margin-top: -100px;
  }
  .login-page .column {
    max-width: 450px;
  }
</style>
