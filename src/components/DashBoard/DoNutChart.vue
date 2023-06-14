<template>

    <div class="q-pa-md">
      <q-card class="flat bordered" style="width:350px; height:300px">
        <q-card-section class="q-pt-xs row justify-between">
          <div class="text-h6">Live Visits on Our Site</div>
          <q-btn flat round dense icon="more_vert" />
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <div>
            <apexchart  type="donut" widht="300" :options="options" :series="series"></apexchart>
          </div>
        </q-card-section> 
      </q-card>
    </div>




  </template>


  <script>  
export default({
    name: 'DoNutChart',
    data: ()=>{
        return {
      options: {},
      series: [44, 55, 41, 17, 15]
    }
    }

})



</script>