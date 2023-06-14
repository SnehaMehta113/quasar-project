<template>
    <div class="q-pa-md">
        <q-card class="flat-bodered">
            <q-card-section class="row justify-between">
                <div class="text-h6">Documents</div>
                <div><q-btn color="primary" label="+ Create Documents" text-color="white" /></div>
            </q-card-section>
            <div class="row justify-evenly">
                <q-card-section class="flat bordered bg-grey-3 q-ma-md q-pa-md" style="width:200px;height:150px;border-radius:10px;cursor:pointer;" v-for="(item,index) in cards" :key="index">
                    <div class="text-center">
                        <img :src="item.image"/>
                        <div class="text-6 text-primary">{{ item.caption }}</div>
    
                    </div>
    
                </q-card-section>

            </div>
            

        </q-card>

    </div>

</template>


<script>
export default{
    name:'Documents',
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