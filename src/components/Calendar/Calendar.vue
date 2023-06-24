<template>
    <div class="q-pa-md">
        <div class="row justify-between">
            <div class="text-h6">Calendar</div>
            <div class="row justify-evenly flex-center">
                <q-icon name="home"/>
                <div class="text-caption">DashBoard .</div>
                <div class="h6">Calendar</div>
            </div>
        </div>
    </div>
    <div style="width:800px">
        <q-calendar v-model="calendar" view="month" mini-mode locale="en-us"></q-calendar>
    </div>
    <!-- <q-table
    flat-bordered
    :rows="rows"
    :columns="columns"
    row-key="name">


    <template v-slot:top-left>
        <div>
            <q-btn color="primary"> + Add Event</q-btn>
        </div>

    </template>

   

    </q-table> -->
</template>


<script>
export default{
    name:'Calendar',
    data(){
        return{
            calendar: '',
            columns:[],
            rows:[]
        }
    }
}
</script>
