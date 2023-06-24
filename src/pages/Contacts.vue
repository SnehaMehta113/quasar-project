<template>
    <q-page>
        <div class="row">
            <div class="col-12">
                <ContactTable />

            </div>

        </div>
            

    </q-page>

</template>

<script>

import { defineComponent } from 'vue'

import ContactTable from 'src/components/Contact/ContactTable.vue';

export default defineComponent({
  name: 'Contacts',
  components:{
    ContactTable
    
  }
  
})
</script>