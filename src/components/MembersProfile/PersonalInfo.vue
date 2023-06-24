<template>
    <q-card>
        <q-card-section>
            <div class="text-bold q-pa-sm">Personal Information</div>

        </q-card-section>
        <q-separator inset/>

        <q-card-section>
            <div class="text-bold q-pa-sm">About Me:</div>
            <div class="q-pa-sm"><p>Hi I'm Andrew Burns, has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a industry.</p></div>
        </q-card-section>

        <q-card-section>
            <q-list separator>
                <q-item v-for="(item,index) in list" :key="index" class="row justify-between">
                    <div class="text-bold">{{ item.title }}</div>
                    <div class="text-caption text-grey">{{ item.caption }}</div>

                </q-item>
            </q-list>

        </q-card-section>
    </q-card>

</template>

<script>

export default{
    name:'PersonalInfo',
    data(){
        return{
            list:[
                {title:'Full Name:', caption:'Andrew Burns'},
                {title:'Mobile:', caption:'(123) 123 1234'},
                {title:'Email:', caption:'andrewburns@tagus.com'},
                {title:'Location:', caption:'New York, USA'},
                {title:'Designation:', caption:'Backend Developer'},
                {title:'Experience:', caption:'5 Years'},

                
            ]
        }
    }

}
</script>