<template>
    <div class="q-pa-md">
        <div class="row justify-between">
            <div class="text-h6">To Do List</div>
        <div class="row justify-evenly flex-center">
            <q-icon name="home"/>
            <div class="text-caption">DashBoard .</div>
            <div class="text-h6"> To Do List</div>
        </div>
    </div>
</div>
<div class="q-pa-md">
    <q-table
    flat bordered
    :rows="rows"
    :columns="columns"
    row-key="name" 
    selection="multiple"
    v-model:selected="selected"
    >

    <div class="q-mt-md">
        Selected: {{ JSON.stringify(selected) }}
      </div>

    <template v-slot:top-left>
        <div class="text-h6">My Tasks</div>
    </template>
    <template v-slot:top-right>
        <div>
            <q-btn color="primary">+ Add Task</q-btn>
        </div>
    </template>

    <template v-slot:body-cell-taskname="props">
        <td key="taskname" :props="props">
            <div>
                {{ props.value }}
            </div>
        </td>
    </template>
    <template v-slot:body-cell-assigned="props">
        <td key="assigned" :props="props">
            <div class="text-center">
                <img :src="props.row.image" style="width:50px;"/>

            </div>
        </td>
     </template>

     <template v-slot:body-cell-status="props">
        <td key="status" :props="props">
            <div class="text-center text-6 q-ma-sm">
                <q-badge :color="props.row.color">
                    {{ props.value }}
                </q-badge>
                 </div>
                </td>
            </template>

            <template v-slot:body-cell-priority="props">
                <td  :props="props">
                    <div class="text-center">
                        <q-badge color="blue-3">
                            {{ props.value }}
                        </q-badge>
                    </div>
                </td>
             </template>

             <template v-slot:body-cell-action="action">
                <td key="action" :props="props">
                    <div class="text-center">
                        <q-btn icon="more_horiz"></q-btn>
                    </div>

                </td> 

             </template>

    </q-table>
</div>
   
      

</template>

<script>
export default{
    name:'TaskTable',
    data(){
        return{
            columns:[
                {name:'taskname',required:true,label:'Task Name',align:'left',field: row => row.name ,format : val => `${val}`,sortable:true},
                {name:'assigned',required:true, label:'Assigned',align:'center',field:'assigned'},
                {name:'deadline',required:true, label:'DeadLine',align:'center',field:'deadline'},
                {name:'status',required:true, label:'Status', align:'center',field:'status'},
                {name:'completion', required:true, label:'Completion' ,align:'center',field:'completion'},
                {name:'priority',required:true, label:'Priority', align:'center',field:'priority'},
                {name:'action',required:true, label:'Actions',align:'center',filed:'action'}
            ],
            rows:[
                {name:'Public Beta Release',
                image:'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
                deadline:'	14 Mar 2023',
                status:'Ongoing',
                color:'green-3',
                completion:'	10/10',
                priority:'High'
            },

            {name:'Fix Platform Errors',
                image:'https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg',
                deadline:'12 Feb 2023',
                status:'Completed',
                color:'blue-3',
                completion:'9/10',
                priority:'Low'
            },

            {
                name:'Launch our Mobile App',
                image:'https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg',
                deadline:'	10 Mar 2023',
                status:'Ongoing',
                color:'green-3',
                completion:'8/10',
                priority:'High'
            },

            {
                name:'Add the New Pricing Page',
                image:'https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg',
                deadline:'08 Mar 2023',
                status:'Ongoing',
                color:'green-3',
                completion:'7/10',
                priority:'Medium'
            },

            {
                name:'Redesign New Online Shop',
                image:'https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg',
                deadline:'01 Mar 2023',
                status:'Pending',
                color:'red-3',
                completion:'6/10',
                priority:'Low'
            },

            {
                name:'Material Ui Design',
                image:'https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg',
                deadline:'03 Apr 2023',
                status:'Pending',
                color:'red-3',
                completion:'5/10',
                priority:'High'
            },

            {name:'Public Beta Release',
                image:'https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg',
                deadline:'	14 Mar 2023',
                status:'Ongoing',
                color:'green-3',
                completion:'	10/10',
                priority:'High'
            },

            {name:'Public Beta Release',
                image:'https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg',
                deadline:'	14 Mar 2023',
                status:'Ongoing',
                color:'green-3',
                completion:'	10/10',
                priority:'High'
            },

            {name:'Public Beta Release',
                image:'https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg',
                deadline:'	14 Mar 2023',
                status:'Ongoing',
                color:'green-3',
                completion:'	10/10',
                priority:'High'
            },

            {name:'Public Beta Release',
                image:'https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg',
                deadline:'	14 Mar 2023',
                status:'Ongoing',
                color:'green-3',
                completion:'	10/10',
                priority:'High'
            },
            ]
        }
    }

}
</script>