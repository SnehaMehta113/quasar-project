<template>
  <div class="column justify-evenly">
      <q-card class="my-card bg-blue-6" style="width:200px; height:150px; border-radius:10px;">
        <q-card-section vertically>
          <q-card-section class="q-pt-xs">
            <div class="text-h6 text-white">Impressions
            </div>
            <div class="row justify-evenly ">
              <div class="text-h5 text-white">$12,875</div>
            <q-icon color="limegreen" font-size="50px" name="arrow_drop_up"/>
              <div class="text-6" style="color:limegreen">10%</div>
           
            </div>
            
           
            <div class="text-caption text-white-6">Compared to $21,490 last year </div>
          </q-card-section>
        </q-card-section>
      </q-card>

      <div class="col q-my-md q-px-sm q-py-sm bg-grey-6 text-white" style="width:200px; border-radius:10px;">
        <q-timeline light color="secondary">
          <q-timeline-entry heading>Timeline heading</q-timeline-entry>
      
          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </div>
          </q-timeline-entry>
      
          <q-timeline-entry
            title="Event Title"
            subtitle="February 21, 1986"
            icon="delete"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            </div>
          </q-timeline-entry>
     </q-timeline>
      </div>

  </div>




 
  
  </template>


  <script>
  export default({
    name:'TimeLine'
  })
</script>