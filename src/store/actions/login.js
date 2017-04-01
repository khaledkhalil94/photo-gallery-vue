import router from '@/router'

export default {
  loginSubmit: ({commit}, form) => {
    const formData = new FormData(form)
    const username = formData.get('username')
    commit('loginSubmit')
    fetch('http://localhost:3000/controllers/auth/login', {
      method: 'POST',
       body: formData
    })
    .then(user => user.json())
    .then(user => {
      if(user.id) {
        commit('loginUser', user)
        localStorage.setItem('loggedUser', user.id)
        router.push('/gallery')
      } else if(user.success === false) {
        commit('setLoginErr', 'Incorrect username or password.')
      } else {
        commit('setLoginErr', 'Something went wrong.')
      }
    })
    .catch(err => {
      console.log(err)
      commit('setLoginErr', 'Something went wrong.')
    })
  },
  autoLoginUser: ({commit}, userId) => {
    const formData = new FormData()
    formData.append('userId', userId)

    fetch('http://localhost:3000/controllers/auth/autologin', {
      method: 'POST',
       body: formData
    })
    .then(user => user.json())
    .then(user => commit('loginUser', user))
    .catch(err => console.log(err))
  },
  setLogout: ({commit}) => {
    localStorage.removeItem('loggedUser')
    commit('logout')
    router.push('/login')
  }
}