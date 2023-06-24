<template>
    <q-page>
        <div class="row">
            <div class="q-pa-md col-3"> 
                <Drive class="q-ma-xs" style="border-radius:10px;"/>

            </div>
            <div class="q-pa-md col-9 row justify-evenly q-gutter-md">
                <Folder  v-for="(item,index) in cards" :key="index" v-bind="item"/>

            </div>

        </div>

    </q-page>

</template>

<script>

import Drive from 'src/components/FileManager/Drive.vue';
import Folder from 'src/components/FileManager/Folder.vue';
export default{
    name:'Projects',
    components:{
        Drive,
        Folder
    },
    data(){
        return{
            cards:[

            {image:"/png.png",
                title:"ET Template",
                files:"387 Files",
                storage:"4.5 GB"
            },
            {image:"/jpg.png",
                title:"React Template",
                files:"1572 Files",
                storage:"7.5 GB"
            },
            {image:"/txt.png",
                title:"Material UI",
                files:"12341 Files",
                storage:"2.8 GB"
            },
            {image:"/pdf2.png",
                title:"WP Themes",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/xl4.png",
                title:"Personal Photos",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/doc.png",
                title:"Mobile Apps",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/pdf2.png",
                title:"Important Files",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/png.png",
                title:"Angular Template",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/jpg.png",
                title:"Projects",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/doc.png",
                title:"Documents",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/doc.png",
                title:"Media",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/png.png",
                title:"Applications",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            

            ]
        }
    }
}
</script>