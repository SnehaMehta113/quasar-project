<template>

        <q-card flat>
          <q-card-section>
                <div class="text-bold">My Drive</div>
                <div class="q-mt-md full-width">
                    <q-input color="grey-3" label-color="orange" rounded standout v-model="text" placeholder="Search here...">
                      <template v-slot:append>
                        <q-icon name="search" color="orange"></q-icon>
                      </template>
                    </q-input>
                  </div>
                </q-card-section>
                <q-card-section>
                <q-list>
                  <q-item>
                    <q-item-section>
                      <div class="q-ml-xs">
                        <q-icon name="folder" color="blue"/><span class="text-bold text-blue q-ml-xs">My Folder</span>
                        
                      </div>
                      <ul>
                        <li>Assets</li>
                        <li>Projects</li>
                        <li>Personals</li>
                        <li>Templates</li>
                      </ul>
                    </q-item-section>
                    </q-item>

                    <q-item v-for="(item,index) in list" :key="index">
                      <div class="row q-gutter-md">
                        <q-icon :name="item.icon" color="grey"/>
                        <div class="text-bold text-blue">{{ item.label }}</div>
                      </div>
                    </q-item>
                  </q-list>
              </q-card-section>

              <q-card-section class="q-pa-md">
                <div class="text-blue-5">Storage Status</div>
                <q-separator inset spaced style="height:5px; background-color:blue;"/>
                <div class="text-8 text-grey-5">86.5 GB Used of 120 GB</div>
              </q-card-section>
        </q-card>


</template>

<script>
export default{
    name:'Drive',
    data(){
      return{
        list:[
          {icon:"article",
          label:"Documents"
        },
        {icon:"perm_media",
          label:"Media"
        },
        {icon:"schedule",
          label:"Recent Files"
        },
        {icon:"star",
          label:"Important"
        },
        {icon:"info",
          label:"Spam"
        },
        {icon:"delete",
          label:"Trash"
        },
        ]
      }
    }
}
</script>