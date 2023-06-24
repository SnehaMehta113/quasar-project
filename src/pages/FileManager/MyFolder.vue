<template>
    <q-page>
      <div class="q-pa-md">
        <div class="row justify-between">
            <div class="text-h6">File Manger</div>
        <div class="row justify-between flex-center">
            <q-icon name="home"/>
            <div class="text-caption text-blue-4">DashBoard</div>
            <q-icon name=""/>
            <div class="text-6">File Manager</div>
        </div>
    </div>
</div>
      <div class="row">
        <div class="col-3 q-pa-sm">
          <Drive class="q-ma-xs"  style="border-radius:10px"/>

        </div>
        <div class="col-9 q-pa-sm">
          <div class="row justify-evenly">
          <Folder class="q-ma-xs" v-for="(item,index) in cards" :key="index" v-bind="item"/>
          </div>
          <file />
          <Documents />
        </div>


      </div>
    </q-page>
  </template>



  
  <script>

  import { defineComponent } from 'vue'
  import Drive from 'src/components/FileManager/Drive.vue';
  import Folder from 'src/components/FileManager/Folder.vue';
  import Documents from 'src/components/FileManager/Documents.vue';
  import file from 'src/components/FileManager/file.vue';
  
  export default defineComponent({
    name: 'MyFolder',
    components:{
      Drive,
      Folder,
      Documents,
      file
    },
    data(){
      return {
        cards:[
                {image:"/folder.png",
                title:"Projects",
                files:"387 Files",
                storage:"4.5 GB"
            },
            {image:"/folder.png",
                title:"Documents",
                files:"1572 Files",
                storage:"7.5 GB"
            },
            {image:"/folder.png",
                title:"Media",
                files:"12341 Files",
                storage:"2.8 GB"
            },
            {image:"/folder.png",
                title:"Applications",
                files:"2487 Files",
                storage:"5.0 GB"
            }
            ]
      }
    }
    
  })
  </script>
  