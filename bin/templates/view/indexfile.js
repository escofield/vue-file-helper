import Vue from 'vue'
import VueRouter from 'vue-router'

{{{rt1}}}

const VueTidyRoutes = require('vue-tidyroutes').default

Vue.use(VueRouter)
const router = new VueRouter({
  routes: VueTidyRoutes.export(),
  mode: 'history',
})
/*
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    next()
})
router.afterEach((to, from) => {
    iView.LoadingBar.finish()
    window.scrollTo(0, 0)
})
*/
export default router
