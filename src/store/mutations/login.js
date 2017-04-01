const mutations = {
  loginSubmit(state){
    state.auth.login.loading = true
    state.auth.login.errMessage = null
  },
  logout(state){
    state.user = {
      id: null,
      username: null,
      email: null,
      registered: null,
      logged: false
    }
  },
  loginUser(state, user){
    state.auth.login.loading = false
    state.auth.signup.loading = false
    state.auth.login.errMessage = null
    state.auth.signup.errMessage = null
    state.user = user
    state.user.logged = true
  },
  setLoginErr(state, msg){
    state.auth.login.loading = false
    state.auth.login.errMessage = msg
  },
  setUser(state, user){
    state.user = Object.assign({}, state.user, user)
  },
  changeProfile(state, user){
    state.profile = user
  }
}

export default mutations