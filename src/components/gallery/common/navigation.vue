<template lang="html">
  <div class="photo navigation pad" @click="navigate(isRight)">
    <i class="ui icon big chevron" :class="isRight ? 'right' : 'left'"></i>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    props: ['params', 'right'],
    computed: {
      isRight: function() {
        return !!(typeof this.right === 'string')
      }
    },
    methods: {
      ...mapActions(['navigatePic']),
      navigate(next) {
        next = !!next
        this.navigatePic({param: this.params, next})
      }
    },
  }
</script>

<style lang="sass" scoped>
  .photo.navigation.pad
    display: none
    cursor: pointer
    color: white
    padding: 12px
    margin: 0 10px
    border-radius: 6px
    &:hover
      background-color: #252525
    i.right
      margin-right: -3px
    i.left
      margin-right: 0px
      margin-left: -3px

  .img-navigation:hover .photo.navigation.pad
    display: block
</style>