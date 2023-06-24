<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="q-ma-none bg-white" elevated>
      <div class="q-pa-sm">
        <q-toolbar class="row justify-between">
          <div class="col-3">
            <div class="row justify-between flex-center" style="color:black">
              <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
              <q-btn dense round icon="grid_view" />
              <div style="width:160px;">
                <q-input color="grey-3" label-color="orange" outlined rounded v-model="text" placeholder="Search here...">
                  <template v-slot:append>
                    <q-icon name="search" color="orange"></q-icon>
                  </template>
                </q-input>

              </div>
             </div>


          </div>
          <div class="col-2">
            <div class="row justify-evenly flex-center" style="color:black">
              <q-btn round icon="flag" />
              <q-btn round icon="notifications">
                <q-badge floating color="red" rounded />
              </q-btn>
              <q-btn round icon="email">
                <q-badge floating color="red" rounded />
              </q-btn>
            </div>
          </div>

          <div class="col-3">
            <div class="row justify-evenly flex-center">
              <q-input square outlined type="date" />

              <q-select borderless v-model="model" :options="['Profile', 'Setting', 'Logout']" label="Admin">
                <template v-slot:before>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                  </q-avatar>
                </template>
              </q-select>

            </div>

          </div>
        </q-toolbar>
      </div>
    </q-header>







  <q-drawer  v-model="leftDrawerOpen" show-if-above bordered width="220" >
    <div >
      <q-list separator>
        <q-item-label header >
          <div class="header row q-gutter-md flex-center ">
            <div>
              <img src="../assets/logo-icon.png">
            </div>
            <div>
              <h4 class="q-ma-none">Tagus</h4>
            </div>
          </div>
  
        </q-item-label>
      
        <q-item-label>
          </q-item-label>
  
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        
         
      </q-list>
    </div>
    
  </q-drawer>

  <q-footer class="q-mt-md bg-white" elevated>
    <div class="q-pa-md">
      <div class="text-h6 text-primary text-center">© Tagus is Proudly Owned by <strong>EvyTheme</strong></div>

    </div>
    

  </q-footer>



    <q-page-container>
      <router-view class="bg-blue-grey-1"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'DashBoard',
    caption: '',
    icon: 'grid_view',
    link: '/DashBoard/',

  },

  {
    title: 'File Manager',
    caption: '',
    icon: 'file_copy',
    link: '/file-manager/',
     submenu:[
       {
    title: 'My Drive',
    caption: '',
    icon: 'grid_view',
    link: '/file-manager/my-drive/',
  },

  {
    title: 'Assets',
    caption: '',
    icon: 'grid_view',
    link: '/file-manager/assets/',
  },

  {
    title: 'Projects',
    caption: '',
    icon: 'grid_view',
    link: '/file-manager/projects/',
  },

  {
    title: 'personal',
    caption: '',
    icon: 'grid_view',
    link: '/file-manager/personal/',
  },

  {
    title: 'Templates',
    caption: '',
    icon: 'grid_view',
    link: '/file-manager/templates/',
  },

  {
    title: 'Documents',
    caption: '',
    icon: 'grid_view',
    link: '/file-manager/documents/',
  },

  {
    title: 'Media',
    caption: '',
    icon: 'grid_view',
    link: '/file-manager/media/',
  },

  {
    title: 'Recent Files',
    caption: '',
    icon: 'grid_view',
    link: '/file-manager/recent-files/',
  },
]
  },
  {
    title: 'To Do List',
    caption: '',
    icon: 'list',
    link: '/to-do-list/'
  },
  {
    title: 'Calendar',
    caption: '',
    icon: 'date_range',
    link: '/calendar/'
  },
 {
    title: 'Contacts',
    caption: '',
    icon: 'contacts',
    link: '/contacts/'
  },
 
  {
    title: 'Email',
    caption: '',
    icon: '',
    link: '',
    submenu: [
      {
         title: 'Inbox',
    caption: '',
    icon: 'fiber_manual_record',
    link: '/email/inbox'
  },
  {
         title: 'Compose',
    caption: '',
    icon: 'fiber_manual_record',
    link: '/email/compose'
  },
  {
         title: 'Read Mail',
    caption: '',
    icon: 'fiber_manual_record',
    link: '/email/read-mail'
  }
    ]
  },


  {
    title: 'Chat',
    caption: '',
    icon: 'chat',
    link: '/Chat/'
  },

  {
    title:'Contact List',
    caption:'',
    icon:'',
    link:'',

    submenu:[
      {
        title:'Members Grid',
        caption:'',
        icon:'',
        link:'/contact-list/members-grid'
      },

      {
        title:'Members Grid2',
        caption:'',
        icon:'',
        link:'/contact-list/members-grid2'
      },

      {
        title:'Members List',
        caption:'',
        icon:'',
        link:'/contact-list/members-list'
      },

      {
        title:'Members Profile',
        caption:'',
        icon:'',
        link:'/contact-list/members-profile'
      },


    ]

  }

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
