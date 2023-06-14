<template>
    <div class="q-pa-sm">
        <q-card class="flat-bordered">
            
              <q-card-section>
                <div class="text-h6">My Drive</div>
                <div class="q-ma-md flex flex-center" style="width:150px;">
                    <q-input color="grey-3" label-color="orange" outlined rounded v-model="text" placeholder="Search here...">
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
                      <div class="flex flex-center q-gutter-sm q-ma-none">
                        <q-icon name="folder"/>
                        <q-item-label>My Drive </q-item-label>
                      </div>
                      <div style="text-center">
                        <q-item-label>Assets</q-item-label>
                        <q-item-label>Projects</q-item-label>
                        <q-item-label>Personals</q-item-label>
                        <q-item-label>Templates</q-item-label>

                      </div>
                    </q-item-section>
                    </q-item>

                    <q-item v-for="(item,index) in list" :key="index">
                      
                    <q-item-section avatar>
                      <q-icon :name="item.icon"/>
                    </q-item-section>
                    <q-item-label>{{ item.label }}</q-item-label>

                    </q-item>
                  </q-list>
              </q-card-section>

              <q-card-section class="q-pa-md">
                <div class="text-blue-5">Storage Status</div>
                <q-separator inset spaced style="height:5px; background-color:blue;"/>
                <div class="text-8 text-grey-5">86.5 GB Used of 120 GB</div>

              </q-card-section>
           
                





        </q-card>

    </div>

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