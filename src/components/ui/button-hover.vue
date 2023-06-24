<template>
    <q-btn unelevated @mouseleave="hover=false" @mouseover="hover = true" :color="hover ? 'blue-8' : 'blue-1'"
     :text-color="hover ? 'blue-1' : 'blue-8'" dense class="q-px-sm" ></q-btn>
</template>
<script>
export default{
    name:'ButtonHover',
    data(){
        return{
            hover: false
        }
    }
}
</script>
