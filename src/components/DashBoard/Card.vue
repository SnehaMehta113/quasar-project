<template>
   <div class="q-pa-sm row justify-around">
      <q-card class="" style="width:200px; height:150px;">
        <div class="row justify-evenly">
          <q-card-section class="text-center">
            <div class="text-h6">$25,890
              <q-icon name="adjust" />
            </div>
          </q-card-section>
        </div>
          
          <q-card-section class="text-center">
          <div class="text-h6">Total sales</div>
          <div class="text-caption text-grey">
            <q-icon color="limegreen" name="trending_up"/>
             <span style="color:limegreen">1.3% </span>Up from past week 
          </div>
        </q-card-section>
           </q-card>
      

      <q-card class="my-card" style="width:220px; height:150px; border-radius:10px;">
        <div class="row justify-evenly">
            <q-card-section class="text-center">
            <div class="text-h6">$100.5M
            <q-icon name="ads_click"/>
          </div>
          </q-card-section>
         </div>
        <q-card-section class="text-center">
          <div class="text-h6">Total Orders</div>
          <div class="text-caption text-grey">
            <q-icon color="limegreen" name="trending_up"></q-icon>
            <span style="color:limegreen">0.5%</span> Up from past week.
           </div>
           </q-card-section>
          </q-card>

      <q-card class="my-card" style="width:200px; height:180px; border-radius:10px;">
        <div class="row justify-evenly">
          <q-card-section>
            <div class="text-h6">50.5M
            <q-icon name="star" />
          </div>
          </q-card-section>
         </div>

          <q-card-section class="text-center">
            <div class="text-h6">Total Customers</div>
          <div class="text-caption text-grey">
            <q-icon color="limegreen" name="trending_down"></q-icon>
            <span style="color:red">0.5%</span> Down from past week
          </div>
        </q-card-section>
          </q-card>
        </div>
</template>

<script>
export default ({
    name :'Card',
    
})

</script>
