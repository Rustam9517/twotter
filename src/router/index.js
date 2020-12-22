import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import UserProfile from "../views/UserProfile";
import Admin from "../views/Admin";
import * as data from '../assets/users.json';
import store from "../store";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/user/:userId',
    name:'UserProfile',
    component:UserProfile
  },
  {
    path:'/admin',
    name: 'admin',
    component: Admin,
    meta:{
      requireAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach(async (to,from,next)=>{
  const user = store.state.user;
  const userCur = data.users;
  if(!user){
    await store.dispatch('setUser', userCur);
  }
  const isAdmin =false;
  const requireAdmin = to.matched.some(record => record.meta.requireAdmin);
  if (requireAdmin && !isAdmin) next({name:'Home'});
  else next();
});
export default router
