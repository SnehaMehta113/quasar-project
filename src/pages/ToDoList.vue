<template>
    <q-page>
        <div class="row">
            <div class="col-12">
                <TaskTable />

            </div>

        </div>
            

    </q-page>

</template>

<script>

import { defineComponent } from 'vue'

import TaskTable from 'src/components/DashBoard/TaskTable.vue';

export default defineComponent({
  name: 'ToDoList',
  components:{
    TaskTable
    
  }
  
})
</script>