<template>
    <div class="q-pa-md">
        <div class="row justify-between">
            <div class="text-h6">Contacts</div>
            <div class="row justify-evenly flex-center">
                <q-icon name="home"/>
                <div class="text-caption">DashBoard .</div>
                <div class="text-h6">Contacts</div>
            </div>
        </div>
    </div>

    <div class="q-pa-md">
        <q-table 
        
        table-header-class="text-bolder text-uppercase bg-grey-5"
        flat-bordered
        :rows="rows"
        :columns="columns"
        row-key="name"
        selection="multiple"
        v-model:selected="selected"
        separator="vertical"
        >
        
        

        <template v-slot:top>
            <div class="row full-width">
                <q-input class="col" color="grey-3" label-color="orange" outlined v-model="text" placeholder="Filter">
                    <template v-slot:append>
                      <q-icon name="search" color="orange" full-width></q-icon>
                    </template>
                  </q-input>

            </div>
        </template>

        <template v-slot:body-cell-image="props">
            <td key="assigned" :props="props">
                <div class="text-center">
                    <img :src="props.row.image" style="width:50px;"/>
    
                </div>
            </td>
         </template>
</q-table>
</div>

</template>

<script>
export default{
    name:'ContactTable',
    data(){
        return{
            selected: [],
            columns:[
                {name:'image',required:true,align:'center',label:'Image'},
                {name:'name', label:'Name', required:true, align:'left', sortable:true, field:row => row.name,format:val=>`${val}`, },
                {name:'phonenumber',required:true,align:'center',field:'phonenumber',label:'Phone Number'},
                {name:'email' ,required:'true', align:'center',field:'email' ,label:'Email'},
                {name:'dateofbirth',required:true, label:'Date Of Birth',align:'center',field:'dateofbirth'},
                {name:'address',required:true, label:'Address',align:'center',field:'address'},
                
            ],
            rows:[
                {image:'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
                name:'Alvarado Turner',
                phonenumber:	'+754-3010764',
                email:'alvaradoturner@tagus.com',
                dateofbirth:'02/25/1990',
                address:'Kansas 67701, USA'
            },
            {image:'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
                name:'Evangelina Mcclain',
                phonenumber:	'+123-3010764',
                email:'evangelinamcclain@tagus.com',
                dateofbirth:'	21/12/1990',
                address:'Colby 9XJ6+46, USA'
            },
            {image:'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
                name:'	Candice Munoz',
                phonenumber:	'	+212-3010764',
                email:'candicemunoz@tagus.com',
                dateofbirth:'	17/05/1990',
                address:'	9WPV+3Q Kansas, USA'
            },
            {image:'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
                name:'	Bernard Langley',
                phonenumber:	'+321-3010764',
                email:'	bernardlangley@tagus.com',
                dateofbirth:'		10/08/1990',
                address:'	Manitoba, Canada'
            },
            {image:'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
                name:'	Kristie Hall',
                phonenumber:	'+432-3010764',
                email:'kristiehall@tagus.com',
                dateofbirth:'03/06/1990',
                address:'V8QC+Q9 Brochet, Canada'
            },
            {image:'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
                name:'	Bolton Obrien',
                phonenumber:	'+342-3010764',
                email:'boltonobrien@tagus.com',
                dateofbirth:'	11/06/1990',
                address:'Jeollanam-do, South Korea'
            },
            {image:'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
                name:'Dee Alvarado',
                phonenumber:	'+543-3010764',
                email:'deealvarado@tagus.com',
                dateofbirth:'10/10/1990',
                address:'Krasnoyarsk Krai, Russia'
            },
            {image:'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
                name:'	Cervantes Kramer',
                phonenumber:	'+111-3010764',
                email:'cervanteskramer@tagus.com',
                dateofbirth:'	02/12/1990',
                address:'Laattaouia 43100, Morocco'
            },
            ]
        }
    }
}
</script>