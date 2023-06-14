<template>
    <div class="q-pa-md">
        <q-card class="flat bordered">
            <q-card-section class="row justify-between">
                <div class="text-h6">Best Selling Products
                </div>
                <div class="flex flex-center">
                    <q-icon name="arrow_drop_down"/>
                    <div class="text-2">Last 7 Days</div>
                </div>

            </q-card-section>
            <q-separator inset />
            <q-scroll-area class="full-width flex flex-center" style="height:350px;">
                <q-list class="q-pa-md">
                    <div class="column no-wrap">
                        <q-item class="row items-center q-gutter-lg no-wrap"  v-for="(item,index) in list"  :key="index">
                            <div><q-item-section avatar>
                                <q-avatar rounded>
                                    <img  :src="item.image"/>
                                </q-avatar>
                             </q-item-section></div>
                             <div><q-item-section>
                                <q-item-label>{{ item.title }}</q-item-label>
                                <q-item-caption text-primary>{{ item.id }}</q-item-caption>
                            </q-item-section></div>
                            <div><q-item-section>
                                    <q-item-caption>{{ item.price }}</q-item-caption>
                                 </q-item-section></div>
                                 <div><q-item-section>
                                    <q-item-label><span> (550)</span>{{ item.label }}</q-item-label>
                                 </q-item-section></div>
                                 <div><q-item-section>
                                    <q-item-label>{{ item.stock }}</q-item-label>
                                 </q-item-section></div>
                                </q-item>
                            </div>
                    </q-list>
                 </q-scroll-area>
                

            

            
          </q-card>
         </div>
    

</template>

<script>
export default{
    name:'ProductTable',
    data(){
        return{
            list:[
                {image:"/product8.jpg",
                  title:"Airpod",
                  id:"ID:A352",
                  price:"$289.50",
                  label:"450",
                  stock:"Stock"},

                  {image:"/product5.jpg",
                  title:"Airpod",
                  id:"ID:A352",
                  price:"$289.50",
                  label:"450",
                  stock:"Stock"},

                  {image:"/product16.jpg",
                  title:"Airpod",
                  id:"ID:A352",
                  price:"$289.50",
                  label:"450",
                  stock:"Stock"},

                  {image:"/product6.jpg",
                  title:"Airpod",
                  id:"ID:A352",
                  price:"$289.50",
                  label:"450",
                  stock:"Stock"},

                  {image:"/product7.jpg",
                  title:"Airpod",
                  id:"ID:A352",
                  price:"$289.50",
                  label:"450",
                  stock:"Stock"}

            ]

        }
    }
}
</script>