<template>
    <q-page>
        <div class="q-pa-md">
            <div class="row justify-between">
                <div class="text-bold">Compose Email</div>
                <div class="row q-pl-sm">
                    <q-icon name="home" class="text-blue-5"></q-icon><span class="q-ml-sm text-caption text-blue-2"> Dashboard .</span>
                    <div class="text-bold text-blue"> Compose Email</div>

                </div>

            </div> 

        </div>

 <div class="row">
            <div class="col-3">
                <Compose />
            </div>
            <div class="col-9">
                <ComposeEmail />

            </div>

        </div>

    </q-page>

</template>
<script>
import Compose from 'src/components/Email/Compose.vue';
import ComposeEmail from 'src/components/Email/ComposeEmail.vue';
export default{
    name:'ComposePage',

    components:{
        Compose,
        ComposeEmail

    }
       
    
}
</script>