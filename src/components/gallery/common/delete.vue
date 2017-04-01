<template lang="html">
  <div class="photo delete button">
    <i class="ui icon remove link red bordered" title="Detele picture" @click="delPicture"></i>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    props: ['params'],
    methods: {
      ...mapActions(['deletePicture']),
      delPicture: function() {
        if(window.confirm('Are you sure you want to delete this picture ?')) this.deletePicture(this.params)
      }
    },
  }
</script>

<style lang="sass">
  .photo.delete.button
    margin-left: auto
</style>
