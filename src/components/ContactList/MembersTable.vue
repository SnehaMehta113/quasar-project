<template>
    <q-table
    table-header-class="bg-blue-grey-1 q-pa-md"
    flat-bordered
    :rows="rows"
    :columns="columns"
    row-key="email"
    selection="multiple"
    v-model:selected="selected">
  

    <template v-slot:top-left>
        <div class="text-bold q-pa-md">User List</div>
    </template>
    <template v-slot:top-right>
        <div class="q-pa-md"> <q-btn color="primary">+ Create New User</q-btn></div>

    </template>

    <template v-slot:body-cell-name="props">
        <td :key="name" :props="props">
            <div class="row q-pa-md">
                <img rounded :src="props.row.image" style="width:50px;"/>
                  {{ props.value }}
                <div class="col q-ma-xs">
                    <div class="text-bold">{{ props.row.user }}</div>
                    <div class="text-caption text-grey" :caption="props.row.caption">{{ props.row.caption }}</div>
                </div>
            </div> 

        </td>

    </template>

    <template v-slot:body-cell-tags="props">
        <q-td :props="props">
            <div class="row q-gutter-sm">
                
                 <button-hover v-for="tag in props.value" :label="tag"/>
                   
                 </div>
                </q-td>
    </template>

    <template v-slot:body-cell-action="props">
        <td key="action" :props="props">
            <div>
                <q-btn text-color="grey-6" color="teal-1" unelevated icon="more_horiz" dense/>
                <q-menu>
                    <q-list class="text-grey-7">
                        <q-item v-for="(submenu,index) in menu" :key="index" clickable>
                            <div class="row items-center q-gutter-xs">
                                <q-icon :name="submenu.icon" color="blue-3"></q-icon>
                                <div class="text-caption text-blue-4">{{ submenu.caption }}</div>

                            </div>

                        </q-item>

                    </q-list>

                </q-menu>

            </div>

        </td>

    </template>

    </q-table>
    
</template>

<script>
import ButtonHover from 'components/ui/button-hover.vue'

export default{
    name:'MembersTable',
    components: {ButtonHover},
    data(){
        return{
            selected:[],

            menu:[
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
                {name:'name',required:true, label:'Name',sortable:true, align:'left' },
                {name:'email',required:true,label:'Email',field:'email',align:'center'},
                {name:'tags',required:true ,label:'Tags', field:'tags',align:'center'},
                {name:'projects',required:true, label:'Projects',field:'projects',align:'left'},
                {name:'action' ,required:true, label:'Action' ,field:'action' ,align:'left'}
            ],
            rows:[
               {image:'https://tagus-admin.envytheme.com/assets/img/user/user12.jpg',
               user:'Evangelina Mcclain',
               caption:'@evangelinamcclain',
               email:'evangelinamcclain@tagus.com',
               tags:['HTMl', 'CSS', 'Sass'],
               projects:'165'},
               
               {image:'https://tagus-admin.envytheme.com/assets/img/user/user13.jpg',
               user:'Candice Munoz',
               caption:'@candicemunoz',
               email:'candicemunoz@tagus.com',
               tags:['HTML'],
               projects:'99'},

               {image:'https://tagus-admin.envytheme.com/assets/img/user/user11.jpg',
               user:'Candice Munoz',
               caption:'@Candice Munoz',
               email:'	CandiceMunoz@tagus.com',
               tags:['HTML', 'CSS'],
               projects:'24'},

               {image:'https://tagus-admin.envytheme.com/assets/img/user/user8.jpg',
               user:'Bernard Langley',
               caption:'@bernardlangley',
               email:'	bernardlangley@tagus.com',
               tags:['HTML', 'CSS'],
               projects:'24'},

               {image:'https://tagus-admin.envytheme.com/assets/img/user/user11.jpg',
               user:'Bernard Langley',
               caption:'@bernardlangley',
               email:'	bernardlangley@tagus.com',
               tags:['HTML', 'CSS'],
               projects:'24'},

               {image:'https://tagus-admin.envytheme.com/assets/img/user/user11.jpg',
               user:'Bernard Langley',
               caption:'@bernardlangley',
               email:'	bernardlangley@tagus.com',
               tags:['HTML', 'CSS'],
               projects:'24'},

               {image:'https://tagus-admin.envytheme.com/assets/img/user/user11.jpg',
               user:'Bernard Langley',
               caption:'@bernardlangley',
               email:'	bernardlangley@tagus.com',
               tags:['HTML', 'CSS'],
               projects:'24'},

            
               
               
            
            ]
        }
    }
}
</script>