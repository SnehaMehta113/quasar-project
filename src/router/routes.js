
const routes = [
 { path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'dashboard', 
      component: () => import('pages/IndexPage.vue') ,
      children: [
        { path: '', component: () => import('components/DashBoard/Dashboard.vue') },
      ]},
      {path: 'file-manager/my-drive', component: () => import('pages/FileManager/MyFolder.vue' )},
      {path: 'file-manager/assets', component: () => import('pages/FileManager/Assets.vue' )},
      {path: 'file-manager/projects', component: () => import('pages/FileManager/Projects.vue' )},
      {path: 'file-manager/personal', component: () => import('pages/FileManager/Personal.vue' )},
      {path: 'file-manager/templates', component: () => import('pages/FileManager/Templates.vue' )},
      {path: 'file-manager/documents', component: () => import('pages/FileManager/DocumentPage.vue' )},
      {path: 'file-manager/media', component: () => import('pages/FileManager/Media.vue' )},
      {path: 'file-manager/recent-files', component: () => import('pages/FileManger/RecentFiles.vue' )},
      {path: 'to-do-list', component: () => import('pages/ToDoList.vue')},
      {path:'calendar', component: () => import('pages/Calendar.vue' )},
      {path: 'contacts' , component : () => import('pages/Contacts.vue')},
      {path: 'email/inbox' , component : () => import('pages/Email/Email.vue')},
      {path: 'email/compose' , component : () => import('pages/Email/ComposePage.vue')},
      {path: 'email/read-mail' , component : () => import('pages/Email/ReadEmail.vue')},
      {path: 'chat' , component : () => import('pages/Chat.vue')},
      {path: 'contact-list/members-grid' , component : () => import('pages/ContactList/Members.vue')},
      {path: 'contact-list/members-grid2' , component : () => import('pages/ContactList/MembersGrid.vue')},
      {path: 'contact-list/members-list' , component : () => import('pages/ContactList/MembersList.vue')},
      {path: 'contact-list/members-profile' , component : () => import('pages/ContactList/MembersProfile.vue')},
      

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
