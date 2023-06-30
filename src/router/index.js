// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default/default.vue'),
  },


  // guide list
  {
    path: '/guide',
    component: () => import('@/layouts/default/Guide.vue'),
    children: [
      {
        path: 'ListGuide',
        component: () => import('@/views/guide/ListGuide.vue'),
      },
      {
        path: 'ListCommon',
        component: () => import('@/views/guide/ListCommon.vue'),
      },
      {
        path: 'ListMain',
        component: () => import('@/views/guide/ListMain.vue'),
      },
      {
        path: 'ListUsim',
        component: () => import('@/views/guide/ListUsim.vue'),
      },
      {
        path: 'ListRatePlan',
        component: () => import('@/views/guide/ListRatePlan.vue'),
      },
      {
        path: 'ListBeneFit',
        component: () => import('@/views/guide/ListBeneFit.vue'),
      },
      {
        path: 'ListCS',
        component: () => import('@/views/guide/ListCS.vue'),
      },
      {
        path: 'ListMypage',
        component: () => import('@/views/guide/ListMypage.vue'),
      },
      {
        path: 'ListLogin',
        component: () => import('@/views/guide/ListLogin.vue'),
      },
      {
        path: 'ListFooter',
        component: () => import('@/views/guide/ListFooter.vue'),
      },
    ]
  },
  




  // ListGuide page
  {
    path: '/guide/ListGuide/Template',
    component: () => import('@/views/guide/Template.vue'),
  },
  {
    path: '/guide/ListGuide/Layout',
    component: () => import('@/views/guide/Layout.vue'),
  },
  {
    path: '/guide/ListGuide/Popup',
    component: () => import('@/views/guide/Popup.vue'),
  },
  {
    path: '/guide/ListGuide/Text',
    component: () => import('@/views/guide/Text.vue'),
  },
  {
    path: '/guide/ListGuide/Form',
    component: () => import('@/views/guide/Form.vue'),
  },
  {
    path: '/guide/ListGuide/FormEtc',
    component: () => import('@/views/guide/FormEtc.vue'),
  },
  {
    path: '/guide/ListGuide/Tab',
    component: () => import('@/views/guide/Tab.vue'),
  },
  {
    path: '/guide/ListGuide/Tag',
    component: () => import('@/views/guide/Tag.vue'),
  },
  {
    path: '/guide/ListGuide/Accordion',
    component: () => import('@/views/guide/Accordion.vue'),
  },
  {
    path: '/guide/ListGuide/Button',
    component: () => import('@/views/guide/Button.vue'),
  },
  {
    path: '/guide/ListGuide/Table',
    component: () => import('@/views/guide/Table.vue'),
  },
  {
    path: '/guide/ListGuide/InfoList',
    component: () => import('@/views/guide/InfoList.vue'),
  },
  {
    path: '/guide/ListGuide/Flag',
    component: () => import('@/views/guide/Flag.vue'),
  },
  {
    path: '/guide/ListGuide/List',
    component: () => import('@/views/guide/List.vue'),
  },
  {
    path: '/guide/ListGuide/Swiper',
    component: () => import('@/views/guide/Swiper.vue'),
  },
  {
    path: '/guide/ListGuide/Logo',
    component: () => import('@/views/guide/Logo.vue'),
  },
  {
    path: '/guide/ListGuide/Animation',
    component: () => import('@/views/guide/Animation.vue'),
  },

  



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
