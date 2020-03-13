import Vue from 'vue'
import Router from 'vue-router'
const Home =()=>import('views/home/Home.vue')
const Cart =()=>import('views/cart/Cart.vue')
const Profile=()=>import('views/profile/Profile.vue')
const Category=()=>import('views/category/Category.vue')
const Detail=()=>import('views/detail/Detail.vue')
Vue.use(Router)
const routes = [
  {
    path:'',
    redirect:"/home"
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    path:"/detail/:iid",
    component:Detail
  }
]
export default new Router({
  routes,
  mode:"history"
})
