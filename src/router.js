
import VueRouter from 'vue-router'

import home from './components/tabbar/Home.vue'
import member from './components/tabbar/Member.vue'
import cart from './components/tabbar/Cart.vue'
import search from './components/tabbar/Search.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photos from './components/photos/photos.vue'
import photoinfo from './components/photos/photoinfo.vue'
import product from './components/product/product.vue'
import product_detail from './components/product/product_detail.vue'
import product_comments from './components/product/product_comments.vue'

var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/member', component: member },
    { path: '/cart', component: cart },
    { path: '/search', component: search },
    { path: '/home/news', component: newslist },
    { path: '/home/newsinfo/:id', component: newsinfo },
    { path: '/home/photos', component: photos },
    { path: '/home/photoinfo/:id', component: photoinfo },
    { path: '/home/product', component: product },
    { path: '/home/product_detail/:id', component: product_detail, name: 'product_detail' },
    { path: '/home/product_comments/:id', component: product_comments, name: 'comments' },
  ],
  linkActiveClass: 'mui-active',
  // 滚动行为，解决路由切换时页面显示在底部问题
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
export default router