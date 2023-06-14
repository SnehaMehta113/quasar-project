<template>
    <div class="q-pa-md">
       <q-card class="flat bordered">
        <q-card-section class="q-pt-xs row justify-between">
          <div class="text-h6">Sales by Location</div>
          <q-btn flat round dense icon="more_vert" />
        </q-card-section>
        <q-separator inset /> 
        <div class="q-pa-md">
            <img src="src/assets/hex-map.png" class="full-width">

        </div>

        
       <q-card-section  v-for="(item,index) in cards" :key="index" class="q-pt-xs row justify-between">
        <div class="text-h6">{{ item.title }}</div>
        <div class="text-h6">{{ item.caption }}</div>   

        
        </q-card-section>
        <q-separator inset color="blue" size="3px" border-radius="10px"/>

    </q-card>
</div>

</template>

<script>
export default ({
    name:'LocationChart',
    data(){
        return{
            cards:[
                {title:"Canada",
                caption:"75%"},
                {title:"Russia",
                caption:"60%"},
                {title:"Greenland",
                caption:"50%"},
                {title:"USA",
                caption:"40%"},
                {title:"Japan",
                caption:"30%"},
            ]
        }
    }

})
</script>