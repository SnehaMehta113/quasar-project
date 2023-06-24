<template>
    <q-card>
        <q-card-section>
            <div class="row justify-between">
                <div>
                    <div class="text-bold">Overview</div>
                </div>
                <div>
                    <div>
                        <q-select v-model="model" :options="options" />
                    </div>
                </div>
                
            </div>

        </q-card-section>
        <q-separator inset/>

        <q-card-section>
            <div>
              <apexchart type="bar" width="700" height="350" :options="chartOptions" :series="series"></apexchart>
            </div>
          </q-card-section>

    </q-card>

</template>

<script>
export default{
    name:'MembersOverview',
    data(){
        return{
            options: ['This Week', 'This Month', 'This Month','All Year' ],

            series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
              title: {
                text: '$ (thousands)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
        }
    }
}
</script>