<template>
    <q-page>
        <div class="row">
            <div class="q-pa-md row justify-evenly q-gutter-md">
                <MembersGrid class="col-12 q-pa-md" style="border-radius:10px;width:350px; height:420px;" v-for="(item,index) in cards" :key="index" v-bind="item"/>

            </div>

        </div>

    </q-page>

</template>

<script>
import MembersGrid from 'src/components/ContactList/MembersGrid.vue';
 export default{
    name:'Members',
    components:{
        MembersGrid
    },
    data(){
        return{
            cards:[
                {image:'https://tagus-admin.envytheme.com/assets/img/user/user12.jpg',
                 heading:'Alvarado Turner',
                 text:'@alvaradoturner'
                },
                {image:'https://tagus-admin.envytheme.com/assets/img/user/user13.jpg',
                 heading:'Evangelina Mcclain',
                 text:'@evangelinamcclain'
                },
                {image:'https://tagus-admin.envytheme.com/assets/img/user/user11.jpg',
                 heading:'Candice Munoz',
                 text:'@candicemunoz'
                },
                {image:'https://tagus-admin.envytheme.com/assets/img/user/user14.jpg',
                 heading:'Bernard Langley',
                 text:'@bernardlangley'
                },
                {image:'https://cdn.quasar.dev/img/avatar3.jpg',
                 heading:'Alvarado Turner',
                 text:'@alvaradoturner'
                },
                {image:'https://cdn.quasar.dev/img/avatar3.jpg',
                 heading:'Alvarado Turner',
                 text:'@alvaradoturner'
                },
                {image:'https://cdn.quasar.dev/img/avatar3.jpg',
                 heading:'Alvarado Turner',
                 text:'@alvaradoturner'
                },
                {image:'https://cdn.quasar.dev/img/avatar3.jpg',
                 heading:'Alvarado Turner',
                 text:'@alvaradoturner'
                },
                {image:'https://cdn.quasar.dev/img/avatar3.jpg',
                 heading:'Alvarado Turner',
                 text:'@alvaradoturner'
                },
            ],
        }
    }

 }
</script>