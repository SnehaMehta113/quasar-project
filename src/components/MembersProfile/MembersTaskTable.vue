<template>

    <q-table
    table-header-class="bg-blue-2"
    flat-bordered
    :rows="rows"
    :columns="columns"
    row-key="name"
    selection="multiple"
    v-model:selected="selected"
    >
   
        <template v-slot:top-left>
            <div class="text-bold">My Tasks</div>
        </template>
   
        <template v-slot:top-right>
            <div>
                <q-select v-model="selected" :options="options"></q-select>
            </div>

        </template>

        <template v-slot:body-cell-status="props">
            <q-td :props="props">
                <div>{{props.value}}</div>

            </q-td>

        </template>




   
    

    </q-table>

</template>

<script>

export default{
    name:'MembersTaskTable',
    data(){
        return{
            options:['This Month','This Year' ,'All Year'],
            selected:[],
            columns:[
                {name:'name',required:true ,align:'left',sortable:true ,field:'name',label:'Name'},
                {name:'startdate', required:true , align:'center', field:'startdate',label:'Start Date'},
                {name:'deadline', required:true,align:'center', field:'deadline',label:'Deadline'},
                {name:'status', required:true , align:'center' ,field:'status' ,label:'Status'},
                {name:'budget' ,required:true , align:true ,field:'budget' ,label:'Budget'}

            ],

            rows:[
                {name:'Public Beta Release',
                startdate:'	10 Mar 2023',
                deadline:'14 Mar 2023',
                status:'Active',
                budget:'$1250'},

                {name:'Fix Platform Errors',
                startdate:'	09 Feb 2023',
                deadline:'12 Feb 2023',
                status:'Completed',
                budget:'$999'},

                {name:'Launch our Mobile App',
                startdate:'	03 Mar 2023',
                deadline:'	10 Mar 2023',
                status:'Active',
                budget:'	$287'},

                {name:'Add the New Pricing Page',
                startdate:'	02 Mar 2023',
                deadline:'	8 Mar 2023',
                status:'Active',
                budget:'	$287'},

                {name:'Redesign New Online Shop',
                startdate:'	25 Feb 2023',
                deadline:'01 Mar 2023',
                status:'Pending',
                budget:'	$287'},

                {name:'Material Ui Design',
                startdate:'02 Apr 2023',
                deadline:'	03 Apr 2023',
                status:'Pending',
                budget:'$287'},







            ]
        }
    }
}
</script>