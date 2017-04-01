const mutations = {
  signupSubmit(state){
    state.auth.signup.loading = true
    state.auth.signup.errMessage = null
  },
  setSignupErr(state, msg){
    state.auth.signup.loading = false
    state.auth.signup.errMessage = msg
  }
}

export default mutations