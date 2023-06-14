<template>
    <div class="q-pa-md row justify-evenly q-gutter-xs">
        <q-card class="flat-bordered" style="width:200px;"  v-for="(item,index) in cards" :key="index">
            <q-card-section class="row justify-between">
                <q-checkbox v-model="val" />
                <q-btn flat round dense icon="more_horiz" />
            </q-card-section>
            <q-card-section class="text-center">
                <div>
                    <img :src="item.image"/>
                    <div class="text-h6">{{ item.title }}</div>

                </div>

            </q-card-section>
            <q-card-section class="row justify-between">
                <div class="text-7 text-grey">{{ item.files }}</div>
                <div class="text-7 text-grey">{{ item.storage }}</div>

            </q-card-section>

        </q-card>

    </div>

</template>


<script>
export default{
    name:'Folder',
 data(){
    
        return{
            
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
            ],
           
        }
    }

}

</script>