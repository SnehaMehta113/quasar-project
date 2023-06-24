<template>
    <q-card flat style="width:300px; border-radius:10px;">
    
            <q-card-section class="row justify-evenly q-gutter-md">
                <div class="text-center">
                     <div>
                            <q-avatar size="132px"> 
                                <q-img :src="image" />
                            </q-avatar>

        
                    </div>
    
                    <div class="q-my-md">
                        <div class="text-bold text-blue-4" style="font-size:15px;">{{ heading }}</div>
                        <div class="text-caption text-grey" style="font-size:15px;">{{ text}}</div>
                    </div>
                </div>
        </q-card-section>

        <q-card-section>
            <div class="row items-center q-gutter-md justify-center">
                <div><q-btn unelevated color="primary">Message</q-btn></div>
                <div><q-btn unelevated color="grey-5">Projects</q-btn></div>
            </div>

        

        <div class="row justify-between q-my-md ">
          
                <div  v-for="(item,index) in cards" :key="index">
                    <div class="text-caption text-grey" style="font-size:15px;">{{item.caption}}</div>
                    <div class="text-bold text-blue-7" style="font-size:20px;">{{ item.label }}</div>

                </div>


</div>
           
        </q-card-section>
    
        
        

    </q-card>

</template>

<script>
export default{
    name:'MembersGrid',
    props:['image','heading','text'],
    data(){
        return{
            
            cards:[
                {caption:'Post',
                label:'18k'
                },

                {caption:'Followers',
                label:'5.21k'
                },

                {caption:'Followings',
                label:'32k'
                },
            ]
        }
    }

}
</script>