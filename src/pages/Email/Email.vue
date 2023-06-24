<template>
    <q-page>
        <div class="q-pa-md">
            <div class="row justify-between">
                <div class="text-h6">Inbox</div>
                 <div class="row">
                <q-icon name="home" class="q-mt-xs text-blue-5"></q-icon><span class="text-blue-3 q-ml-xs">Dashboard .</span>
                <div class="text-caption text-grey q-ml-xs"> Email .</div>
                <div class="text-caption q-ml-xs"> Inbox </div>
                </div>
        </div>
    
        </div>
        
        <div class="row"> 
            <div class="col-3">
                <Compose />
            </div>
            <div class="col-9">
                <EmailList />

            </div>

        </div>
        
    </q-page>
</template>


<script>

import { defineComponent } from 'vue'
import Compose from 'src/components/Email/Compose.vue';

import EmailList from 'src/components/Email/EmailList.vue';


export default{
    name:'Email',
    components:{
        Compose,
        EmailList

    }
}
</script>