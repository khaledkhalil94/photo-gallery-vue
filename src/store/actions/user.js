import router from '@/router'

export default {
  getUserData: ({commit}, userId) => {
    fetch('http://localhost:3000/controllers/auth/getUserDetails/' + userId)
    .then(res => res.json() )
    .then(user => {
      commit('changeProfile', user)
    })
    .catch(err => {
      router.push('/404')
      console.log(err)
      commit('setLoginErr', 'Something went wrong.')
    })
  },
  updateUserData: ({commit, state}, form) => {
    const formData = new FormData(form)
    formData.append('oldUsername', state.user.username)
    fetch('http://localhost:3000/controllers/auth/updateUserDetails/', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json() )
    .then(user => {
      const username = formData.get('username')
      const email = formData.get('email')
      commit('setUser', {username, email})
      router.push('/profile')
    })
    .catch(err => {
      console.log(err)
      commit('setLoginErr', 'Something went wrong.')
    })
  }
}