<template>
    <q-page>
        <div class="row ">
            <div class="q-pa-md col-3">
            <Drive  class="q-ma-xs" style="border-radius:10px;"/>
            </div>
            <div class="col-9">
                <div class="q-pa-md row justify-evenly q-gutter-md">
                <Folder v-for="(item,index) in cards" :key="index" v-bind="item"/>
                </div>

            </div>

        </div>

    </q-page>

</template>

<script>
import Drive from 'src/components/FileManager/Drive.vue';
import Folder from 'src/components/FileManager/Folder.vue';
export default{
    name:'Assets',
    components :{
        Drive,
        Folder

    },
    data(){
        return {
            cards:[
                {image:"/folder.png",
                title:"ET Template",
                files:"387 Files",
                storage:"4.5 GB"
            },
            {image:"/folder.png",
                title:"React Template",
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
            },
            {image:"/folder.png",
                title:"Applications",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/folder.png",
                title:"Applications",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/folder.png",
                title:"ET Template",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/folder.png",
                title:"React Template",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/folder.png",
                title:"Material UI",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/folder.png",
                title:"WP Themes",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/folder.png",
                title:"Personal Photos",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/folder.png",
                title:"Mobile Apps",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/folder.png",
                title:"Important Files",
                files:"2487 Files",
                storage:"5.0 GB"
            },
            {image:"/folder.png",
                title:"Angular Template",
                files:"2487 Files",
                storage:"5.0 GB"
            },

            {image:"/folder.png",
                title:"Angular Template",
                files:"2487 Files",
                storage:"5.0 GB"
            },

            {image:"/folder.png",
                title:"Angular Template",
                files:"2487 Files",
                storage:"5.0 GB"
            },

            

            ]
        }
    }
}
</script>