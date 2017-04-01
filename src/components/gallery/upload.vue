<template>
  <div class="ui very padded segment container">
    <div class="ui segment inner">
      <h2>Upload a picture</h2>
      <form class="ui form" @submit.prevent="submitForm" encType="multipart/form-data" :class="{loading: loading}">
        <div class="field">
          <input type="file" name="sampleFile" id="fileInput" />
          <label class="ui file-upload teal button" for="fileInput">Choose a file</label>
        </div>
        <div class="field">
          <label>Title</label>
          <input type="text" name="title" />
        </div>
        <div class="field">
          <label>Short description about the photo</label>
          <textarea rows="2" name='desc'></textarea>
        </div>
        <div class="field">
          <input class="ui green submit button" type="submit" value="Upload" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'login',
    computed: mapState({
      loading: state => state.gallery.uploadFile.loading
    }),
    methods: {
      ...mapActions (['uploadFile']),
      submitForm(form) {
        this.uploadFile(form.target)
      }
    }
  }

</script>

<style scoped lang="sass">
  .ui.segment.inner
    width: 95%
    margin: 0 auto

  .ui.form label.file-upload
    width: 200px
    margin: 0 auto
    color: white

  .button
    border-radius: 0px

  #fileInput
    display: none
</style>
