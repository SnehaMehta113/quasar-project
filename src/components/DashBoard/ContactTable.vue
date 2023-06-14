<template>
    <div class="q-pa-md">
        <div class="row justify-between">
            <div class="text-h6">Contacts</div>
            <div class="row justify-evenly flex-center">
                <q-icon name="home"/>
                <div class="text-caption">DashBoard .</div>
                <div class="text-h6">Contacts</div>

            </div>

        </div>

    </div>

</template>


<script>
export default{
    name:'ContactTable',
    data(){
        return{
            columns:[],
            rows:[]
        }
    }
}
</script>