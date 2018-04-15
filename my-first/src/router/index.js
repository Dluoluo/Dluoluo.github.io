import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '../components/index-page/index'
import detailPage from '../components/detail-page/index'
import detailCount from '../components/detail-page/detail-count'
import detailForecast from '../components/detail-page/detail-forecast'
import detailAnalysis from '../components/detail-page/detail-analysis'
import detailPublish from '../components/detail-page/detail-publish'
// 注册路由
Vue.use(Router)
export default new Router({
  //浏览历史
  mode:'history',
  routes: [
    {
      // 路由默认路径及组件
      path:'/',
      component:indexPage
    },
    {
      path:'/detail',
      component:detailPage,
      redirect:'/detail/count',
      children:[
        {
          path: 'count',
          component: detailCount
        },
        {
          path: 'forecast',
          component: detailForecast
        },
        {
          path: 'analysis',
          component: detailAnalysis
        },
        {
          path: 'publish',
          component: detailPublish
        }
      ]
    }
  ]
})
