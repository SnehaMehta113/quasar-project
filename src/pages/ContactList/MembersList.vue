<template>
    <q-page>
        <div class="q-pa-md">
            <div class="col-9">
                <MembersTable />
            </div>

        </div>

    </q-page>
</template>

<script>
import MembersTable from 'src/components/ContactList/MembersTable.vue';

export default{
    name:'MemberList',
    components:{
        MembersTable
    }
}


</script>