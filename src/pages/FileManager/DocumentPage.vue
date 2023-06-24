<template>
    <q-page>
        
        <div class="row">
            <div class="q-pa-md col-3">
                <Drive style="border-radius:10px" />

            </div>
            <div class="q-pa-md col-9 row justify-between q-gutter-md">
                <Documents v-for="(item,index) in cards" :key="index" v-bind="item" />

            </div>

        </div>

    </q-page>

</template>

<script>
import Drive from 'src/components/FileManager/Drive.vue';
import Documents from 'src/components/FileManager/Documents.vue';
export default{
    name:'DocumentPage',
    components:{
        Drive,
        Documents
    },
    data(){
        return{
            cards:[
                {image:"/jpg.png",caption:"sketch-design.zip"},
                {image:"/jpg.png",caption:"Compile.png"},
                {image:"/pdf2.png",caption:"Integrations.pdf"},
                {image:"/txt.png",caption:"contact@32.txt"},
                {image:"/doc.png",caption:"app-Design.doc"},
                {image:"/png.png",caption:"image02.png"},
                {image:"/txt.png",caption:"Annualreport.txt"},
                {image:"/xl4.png",caption:"Wireframes.xl4"},
                {image:"/jpg.png",caption:"contact@32.jpg"},
            ]
        
        }
    }


}
</script>