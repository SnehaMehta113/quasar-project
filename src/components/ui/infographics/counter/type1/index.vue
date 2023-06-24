<template>
    <q-card class="bg-white">
     
        <div class="row">
            <div class="q-pa-sm q-ma-md">
                <counter-icon  size="52px" :name="icon"></counter-icon>
            </div>
            <div class="col column q-pa-sm q-ma-md">
                    <div class="text-capion text-blue-7">
                        {{ title }}
                    </div>
                    <div class="text-bold" style="font-size:20px;">
                        {{ value }}
                    </div>
            </div>
        </div>
    </q-card>
</template>
<script>
import counterIcon from './counter-icon.vue'
export default {
    components :{counterIcon},
     props: ['title', 'value', 'icon'],
}
</script>