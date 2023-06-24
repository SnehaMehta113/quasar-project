<template>
    <q-page class="bg-blue-grey-1">
        <div class="row">
            <div class="col-12">
                <Calendar />

            </div>
            <div class="row justify-evenly full-width">
              <CalendarCard v-for="i in 3" />

            </div>

        </div>
            

    </q-page>

</template>

<script>

import { defineComponent } from 'vue'

import Calendar from 'src/components/Calendar/Calendar.vue';
import CalendarCard from 'src/components/Calendar/CalendarCard.vue';

export default defineComponent({
  name: 'CalendarPage',
  components:{
    Calendar,
    CalendarCard
    
  }
  
})
</script>