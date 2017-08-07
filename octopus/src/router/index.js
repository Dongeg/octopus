import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
        component: resolve => require(['@/components/Login'], resolve)
    },
   {
      path: '/index',
      name: 'Index',
      component: resolve => require(['@/components/Index'], resolve),
       children: [
           //基础设置板框中的路由
           {
               path: 'annex',
               component: resolve => require(['@/components/baseConf/Annex'], resolve)
           },
           {
               path: 'class',
               component: resolve => require(['@/components/baseConf/Class'], resolve)
           },
           {
               path: 'log',
               component: resolve => require(['@/components/baseConf/Log'], resolve)
           },
           {
               path: 'message',
               component: resolve => require(['@/components/baseConf/Message'], resolve)
           },
           //网站管理板块路由
           {
               path: 'menuManage',
               component: resolve => require(['@/components/websiteManage/menuManage'], resolve)
           },
           {
               path: 'modelManage',
               component: resolve => require(['@/components/websiteManage/modelManage'], resolve)
           }
       ]
   }
  ]
})
