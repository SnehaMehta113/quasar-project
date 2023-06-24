<template>
    <div class="q-pa-md">
        <q-card>
            <div class="text-bold q-pa-md">New Email</div>
            <separator />
            <q-card-section>
                <div class="q-mb-md">
                    <q-input v-model="text" outlined placeholder="To"/>
                </div>
                <div>
                    <q-input v-model="text" outlined placeholder="Subject"/>
                </div>
                 </q-card-section>

                 <q-card-section style="border-radius=20px">
                    
                        <q-input
                      @update:model-value="val => { file = val[0] }"
                      outlined
                      type="file"
                    /> 
                </q-card-section>

                <q-card-section>
                    <div class="row q-gutter-md q-pa-md">
                        <div> <q-btn color="primary">Send</q-btn></div>
                        <div> <q-btn color="red">Discard</q-btn></div>

                    </div>
                </q-card-section>
            

        </q-card>

    </div>

</template>


<script>
export default{
    name:'ComposeEmail'
}
</script>