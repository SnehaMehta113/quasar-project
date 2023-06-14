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
      <router-view />
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
    link: '/file-manager/'
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
    icon: 'email',
    link: '/Email/'
  },
  {
    title: 'Chat',
    caption: '',
    icon: 'chat',
    link: '/Chat/'
  },

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
