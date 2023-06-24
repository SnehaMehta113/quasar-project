<template>
        <q-card class="q-pa-md" flat v-for="(item,index) in cards" :key="index" style="border-radius:10px">
            <div class="row items-center">
                <div class="col">
                    <div class="text-bold">My Planning for This Month</div>
                </div>
                <div>
                    <q-btn flat icon="more_horiz">
                        <q-menu>
                            <q-list class="text-grey-7">
                                <q-item clickable>
                                        <div class="row items-center">
                                            <q-icon name="add"></q-icon><span>Add</span>
                                        </div>
                                   
                                </q-item>
                                <q-item clickable>
                                    Delete
                                </q-item>
                                <q-item clickable>
                                    Refresh
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-btn>
                </div>
            </div>

    <q-separator color="grey-4" />
    <q-card class="row q-my-sm items-center q-pa-xs bg-grey-2" style="border-radius:10px" v-for="i in 5">
        <div class="q-pa-sm">
            <q-img ratio="1" width="40px" :src="item.image"/>
        </div>

        <div class="col q-pa-sm">
            <div class="text-bold">{{ item.title }}</div>
            <div class="text-caption text-grey">{{ item.caption }}</div>
        </div>
    </q-card>
    

        </q-card>

</template>



<script>
export default{
    name:'CalendarCard',
    data(){
        return{

            cards:[
                {
                    image:"/folder.png",
                    title:"3D Animation Learn",
                    caption:"March 31, 09:30 AM"
                }
            ]
        }
    }
}

</script>