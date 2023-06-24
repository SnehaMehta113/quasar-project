<template>
    <q-card flat class="q-pa-md bg-white">
    <q-layout container view="hHh lpr fFf">
        <q-header class="bg-white">
            <div class="row justify-between" style="border:1px solid rgb(177, 176, 176); border-radius:10px;">
                <div class="row q-pa-md">
                    <div>
                        <q-item-section avatar>
                            <q-avatar><img src="https://cdn.quasar.dev/img/avatar5.jpg" width="50px" round/></q-avatar></q-item-section>
                    </div>

                <div>
                    <div>
                        <div class="text-bold text-grey-8">Laurent Perrier</div>
                        <div><q-badge color="primary" rounded></q-badge><span class="text-caption q-ma-xs text-grey">Active now
                        </span>
                    </div>
                    </div>
                    
                    </div>

                </div>
                <div class="q-pa-md">
                    <div class="row justify-evenly q-gutter-md text-blue-grey-5">
                       <q-btn icon="video_chat" round></q-btn>
                       <q-btn icon="call" round></q-btn>
                       <q-btn icon="more_vert" round>
                        <q-menu>
                            <q-list>
                                <q-item v-for="(submenu,index) in menu" :key="index" clickable>
                                    <div class="row q-gutter-xs">
                                        <div><q-icon :name="submenu.icon" class="text-blue-grey-4"></q-icon></div>
                                        <div class="text-blue-grey-4">{{ submenu.caption }}</div>
                                    </div>
                                </q-item>
                            </q-list>
                        </q-menu>
                       </q-btn>
                    </div>
                    </div>
                </div>

        </q-header>

        <q-page-container >
            <q-page class="bg-teal-1"> 
                           <div class="q-pa-md full-width">

                        <q-chat-message
                          name="me"
                          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                          :text="['hey, how are you?']"
                          stamp="7 minutes ago"
                          sent
                          bg-color="amber-7"
                        />
                        <q-chat-message
                          name="Jane"
                          avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                          :text="[
                            'doing fine, how r you?',
                            'I just feel like typing a really, really, REALLY long message to annoy you...'
                          ]"
                          size="6"
                          stamp="4 minutes ago"
                          text-color="white"
                          bg-color="primary"
                        />
                        <q-chat-message
                        v-for="i in 8"
                          name="Jane"
                          avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                          :text="['Did it work?']"
                          stamp="1 minutes ago"
                          size="8"
                          text-color="white"
                          bg-color="primary"
                        />
                      </div>

             
            </q-page>
            </q-page-container>
            


        <q-footer class="bg-transparent">
            <div class="row justify-between q-pa-sm bg-grey-3" style="border-radius:10px;">
                <div class="row q-pa-xs items-center">
                    <div class="row q-gutter-md items-center">
                        <q-icon size="md" name="mood" color="primary"></q-icon>
                        <q-icon  size="md" name="attachment" color="primary"></q-icon>
                    </div>
                </div>
                <div class="" style="width:400px;">
                    <q-input v-model="text" rounded outlined standout placeholder="Type something....." bg-color="white"  color="grey-9"/>
                </div>
                <div class="q-pa-sm">
                    <q-icon name="send" size="md" color="primary"></q-icon>

                </div> 

            </div>

        </q-footer>

    </q-layout>
          
</q-card>
</template>
<script>
export default{
    name:'ChatPage',
    data(){
        return{
            menu:[
                {icon:'mute',
                caption:'Mute Chat',
                },

                {icon:'delete',
                caption:'Delete',
                },

                {icon:'video_cam_off',
                caption:'Block',
                },


            ]
        }
    }
}
</script>