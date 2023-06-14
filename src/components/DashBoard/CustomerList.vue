<template>
    <div class="q-pa-md">
        <q-card class="flat-bordered" style="width:350px">
            <q-card-section class="q-pt-xs row justify-between">
                <div class="text-h6">New Customers</div>
                <q-btn flat round dense icon="more_vert" />
              </q-card-section>
              <q-separator inset /> 

              <q-card-section>
                <q-list>
                    <q-item v-for="(item , index) in cards" :key="index">
                        <q-item-section top avatar>
                          <q-avatar>
                            <q-img :src="item.image"/> 
                          </q-avatar>
                        </q-item-section>
                        <div class="row justify-between">
                          <q-item-section>
                            <q-item-label>{{ item.label }}</q-item-label>
                            <q-item-label caption>{{ item.caption }}
                            </q-item-label>
                          </q-item-section>
                          <q-item-section>
                            <div class="text-6">{{ item.content }}</div>
                          </q-item-section>
                         </div>
                       <q-item-section side top text-center>
                       <q-badge color="teal" label="15 Orders" />
                        </q-item-section>
                      </q-item>
                     <q-separator inset />
                      
                     
                     
                      </q-list>
                     
              </q-card-section>

             
        </q-card>
    </div>

</template>

<script>
import { data } from 'autoprefixer';

export default({
    name:'CustomerList',
    data(){
      return{
        cards:[
          {
          image:"/user12.jpg",
          label:"Jordan Stevenson",
          caption:"@jstevenson5c",
          content:"$289.50"
        },
        {
          image:"/user11.jpg",
          label:"Lydia Reese",
          caption:"@lreese3b",
          content:"$999.99"
        },
        {
          image:"/user11.jpg",
          label:"Anty Rodes",
          caption:"@antyrodes32",
          content:"$1000.00"
        },
        {
          image:"/user11.jpg",
          label:"David Warner",
          caption:"@davidwarner32",
          content:"$198.00"
        },


          
          

        ]

      }
    }
})
</script>