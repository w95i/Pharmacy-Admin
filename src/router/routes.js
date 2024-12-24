import HomeView from '../views/HomeView.vue'

const routes = [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/pharmacy',
        name: 'pharmacy',
        redirect:'/pharmacy/pharmacy-list',
        children:[
          {
            path: 'pharmacy-list',
            name: 'pharmacy-list',
            component: () => import('@/views/Pharmacy/PharmacyList.vue'),
            children:[
              {
                path: 'pharmacy-group/:id',
                name: 'pharmacy-group',
                component: () => import('@/views/Pharmacy/PharmacyGroup.vue'),
              }
            ]
          },
          {
            path: 'create-group',
            name: 'create-pharmacy',
            component: () => import('/')
          }
        ]
      }
];

export default routes;