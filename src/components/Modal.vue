<template lang="html">
  <div class="modal" id="modal" v-if="showModal" @click="(x) => hideModal(x.target)">
    <div class="modal-content">
      <img class="fullscreen-image" :src="'/static/img/'+src">
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: mapState({
      showModal: state => state.gallery.activePic.showModal,
      src: state => state.gallery.activePic.pic.filename
    }),
    methods: {
      hideModal(x) {
        if(x.className !== 'fullscreen-image') this.$store.commit('setModal', false)
      }
    }
  }
</script>

<style lang="sass">
  #modal
    background-color: rgba(0, 0, 0, 0.76)
    position: fixed
    overflow: auto
    overflow-x: hidden
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 100
    display: flex
    align-items: center
    text-align: center
    justify-content: center

    img
      max-width: 80%
</style>
