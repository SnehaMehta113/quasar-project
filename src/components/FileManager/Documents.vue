<template>
     <q-card flat>
        <q-card-section class="row justify-between">
            <div class="text-h6">Documents</div>
            <div><q-btn color="primary" label="+ Create Documents" text-color="white" /></div>
        </q-card-section>


        <q-card flat class="bg-grey-3 q-pa-md q-ma-md" style="border-radius:10px;" >
            <q-card-section >
                <div class="text-center">
                    <img :src="image"/>
                    <div class="text-6 text-primary">{{ caption }}</div>

                </div>
           </q-card-section>

        </q-card>
        

            
            

        </q-card>


</template>


<script>
export default{
    name:'Documents',
    props:['image','caption'],
    
}
</script>