<template>

        <q-card flat style="width:180px; border-radius:20px"  >
            <q-card-section class="row justify-between">
                <q-checkbox v-model="val" /> 
                <q-icon size="md" name="more_horiz">
                    <q-menu>
                        <q-list class="text-grey-7">
                            <q-item clickable v-for="(menuItem,index) in menu" :key="index" >
                                    <div class="row q-gutter-xs items-center">
                                        <q-icon :name="menuItem.icon"></q-icon><span>{{ menuItem.name}}</span>
                                    </div>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-icon>
            </q-card-section>
            <q-card-section class="text-center">
                <div>
                    <img :src="image"/>
                    <div class="text-h6">{{ title }}</div>

                </div>

            </q-card-section>
            <q-card-section class="row justify-between">
                <div class="text-7 text-grey">{{ files }}</div>
                <div class="text-7 text-grey">{{ storage }}</div>

            </q-card-section>

        </q-card>



</template>


<script>

export default{
    name:'Folder',
    props: ['title','files','storage', 'image'],
 data(){
    
        return{

        val:false,
        menu:[
            {icon:'edit',
        name:'Rename'},

        {icon:'download',
        name:'Download'},

        {icon:'delete',
        name:'Remove'}

        ]
           
        }
    }

}

</script>