import router from '@/router'

export default {
  signupSubmit: ({commit}, form) => {
    const formData = new FormData(form)
    if(!validateForm(formData)) return false
    commit('signupSubmit')
    fetch('http://localhost:3000/controllers/auth/signup', {
      method: 'POST',
       body: formData
    })
    .then(res => res.json())
    .then(res => {
      if(res.taken) {
        commit('setSignupErr', 'Username is already taken.')
      } else {
        localStorage.setItem('loggedUser', res.id)
        commit('loginUser', res)
        router.push('/')
      }
    })
    .catch(err => {
      console.log(err)
      commit('setSignupErr', 'Something went wrong.')
    })
  }
}
const validateForm = (form) => {
  for (let value of form.values()) {
    if(value.replace(/\s/g, '').length === 0) return false
  }
  return true
}
