<template>
    <q-card flat >
        <q-card-section separator class="row justify-between items-center">
            <div>
                <div class="text-bold text-blue">{{ heading }}</div>
            </div>
            <div>
                <q-icon name="more_horiz" size="md" color="grey">
                    <q-menu>
                        <q-list class="text-grey-7">
                            <q-item clickable v-for="(submenu,index) in menu" :key="index">
                                <div class="row q-gutter-sm">
                                    <div>
                                        <q-icon :name="submenu.icon"></q-icon>
                                    </div>
                                    
                                    <div>
                                        <div class="text-caption">{{ submenu.label }}</div>
                                    </div>

                                </div>

                            </q-item>
                        </q-list>
                    </q-menu>

                </q-icon>
            </div>
            
        </q-card-section>
     <q-separator />

        <q-card-section class="q-pa-md text-center">
            <q-avatar size="132px"> 
                <q-img :src="image" />
            </q-avatar>
        </q-card-section>

        <q-card-section>
            <div class="q-pa-md text-center">
                <div class="text-caption text-grey" style="font-size:15px;">{{ name}}</div>
                <div class="row q-gutter-xs items-center justify-center">
                    <q-icon :name="icon" color="grey"></q-icon>
                    <div class="text-caption text-grey" style="font-size:15px;">{{ contact }}</div>
                </div>
                <div class="row q-gutter-xs items-center justify-center">
                    <q-icon :name="icon1" color="grey"></q-icon>
                    <div class="text-caption text-grey" style="font-size:15px;">{{ email }}</div>

                </div>

            </div>
    

        </q-card-section>
        

    </q-card>

</template>
<script>
export default{
    name:'MembersGrid2',
    props:['heading','image','name','icon','contact','icon1', 'email'],
    data(){
        return{


            menu:[
                {icon:'add', label:'Add'},
                {icon:'refresh', label:'Refresh'},
                {icon:'delete', label:'Remove'},
            ]
        }
    }
}
</script>