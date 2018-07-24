import Vue from 'vue'
import VueRouter from 'vue-router'
VueTidyRoutes = require('vue-tidyroutes').default

{{{rt1}}}

Vue.use(VueRouter)
router = new VueRouter
        routes: VueTidyRoutes.export()
        mode: 'history'

#router.beforeEach (to, from, next) ->
#    iView.LoadingBar.start()
#    next()
#
#router.afterEach (to, from) ->
#    iView.LoadingBar.finish()
#    window.scrollTo(0, 0)

export default router