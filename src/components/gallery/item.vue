<template>
  <div class="ui card">
    <div class="image">
      <router-link class="header" :to="'/gallery/'+id">
        <img :src="'/static/img/'+src">
      </router-link>
    </div>
    <div class="content">
      <router-link class="header" :to="'/gallery/'+id">{{title}}</router-link>
      <div class="photo-favorites" title="Favorites">
        <i class="ui icon yellow star"></i>
        <span class="rating-number">{{fav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['src', 'title', 'id', 'fav']
  }
</script>

<style scoped lang="sass">
  img
    width: 328px
  .image
    margin-bottom: -4px

  .ui.card .content
    display: inline-flex

  .ui.card .photo-favorites
    margin-left: auto
</style>
