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
               path: 'temStyle',
               component: resolve => require(['@/components/websiteManage/TemStyle'], resolve)
           },
           {
               path: 'tem',
               component: resolve => require(['@/components/websiteManage/tem'], resolve)
           },
           {
               path: 'website',
               component: resolve => require(['@/components/websiteManage/websiteManage'], resolve)
           },
           {
               path: 'modelManage',
               component: resolve => require(['@/components/websiteManage/modelManage'], resolve)
           },
           {
               path: 'department',
               component: resolve => require(['@/components/websiteManage/Department'], resolve)
           },
           {
               path: 'user',
               component: resolve => require(['@/components/websiteManage/user'], resolve)
           },
           {
               path: 'character',
               component: resolve => require(['@/components/websiteManage/character'], resolve)
           },
           {
               path: 'personalManage',
               component: resolve => require(['@/components/websiteManage/personalManage'], resolve)
           },
           {
               path: 'companyManage',
               component: resolve => require(['@/components/websiteManage/companyManage'], resolve)
           },
           {
               path: 'operationLog',
               component: resolve => require(['@/components/websiteManage/operationLog'], resolve)
           },
           {
               path: 'abnormalLog',
               component: resolve => require(['@/components/websiteManage/abnormalLog'], resolve)
           },
           {
               path: 'messagePush',
               component: resolve => require(['@/components/websiteManage/messagePush'], resolve)
           },
           {
               path: 'feedback1',
               component: resolve => require(['@/components/websiteManage/feedback1'], resolve)
           },

       ]
   }
  ]
})
