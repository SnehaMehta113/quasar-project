<template>
    <q-card>
        <q-card-section class="q-pa-md row justify-between">
        
                <div class="text-bold">Activity Timeline</div>
                <div>
                    <q-icon name="more_horiz" size="md" color="grey-7">
                        <q-menu>
                            <q-list class="grey-7">
                                <q-item v-for="(submenu,index) in menu" :key="index" clickable>
                                    <div class="row q-gutter-sm items-center">
                                        <q-icon :name="submenu.icon" color="blue-grey-5"></q-icon>
                                        <div class="text-caption text-blue-grey-5">{{ submenu.title }}</div>
                                    </div>


                                </q-item>

                            </q-list>
                        </q-menu>
                    </q-icon>
                </div>
        
        </q-card-section>
        <q-separator inset/>

        <q-card-section class="row">
            <q-list separator >
                <q-item v-for="(item,index) in list" :key="index" >
                    <div>
                        <div><q-img :src="item.image" width="20px"/></div>
                        <div class="text-bold text-blue-grey-7 ">{{ item.title }}</div>
        
                    </div>
                    <div class="row justify-center">
                        <div class="text-caption text-grey">{{ item.caption }}</div>

                    </div>
                </q-item>
            </q-list>


        </q-card-section>
    </q-card>

</template>
<script>
export default{
    name:'MembersActivity',
    data(){
        return{
            menu:[
                {icon:'add',title:'Add'},
                {icon:'delete',title:'Delete'},
                {icon:'refresh',title:'Refresh'}
            ],
            list:[
                {image:'/folder.png',
                 title:'Donald updated the status of Refund #1234 to awaiting customer',
                 caption:'54 min ago'
                },

                {image:'/avtar.png',
                 title:'Design new UI and check sales update Meta4',
                 caption:'10 hours ago'
                },

                {image:'/t-shirt.png',
                 title:'James Bangs (client) meeting Tagus technologies',
                 caption:'yesterday'
                },

                {image:'/cube.png',
                 title:'Joseph Rust opened new showcase Tagus Theme',
                 caption:'14 Feb 2023'
                },

                {image:'/laptop.png',
                 title:'Brust opened new showcase some market',
                 caption:'10 Feb 2023'
                },

            ]

        }
    }
    
}
</script>