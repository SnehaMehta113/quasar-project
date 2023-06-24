<template>
    <q-page>
        <div class="row">
            <div class="q-pa-md row justify-evenly q-gutter-md" >
                <MembersGrid2 class="q-pa-md" style="width:350px; height:350px; border-radius=10px;" v-for="(item,index) in cards" :key="index" v-bind="item"/>
            </div>

        </div>

    </q-page>

</template>

<script>
import MembersGrid2 from 'src/components/ContactList/MembersGrid2.vue';

export default{
    name:'MembersGrid',
    components:{
        MembersGrid2
    },

    data(){
        return{
            cards:[
                { heading:'Alvarado Turner',
                  image:'https://tagus-admin.envytheme.com/assets/img/user/user12.jpg',
                  name:'@alvaradoturner',
                  icon:'call',
                  contact:'+9003526765',
                  icon1:'email',
                 email:'alvaradoturner@tagus.com'},

                 { heading:'Evangelina Mcclain',
                  image:'https://tagus-admin.envytheme.com/assets/img/user/user13.jpg',
                  name:'@evangelinamcclain',
                  icon:'call',
                  contact:'++9003526765',
                  icon1:'email',
                 email:'evangelinamcclain@tagus.com'},

                 { heading:'Candice Munoz',
                  image:'https://tagus-admin.envytheme.com/assets/img/user/user11.jpg',
                  name:'@candicemunoz',
                  icon:'call',
                  contact:'+9003526765',
                  icon1:'email',
                 email:'candicemunoz@tagus.com'},

                 { heading:'Bernard Langley',
                  image:'https://tagus-admin.envytheme.com/assets/img/user/user14.jpg',
                  name:'@bernardlangley',
                  icon:'call',
                  contact:'+9003526765',
                  icon1:'email',
                 email:'bernardlangley@tagus.com'},

                 { heading:'Kristie Hall',
                  image:'https://tagus-admin.envytheme.com/assets/img/user/user8.jpg',
                  name:'@kristiehall',
                  icon:'call',
                  contact:'+9003526765',
                  icon1:'email',
                 email:'kristiehall@tagus.com'},

                 { heading:'Bolton Obrien',
                  image:'https://tagus-admin.envytheme.com/assets/img/user/user23.jpg',
                  name:'@boltonobrien',
                  icon:'call',
                  contact:'+9003526765',
                  icon1:'email',
                 email:'boltonobrien@tagus.com'},

                 { heading:'Dee Alvarado',
                  image:'https://tagus-admin.envytheme.com/assets/img/user/user18.jpg',
                  name:'@Dee Alvarado',
                  icon:'call',
                  contact:'+9003526765',
                  icon1:'email',
                 email:'DeeAlvarado@tagus.com'},

                 { heading:'Candice Munoz',
                  image:'https://tagus-admin.envytheme.com/assets/img/user/user11.jpg',
                  name:'@candicemunoz',
                  icon:'call',
                  contact:'+9003526765',
                  icon1:'email',
                 email:'candicemunoz@tagus.com'},

                 { heading:'Candice Munoz',
                  image:'https://tagus-admin.envytheme.com/assets/img/user/user11.jpg',
                  name:'@candicemunoz',
                  icon:'call',
                  contact:'+9003526765',
                  icon1:'email',
                 email:'candicemunoz@tagus.com'},
],
        }
    }
}
</script>