<template>
  <div class="ui mini images">
    <router-link v-for="(i, k) in data" :key="k" :to="String(i.id)">
      <img class="ui image" :class="{active: isActive(i.id)}" :src="'/static/img/'+i.filename">
    </router-link>
    {{uid}}
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    props: ['uid'],
    created: function (){
      this.getData(this.uid)
    },
    computed: mapState({
      data: state => state.gallery.data,
      userId: state => state.gallery.activePic.user.id,
    }),
    methods: {
      ...mapActions (['getData']),
      isActive: function(id) {
        return id == this.$route.params.photo
      }
    }
  }
</script>

<style scoped lang="sass">
  .ui.mini.images
    text-align: center
    background-color: black
    margin: 0px

  .ui.mini.images img
    margin: auto 5px
    &.active
      border: 1px solid #00ff92

</style>
