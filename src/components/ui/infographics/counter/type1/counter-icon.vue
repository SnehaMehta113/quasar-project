<template>
    <q-icon @mouseleave="hover=false" @mouseover="hover=true" :color="hover ?'blue-8' :'blue-3'" ></q-icon>
</template>
<script>
export default{
    name:'counter-icon',
    data(){
        return{
            hover:false
        }
    }
    
}

</script>