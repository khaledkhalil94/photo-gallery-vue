import Vue       from 'vue'
import VueRouter from 'vue-router'
import Home      from '@/components/Home/index'
import Gallery   from '@/components/gallery/'
import Profile   from '@/components/profile/'
import User      from '@/components/profile/user'
import Photo     from '@/components/gallery/photo'
import Settings  from '@/components/profile/settings'
import Upload    from '@/components/gallery/upload'
import Signup    from '@/components/auth/signup'
import Login     from '@/components/auth/login'
import notFound  from '@/components/404'
import store     from '@/store/'

Vue.use(VueRouter)

const Router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/',                 name: 'Home',     component: Home  },
    { path: '/user/:id',         name: 'User',     component: User  },
    { path: '/gallery/upload',   name: 'Upload',   component: Upload,   meta: {reqLogged: true } }, // requires user logged in
    { path: '/gallery/:photo',   name: 'Photo',    component: Photo },
    { path: '/gallery',          name: 'Gallery',  component: Gallery,  meta: {reqLogged: true } }, // requires user logged in
    { path: '/profile',          name: 'Profile',  component: Profile,     meta: {reqLogged: true } }, // requires user logged in
    { path: '/profile/settings', name: 'Settings', component: Settings, meta: {reqLogged: true } }, // requires user logged in
    { path: '/signup',           name: 'Signup',   component: Signup,   meta: {reqLogged: false} }, // requires user NOT logged in
    { path: '/login',            name: 'Login',    component: Login,    meta: {reqLogged: false} }, // requires user NOT logged in
    { path: '/*',                name: '404',      component: notFound }
  ]
})

Router.beforeEach((to, from, next) => {
  if(localStorage.getItem('loggedUser')) {
    next()
    return
  }
  const { logged } = store.state.user
  if (to.matched.some(record => record.meta.reqLogged)) {
    logged ? next() : next('/login')
  } else if (to.matched.some(record => record.meta.reqLogged === false)) {
    logged ? next(from.path) : next()
  }
  else next()
})

export default Router