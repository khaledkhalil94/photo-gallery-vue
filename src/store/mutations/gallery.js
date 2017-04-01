export default {
  uploadSubmit(state){
    state.gallery.uploadFile.loading = true
    state.gallery.uploadFile.errMsg = null
  },
  uploadDone(state){
    state.gallery.uploadFile.loading = false
    state.gallery.uploadFile.errMsg = false
  },
  uploadErr(state, err){
    state.gallery.uploadFile.loading = false
    state.gallery.uploadFile.errMsg = err
  },
  pullGalleryData(state, data){
    //state.gallery.uploadFile.loading = false
    state.gallery.data = data
  },
  setActivePicture(state, data){
    state.gallery.activePic.pic = data.picture
    state.gallery.activePic.user = data.user
  },
  setFeedData(state, data){
    state.gallery.feedData = data
  },
  setModal(state, action) {
    state.gallery.activePic.showModal = action
  }
}
