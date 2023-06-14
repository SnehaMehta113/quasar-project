<template>
  <q-page >
    <div class="row">
        <div class="col-8">
          <Card />
          <LineChart />
          <div class="row">
            <DayChart />
            <TimeLine />
          </div>
          <AreaChart />
        </div>
          
         <div class="col-4">
          <CardRating /> 
          <DoNutChart />
          <LocationChart />
          <CustomerList />
          <TimeLineList />
          <TimeLineList1 />
         
          
         </div>
         <div class="col-12">
         
          <OrderTable />

         </div>
         <div class="col-8">
          <MemberTable />

         </div>
         <div class="col-4">
          <ProductTable />

         </div>

       
          
      
          

         
      </div>
 </q-page>
  </template>


<script>

import Card from './Card.vue'
import CardRating from './CardRating.vue'
import LineChart from './LineChart.vue'
import DoNutChart from './DoNutChart.vue'

import TableCard from './TableCard.vue'
import TimeLine from './Timeline.vue'
import TimeLineList from './TimeLineList.vue'
import TimeLineList1 from './TimeLineList1.vue'
import DayChart from './DayChart.vue'
import AreaChart from './AreaChart.vue'
import LocationChart from './LocationChart.vue'
import CustomerList from './CustomerList.vue'
import ProductTable from './ProductTable.vue'
import MemberTable from './MemberTable.vue'

import OrderTable from './OrderTable.vue'


export default ({
  name: 'dashboard',
  components :{
   
    Card,
    CardRating,
    LineChart,
    DoNutChart,
    
    TableCard,
    TimeLine,
    TimeLineList,
    TimeLineList1,
    DayChart,
    AreaChart,
    LocationChart,
    CustomerList,
    ProductTable,
    MemberTable,
   
    OrderTable

    

  }
  
})
</script>

