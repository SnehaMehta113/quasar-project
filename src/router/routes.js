
const routes = [
 { path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'dashboard', 
      component: () => import('pages/IndexPage.vue') ,
      children: [
        { path: '', component: () => import('components/DashBoard/Dashboard.vue') },
      ]},
      {path: 'file-manager', component: () => import('pages/MyFolder.vue' )},
      {path: 'to-do-list', component: () => import('pages/ToDoList.vue')},
      {path:'calendar', component: () => import('pages/Calendar.vue' )},
      {path: 'contacts' , component : () => import('pages/Contacts.vue')}
    ],
},

    

   


  

  

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
