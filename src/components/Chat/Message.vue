<template>
 <q-card flat>
            <q-card-section>
                <div class="text-bold"> Messages</div>
                <div class="q-mt-sm full-width">
                    <q-input v-model="text" rounded standout placeholder="Search Here.......">
                    <template v-slot:append>
                        <q-icon name="search" olor="blue"></q-icon>
                    </template>
                </q-input>
                </div>
            </q-card-section>

            <q-card-section>
                <div class="row">
                    <div><q-icon name="push_pin" color="grey"></q-icon></div>
                    <div class="text-bold text-grey q-ml-xs">PINNED</div>
                </div>
                <q-list separator>
                    <q-item v-for="(item,index) in card" :key="index" class="q-px-none">
                        <q-item-section avatar>
                            <q-avatar ><img width="40px" :src="item.image"></q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <div class="row justify-between full-width">
                                <div class="col">
                                 <div class="text-bold">{{ item.heading }}</div>
                                 <div class="text-bold text-green">{{ item.caption }}</div>
                             </div>
                             <div class="column items-end q-px-sm">
                                 <div class="text-grey">{{ item.time }}</div>
                                 <div>
                                    <q-icon v-if="item.last_message_sent === 'pending'" name="schedule"></q-icon>
                                    <q-icon v-else-if="item.last_message_sent === 'sent'" name="mdi-check"></q-icon>
                                    <q-icon v-else-if="item.last_message_sent === 'delivered'" name="mdi-check-all"></q-icon>
                                    <q-badge v-else-if="item.unread_messages> 0 && item.last_message_sent==='read'" rounded color="blue" :label="item.unread_messages" />
                                    
                                    <q-icon v-else-if="item.last_message_sent === 'read'" color="primary" name="mdi-check-all"></q-icon>
                                    </div>
                             </div>
                         </div>
                        </q-item-section>
                        
                        
                    </q-item>
                   
                </q-list>
            </q-card-section>

        </q-card>

</template>

<script>

export default{
    name:'Message',
    data(){
        return{
            card:[
                {image:"/user12.jpg",
                 heading:'Laurent Perrier',
                 caption:'Typing...',
                 time:'4:30 PM',
                  unread_messages:'2',
                  last_message_sent: 'pending'
                  
                },

                  {image:"/user12.jpg",
                 heading:'Nunez Faulkner',
                 caption:'Hello everyone ...',
                 time:'9:36 AM',
                  unread_messages:'',
                  last_message_sent: 'delivered'},


                {image:"/user12.jpg",
                 heading:'Bernard Langley',
                 caption:'That cool, go for it...',
                 time:'7:18 PM',
                  unread_messages:'',last_message_sent: 'read'},


                  {image:"/user12.jpg",
                 heading:'Edwards Mckenz',
                 caption:'Great ! 🔥',
                 time:'08:30 PM',
                  unread_messages:'',
                  last_message_sent: 'sent'},                 

                  {image:"/user12.jpg",
                 heading:'Edwards Mckenz',
                 caption:'Great ! 🔥',
                 time:'08:30 PM',
                 unread_messages:2,
                  last_message_sent: 'read'},        
                  {image:"/user12.jpg",
                 heading:'Edwards Mckenz',
                 caption:'Great ! 🔥',
                 time:'08:30 PM',
                 unread_messages:5,
                  last_message_sent: 'read'},        
                  {image:"/user12.jpg",
                 heading:'Edwards Mckenz',
                 caption:'Great ! 🔥',
                 time:'08:30 PM',
                  unread_messages:''},        
                  {image:"/user12.jpg",
                 heading:'Edwards Mckenz',
                 caption:'Great ! 🔥',
                 time:'08:30 PM',
                  unread_messages:''},        
                  {image:"/user12.jpg",
                 heading:'Edwards Mckenz',
                 caption:'Great ! 🔥',
                 time:'08:30 PM',
                  unread_messages:''},        
                  {image:"/user12.jpg",
                 heading:'Edwards Mckenz',
                 caption:'Great ! 🔥',
                 time:'08:30 PM',
                  unread_messages:''},        
            ]
        }
    }

}
</script>