<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data(){
    return{
      response:{},
      online:true
    }
  }

})
</script>
