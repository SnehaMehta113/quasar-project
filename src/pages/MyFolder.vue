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
        <div class="col-3">
          <Drive />

        </div>
        <div class="col-9">
          <Folder />
          <file />
          <Documents />
        </div>


      </div>
    </q-page>
  </template>



  
  <script>

  import { defineComponent } from 'vue'
  import Drive from 'src/components/DashBoard/Drive.vue';
  import Folder from 'src/components/DashBoard/Folder.vue';
  import Documents from 'src/components/DashBoard/Documents.vue';
  import file from 'src/components/DashBoard/file.vue';
  
  export default defineComponent({
    name: 'MyFolder',
    components:{
      Drive,
      Folder,
      Documents,
      file
    }
    
  })
  </script>
  