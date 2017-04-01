import router from '@/router'
import { CONTROLLERS } from '@/utils/constants'

export default {
  navigatePic: ({commit, state}, obj) => {
    const next = !!obj.next, {param} = obj
    let currentIndex = state.gallery.data.findIndex((e) => e.id == param)
    let nextInx
    const data = state.gallery.data
    if(next) {
      currentIndex++
      nextInx = data[currentIndex] ? data[currentIndex].id : data[0].id
    } else {
      currentIndex--
      nextInx = data[currentIndex] ? data[currentIndex].id : data[data.length-1].id
    }
    router.push(String(nextInx))
  },
  uploadFile: ({commit, state}, form) => {
    const formData = new FormData(form)
    formData.append('id', state.user.id)

    commit('uploadSubmit')
    fetch(CONTROLLERS + '/gallery/upload', {
      method: 'POST',
       body: formData
    })
    .then(res => res.json())
    .then(res => {
      commit('uploadDone')
      router.push('/gallery/'+res.fileId)
    })
    .catch(err => {
      console.log(err)
      commit('uploadErr', 'Error')
    })
  },
  getData: ({commit, state}, uid) => {
    const id = uid || state.user.id
    if(!id) return
    fetch(CONTROLLERS + '/gallery/' + id)
    .then(data => data.json())
    .then(data => {
      commit('pullGalleryData', data)
    })
    .catch(err => console.log(err))
  },
  getPicture: ({commit, state}, id) => {
    const userId = state.user.id
    if(!userId) return
    fetch(CONTROLLERS + '/gallery/picture/'+id+'?userId='+userId)
    .then(data => data.json())
    .then(data => {
      commit('setActivePicture', data)
    })
    .catch(err => console.log(err))
  },
  getFeedData: ({commit}) => {
    fetch(CONTROLLERS + '/gallery/getFeedData')
    .then(data => data.json())
    .then(data => {
      commit('setFeedData', data)
    })
    .catch(err => console.log(err))
  },
  deletePicture: ({commit}, id) => {
    const data = new FormData()
    data.append('id', id)
    fetch(CONTROLLERS + '/gallery/delete/', {
      method: 'POST',
      body: data
    })
    .then(res => res.json())
    .then(res => {
      if(res === 'OK') router.push('/gallery')
    })
    .catch(err => console.log(err))
  },
  favPic: ({commit, state, dispatch}, id) => {
    const userId = state.user.id
    const isFav = state.gallery.activePic.pic.isFaved
    const action = isFav ? 'removeRating' : 'setRating'
    const data = new FormData()
    data.append('id', id)
    data.append('userId', userId)

    fetch(CONTROLLERS + '/gallery/'+action, {
      method: 'POST',
      body: data
    })
    .then(res => res.json())
    .then(res => {
      if(res === 'OK') dispatch('getPicture', id)
    })
    .catch(err => console.log(err))
  }
}