import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');

const Deail = () =>import('../views/deail/Deail')


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      meta: {
        title: '首页'
      },
      component: Home
    },
    {
      path: '/category',
      meta: {
        title: '分类'
      },
      component: Category
    },
    {
      path: '/cart',
      meta: {
        title: '购物车'
      },
      component: Cart
    },
    {
      path: '/profile',
      meta: {
        title: '我的'
      },
      component: Profile
    },
    {
      path: '/deail/:id',
      meta: {
        title: '详情页'
      },
      component: Deail
    }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach(((to, from, next) => {
  document.title = to.meta.title
  // document.title = to.matched[0].meta.title
  next()
}))

export default router
