<template>
    <q-page>
        <div class="q-pa-md row justify-between">
            <div class="text-bold">Read Email</div>
            <div class="row">
                <q-icon name="home" class="text-blue"></q-icon><span class="text-caption text-grey q-ml-xs">Dashboard  .</span>
                <div class="text-caption text-blue-2">Email .</div>
                <div class="text-caption"> Read Email</div>
             </div>
            </div>



        <div class="row">
            <div class="col-3">
                <Compose />
           </div>
           <div class="col-9">
            <MailRead />

           </div>

        </div>

    </q-page>

</template>

<script>
import Compose from 'src/components/Email/Compose.vue';
import MailRead from 'src/components/Email/MailRead.vue';
export default{
    name:'ReadEmail',
    components:{
        Compose,
        MailRead
    }
}
</script>