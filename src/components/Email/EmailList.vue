<template>
    <div class="q-pa-md">
        <q-table
        :grid="$q.screen.xs"
        title="Email list"
        flat-bordered
        :rows="rows"
        :columns="columns"
        row-key="name"
        selection="multiple"
        v-model:selected="selected"
        separator="horizontal"
        hide-header>

        <template v-slot:top-right>
            <div class="q-gutter-sm">
                <q-btn icon="print" class="text-blue-5"></q-btn>
                <q-btn icon="spa" class="text-blue-5"></q-btn>
                <q-btn icon="delete" class="text-blue-5"></q-btn>
                <q-btn icon="topic" class="text-blue-5"></q-btn>
                <q-btn icon="more_vert" class="text-blue-5">
                    <q-menu>
                        <q-list class="text-grey-7">
                            <q-item>
                                <div>
                                    <q-icon name="add"></q-icon><span class="q-ml-xs">Add</span>
                                </div>

                            </q-item>

                            <q-item>
                                <div>
                                    <q-icon name="delete"></q-icon><span class="q-ml-xs">Delete</span>
                                </div>

                            </q-item>

                            <q-item>
                                <div>
                                    <q-icon name="refresh"></q-icon><span class="q-ml-xs">Refresh</span>
                                </div>

                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
                
            </div>

        </template>

        <template v-slot:body-cell-icon="props">
            <td key="icon" :props="props">
                <div>
                    <q-icon :name="props.row.icon"></q-icon>
    
                </div>
            </td>
         </template>

        </q-table>
    </div>

</template>
<script>
export default{
    name:'EmailList',
    data(){
        return{
            selected:[],
            columns:[
                { name: 'icon',
                 required: true,
                 label: 'Dessert (100g serving)',
                 align: 'left',
                   field: row => row.name,
                format: val => `${val}`,
                   sortable: true},

                  { name: 'name', label: 'Name', field: 'name', sortable: true, align: 'left' },
                  { name: 'info', label: 'info', field: 'info', align: 'left' },
                  {name:'date' ,label:'Date', field:'date', align: 'center'}
            ],
            rows:[
                {icon:'star',
                name:"Benthon, me (3)",
                info:'Hello – Trip home from 🎉 Colombo has been arranged, then Jenna will com...',
                date:'	14 Feb 2023'},

                {icon:'star',
                name:'Lucas Kriebel (via Twitter)',
                info:'Last pic over my village – Yeah id like that! Do you remember the video som..',
                date:'	13 Feb 2023'},

                {icon:'star',
                name:"Andrew Zimmer",
                info:'	Mochila Beta: Subscription Confirmed – Youve been confirmed! Welcome toHello – Trip home from 🎉 Colombo has been arranged, then Jenna will com...',
                date:'		12 Feb 2023'},

                {icon:'star',
                name:"	Infinity HR",
                info:'You have been confirmed! Welcome to the ruling class of the inbox. For your',
                date:'11 Feb 2023'},

                {icon:'star',
                name:"me, keter (4)",
                info:'Hello – Trip home from 🎉 Colombo has been arranged, then Jenna will com...',
                date:'	10 Feb 2023'},
                {icon:'star',
                name:"me, keter (4)",
                info:'Hello – Trip home from 🎉 Colombo has been arranged, then Jenna will com...',
                date:'	10 Feb 2023'},
                {icon:'star',
                name:"me, keter (4)",
                info:'Hello – Trip home from 🎉 Colombo has been arranged, then Jenna will com...',
                date:'	10 Feb 2023'},
                {icon:'star',
                name:"me, keter (4)",
                info:'Hello – Trip home from 🎉 Colombo has been arranged, then Jenna will com...',
                date:'	10 Feb 2023'},
            ]
        }
    }



}
</script>