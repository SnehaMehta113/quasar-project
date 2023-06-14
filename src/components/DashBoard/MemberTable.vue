<template>
    <div class="q-pa-md">
        <q-table
        flat bordered
        :rows="rows"
        :columns="columns"
        row-key="name"

        >
            <template v-slot:top-left>
                <div class="text-h6">Team Members List</div>
            </template>
            <template v-slot:top-right>
                <q-btn flat round dense icon="more_vert" />
            </template>
            <template v-slot:body-cell-user="props">
                <td :props="props">
                    <div class="row justify-evenly flex-center">
                         <div><img :src="props.row.image" style="width:50px"/></div>
                        {{ props.value }}
                       

                    </div>
                </td>
             </template>
             <template v-slot:body-cell-role="props">
                <td :key="role" :props="props">
                    <div>
                        <q-icon :name="props.row.icon"/>
                        {{ props.value}}
                    </div>

                </td>

             </template>
             <template v-slot:body-cell-status="props">
                <q-td :props="props">
                  <div class="q-pa-md text-6">
                    <q-badge :color="props.row.color" :label="props.value" />
                  </div>
                 
                </q-td>
              </template>

        

        </q-table>
        
               
            

    </div>

</template>


<script>
export default{
    name:'MemberTable',
    data(){
        return{
            columns:[
                {name:'user', required:true, label:'User',align:'center',field:row => row.name,format:val=>`${val}`,sortable:true},
                {name:'email',required:true, label:'E-Mail',align:'center',field:'email'},
                {name:'role',required:true, label:'Role',align:'center',field:'role'},
                {name:'status', required:true ,label:'Status', align:'center',field:'status'}

            ],
            rows:[
                {
                 name:'Lucile Young',
                 email:'lyoung4a@tagus.com',
                 icon:'editor',
                 role:'Editor',
                 status:'Active',
                 color:'green-3',
                 image:'https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg'
                },
                {
                 name:'Jordan Stevenson',
                 email:'jstevenson5c@tagus.com',
                 icon:'computer',
                 role:'Admin',
                 status:'Inactive',
                 color:'red-3',
                 image:'https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg'
                },
                {
                 name:'Francis Frank',
                 email:'ffrank7e@tagus.com',
                 icon:'align_vertical_bottom',
                 role:'Maintainer',
                 status:'Active',
                 color:'green-3',
                 image:'https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg'
                },
                {
                 name:'Phoebe Patterson',
                 email:'ppatterson2g@tagus.com',
                 icon:'settings_applications',
                 role:'Author',
                 status:'Active',
                 color:'green-3',
                 image:'https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg'
                },
                {
                 name:'James Andy',
                 email:'andyjm32@tagus.com',
                 icon:'computer',
                 role:'Admin',
                 status:'Inactive',
                 color:'red-3',
                 image:'https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg'
                },
                {
                 name:'Sarah Taylor',
                 email:'taylors32@tagus.com',
                 icon:'edit',
                 role:'Editor',
                 status:'Active',
                 color:'green-3',
                 image:'https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg'
                },

            ]

        }
    }
}
</script>