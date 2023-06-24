<template>
    <q-page>
        <div class="row">
            <div class="col-3 q-pa-md">
                <Drive />

            </div>
            <div class="col-9">
                <file />

            </div>

        </div>

    </q-page>

</template>


<script>
import Drive from 'src/components/FileManager/Drive.vue';
import file from 'src/components/FileManager/file.vue';
export default{
    name:'Templates',
    components:{
        Drive,
        file

    }

}
</script>