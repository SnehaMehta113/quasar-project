<template>
    <q-page>
        <div class="q-pa-md">
            <BreadCrumb />
    
        </div>
    
           

    
        <div class="row">
            <div class="q-pa-sm" >
                <q-scroll-area style="width:320px;height:75vh">
                    <Message />
                </q-scroll-area>
                

            </div>
            <div class="q-pa-sm col-8">
                
                    <ChatPage style="height:600px"/>
                

            </div>

        </div>

    </q-page>

</template>

<script>
import BreadCrumb from 'src/components/DashBoard/BreadCrumb.vue';
import Message from 'src/components/Chat/Message.vue';
import ChatPage from 'src/components/Chat/ChatPage.vue';

export default{
    name:'Chat',
    components:{
        BreadCrumb,
        Message,
        ChatPage
    }
}
</script>