<template>
    <div class="q-pa-md">
        <q-card>
            <q-card-section>
                <div class="col text-center full-width">
                    <q-btn flat-bordered class="bg-blue-5 full-width">Compose</q-btn>
                </div>
            </q-card-section>
            <div v-for="menu, name of sidemenu">
                <div class="q-pa-md text-caption text-grey text-bold font-size-lg text-uppercase"> {{ name }}</div>

                <div>
                    <q-list v-for="(item, index) in menu" :keys="index">
                        <q-item>
                            <div class="row justify-between full-width">
                                <div class="row items-center q-gutter-md">
                                    <q-icon :name="item.icon" class="text-grey"></q-icon>
                                    <div class="text-bold text-blue">{{ item.label }}</div>
                                </div>
                                <div>
                                    <div class="text-bold" :class="[item.counterColor ? 'text-'+item.counterColor+'-4' : 'text-grey-5']">{{ item.counter }}</div>
                                </div>
                            </div>
                        </q-item>
                    </q-list>
                </div>
            </div>
        </q-card>

    </div>
</template>


<script>
export default {
    name: 'Compose',
    data() {
        return {
            sidemenu: {
                mailbox: [
                    {
                        icon: 'email',
                        label: 'Inbox',
                        counter: '(23)',
                        counterColor: 'red'
                    },

                    {
                        icon: 'timer',
                        label: 'Snoozed',
                        counter: '4',
                        counterColor: 'teal'
                    },

                    {
                        icon: 'drafts',
                        label: 'Draft',
                        counter: '(08)'
                    },

                    {
                        icon: 'mail',
                        label: 'Sent Mail',
                        counter: '(08)'
                    },

                    {
                        icon: 'delete',
                        label: 'Trash',
                        counter: ''
                    },

                    {
                        icon: 'spa',
                        label: 'Spam',
                        counter: '(04)'
                    },
                ],
                filters: [
                    {icon:'star',
                    label:'Starred'},

                    {icon:'star',
                    label:'Important'},
               
                    
                ],
                labels: [
                    {icon:'local_offer',
                     label:'Personal'},

                     {icon:'local_offer',
                     label:'Company'},

                     {icon:'local_offer',
                     label:'Wallet Balance'},

                     {icon:'local_offer',
                     label:'Friends'},

                     {icon:'local_offer',
                     label:'family'},
                    ]
            },
            


           
        }
    }
}
</script>