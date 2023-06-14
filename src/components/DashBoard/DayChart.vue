<template>
    <div class="q-pa-md q-mr-xl">
        <q-card class="flat-bordered">
            <q-card-section>
                <div class="q-pt-xs row justify-between">
                    <div class="text-h5">Visits by Day</div>
                    <div class="text-h6">Total 248.5k Visits</div>
                </div>
            </q-card-section>
            <q-separator inset />

            <q-card-section>
                <div>
                    <apexchart type="radar" width="400" height="450" :options="chartOptions" :series="series"></apexchart>
                  </div>

            </q-card-section>

        </q-card>

    </div>
</template>

<script> 
export default({
    name:'DayChart',
  
    data:function() {
      return{
          
          series: [{
            name: 'Series 1',
            data: [20, 100, 40, 30, 50, 80, 33],
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'radar',
            },
            dataLabels: {
              enabled: true
            },
            plotOptions: {
              radar: {
                size: 140,
                polygons: {
                  strokeColors: '#e9e9e9',
                  fill: {
                    colors: ['#f8f8f8', '#fff']
                  }
                }
              }
            },
           
            colors: ['#FF4560'],
            markers: {
              size: 4,
              colors: ['#fff'],
              strokeColor: '#FF4560',
              strokeWidth: 2,
            },
            tooltip: {
              y: {
                formatter: function(val) {
                  return val
                }
              }
            },
            xaxis: {
              categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            },
            yaxis: {
              tickAmount: 7,
              labels: {
                formatter: function(val, i) {
                  if (i % 2 === 0) {
                    return val
                  } else {
                    return ''
                  }
                }
              }
            }
          },
          
          
        }
      },
        
      });
    


</script>