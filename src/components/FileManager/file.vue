<template>
    <div class="q-pa-md">
        <q-table
        table-header-class="text-bolder text-uppercase bg-blue-1"
        :rows="rows"
        :columns="columns"
        row-key="name"
        >
        <template v-slot:top-left>
            <div class="text-h6">Recent Files</div>
        </template>
        <template v-slot:top-right>
            <q-btn unelevated color="indigo-5">+ Create Folder</q-btn>
    
        </template>
        <q-separator />

        <template v-slot:body-cell-name="props">
            <q-td :props="props">
                <div class="row justify-start">
                    <img src="https://w7.pngwing.com/pngs/763/637/png-transparent-directory-icon-folder-miscellaneous-angle-rectangle-thumbnail.png" style="width:20px;"/>
                    <div class="q-ml-sm">
                        {{ props.value }}
                    </div>
                
                </div>
                
        </q-td>

        </template>
        <template v-slot:body-cell-action="props">
            <td :key="action" :props="props">
                <q-btn text-color="grey-6" color="teal-1" unelevated icon="more_horiz" dense/>
                <q-menu>
                    <q-list class="text-grey-7">
                        <q-item v-for="(item,index) in card" :key="index" clickable>
                            <div class="row items-center q-gutter-xs">
                                <q-icon :name="item.icon" color="blue-3"></q-icon>
                                <div class="text-caption text-blue-4">{{ item.caption }}</div>

                            </div>

                        </q-item>
                    </q-list>
                </q-menu>

            </td>
             
        </template>
    
        </q-table>
    </div>
   
   
</template>



<script>
export default{
    name:'file',
    data(){
        
        return{
            card:[
            {icon:'share',
            caption:'Share'
             },

             {icon:'link',
            caption:'Get Shareable Link'
             },

             {icon:'edit',
            caption:'Rename'
             },

             {icon:'download',
            caption:'Download'
             },

             {icon:'delete',
            caption:'Remove'
             },
            ],
            
            columns:[
                {name:'name', label:'Name', required:true, align:'center', sortable:true, field:row => row.name,format:val=>`${val}` },
                {name:'owner',required:true,align:'left',field:'owner',label:'Owner'},
                {name:'filesize' ,required:'true', align:'center',field:'filesize' ,label:'File Size'},
                {name:'listeddate',required:true, label:'Listed Date',align:'center',field:'listeddate'},
                {name:'fileitem',required:true, label:'File Item',align:'center',field:'fileitem'},
                {name:'action',required:true ,label:'Action',align:'center',field:'action'}
            ],
            rows:[
                {name:'Product UI/UX Design',
                owner:'	Danielle Thompson',
                filesize:'0.7 GB',
                listeddate:'Mar 08, 2023',
                fileitem:'02',
            },
            {name:'App Design & Development',
                owner:'Coder Themes',
                filesize:'	521 MB',
                listeddate:'Feb 13, 2023',
                fileitem:'06',
            },
            {name:'Ubold-sketch-design.zip',
                owner:'Gary Coley',
                filesize:'	64.2 MB',
                listeddate:'Dec 18, 2022',
                fileitem:'03',
            },
            
            {name:'Annualreport.pdf',
                owner:'Cooper Sharwood',
                filesize:'12.5 GB',
                listeddate:'Nov 29, 2022',
                fileitem:'	05',
            },
            
            {name:'Wireframes',
                owner:'Jasper Rigg',
                filesize:'	8.3 MB',
                listeddate:'Nov 25, 2022',
                fileitem:'01',
            },
            
            

            ]
        }
    }
    
}
</script>