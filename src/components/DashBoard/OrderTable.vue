<template>
    <div class="q-pa-md">
        <q-table
        flat bordered
        :rows="rows"
        :columns="columns"
        row-key="name">

        <template v-slot:top-left>
          <div class="text-h6">Recent Orders
          </div>
        </template>

        <template v-slot:top-right>
          <div class="flex flex-center">
            <div><q-btn flat round dense icon="expand_more" /></div>
            <div class="text-h6">Last 7 Days</div>

          </div>
        
        </template>
   
        <template v-slot:body-cell-product="props">
            <td :props="props">
              <div class="row justify-evenly flex-center">
            <img rounded :src="props.row.image" style="width:50px"/>
                  {{ props.value }}
                </div>
            </td>
        </template>
        <template v-slot:body-cell-status="props">
          <td  :key="status" :props="props">
            <div class="text-center text-6">
              <q-badge :color="props.row.color">
                {{ props.row.status }}
              </q-badge>
            </div>

          </td>

        </template>

        </q-table>

    </div>

</template>
<script> 
export default{
    name:'OrderTable',
    data(){
      return{
        columns:[
        {name:'product',required:true,label:'Product',align:'center',field: row => row.name ,format : val => `${val}`,sortable:true},
        {name:'customer',align:'center' ,label:'Customer' ,field:'customer'},
        {name:'vendor',align:'center' ,label:'Vendor' ,field:'vendor'},
        {name:'price',align:'center' ,label:'Price' ,field:'price'},
        {name:'date',align:'center' ,label:'Date' ,field:'date'},
        {name:'status',align:'center' ,label:'Status' ,field:'status'},
        {name:'rating',align:'center' ,label:'Rating' ,field:'rating'},
      ],

      rows:[
        {
          name:'Laptop Mac Pro',
          customer:'Colin Firth',
          vendor:'	Apple',
          price:'$289.50',
          date:'	01-12-2022',
          status:'Pending',
          color:'blue-3',
          rating:'5.0 (61 Votes)',
          image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTb9ZH_Idd4bOuPSEldrLHxw6Sirf4vTlED3Zs3V8CtIoYVE-Pi6u-6CxbuUh7clj3ZWwZcNDHSTKXhJB-8mH2mhtPzjxfkTd5xHvg7h15iK5O2P1mYujC3PuwXW3ezRSMbV54&usqp=CAc'
        
        },
        {
          name:'Wireless Headphone',
          customer:'	Alina Smith',
          vendor:'Wireless',
          price:'$876.55',
          date:'02-12-2022',
          status:'Out of Stock',
          color:'red-3',
          rating:'4.9 (55 Votes',
          image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQViTcgXuSo32irqurhj6TGyTRvPIJsL0nTbAa41Tz_SBfZi3HO9V8FOrAn7F7EuHVGq7G85IFZPtL2cHns8Q6sqV9XWGQBD7eR0BFxuytysZ9A5vZYNhXGOOhHNlqu9y1LCg&usqp=CAc'
        },
        {
          name:'Smart Camera XD6',
          customer:'	James Andy',
          vendor:'Camera',
          price:	'$654.76',
          date:'	03-12-2022',
          status:'Delivered',
          color:'green-3',
          rating:'d	4.0 (99 Votes)',
          image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT-_oLmlfHefUrDUQPwM7Z815Vuc9TGfc4TM7QSBxR4FyVR0lgVfB5yjVb1XZp0CDdMSaG4M8ulKSq0SJaV91ZeARLjCUCqgAOS7pBnsLr9hvsVXrXZ46th1w'
        
        },
        {
          name:'Jebble Smart Watch',
          customer:'Sarah Taylor',
          vendor:'	Jebble',
          price:'$654.99',
          date:'04-12-2022',
          status:'Pending',
          color:'blue-3',
          rating:'5.0 (196 Votes)',
          image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRvbP-M9wz_WtV1bNTx23woN5woTqhQDHiM40HxsTAObdI9-jqYax7QlcwJmslZ9CV0pJQj-qcKvu9t04qLNcOSACjvQMrDaPQjVYtnJ_fl3G97cOLwrPwIEUPIDlV7wnqVzqM&usqp=CAc'
        },
        {
          name:'Pixi 8 Wireless Airphone',
          customer:'	David Warner',
          vendor:'Watch',
          price:'$432.00',
          date:'05-12-2022',
          status:'Delivered',
          color:'green-3',
          rating:'3.0 (54 Votes)',
          image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRUW_DPqZt23i-g0fy07kGiNXuKYHd3KZMyfHIimfFWv4avccQJkEZl_aK0rNbj1Y2DBLxhr9J84sB1IqMda8H5sVNgZoJFLrHVX_YHJ5gGnAxvlxQg2fMW79RROXNwrosKKw&usqp=CAc'
        
        },
        {
          name:'laptop',
          customer:'fhdskj',
          vendor:'fhfkj',
          price:24555,
          date:'hgfgj',
          status:'stock',
          rating:'good'
        
        },
      ],
    }
}

}
</script>