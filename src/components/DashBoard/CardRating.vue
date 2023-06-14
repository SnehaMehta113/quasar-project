<template>
    <div class="q-pa-sm">
        <q-card class="flat bordered">
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-h5">Ratings</div>
              <div class="text-caption text-grey">Year of 2022</div>
              <div class="text-h6 q-mt-sm q-mb-xs">8.1<subscript>4</subscript>k <span class="text-caption text-grey">Review</span></div>
              <div class="text-caption-h6 text-grey">
                <q-icon color="red" name="star_border"></q-icon>
                4.5 <span style="color:blue;">+15.6%</span> from previous period
              </div>
            </q-card-section>
         
    
            
              <q-card-section>
                <div>
                  <apexchart type="polarArea" width="280" :options="chartOptions" :series="series"></apexchart>
                </div>
      
              </q-card-section>
            </q-card-section> 

          
            
          
    
          </q-card>
    </div>


</template>

<script>
export default ({
    name : 'CardRating',

    data :function (){
      return{
        series: [42, 47, 52, 58, 65],
          chartOptions: {
            chart: {
              width: 380,
              type: 'polarArea'
            },
           
            fill: {
              opacity: 1
            },
            stroke: {
              width: 1,
              colors: undefined
            },
            yaxis: {
              show: false
            },
            legend: {
              position: 'bottom'
            },
            plotOptions: {
              polarArea: {
                rings: {
                  strokeWidth: 0
                },
                spokes: {
                  strokeWidth: 0
                },
              }
            },
            theme: {
              monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6
              }
            }
          },
          
      }
    }

})
</script>