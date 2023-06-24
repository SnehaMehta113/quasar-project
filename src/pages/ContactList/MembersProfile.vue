<template>
    <q-page>
        <div class="q-pa-md row justify-between">
            <div class="col-4 q-gutter-sm">
                <div class="q-mx-sm">
                    <ProfileCard />
                </div>
                <div>
                    <PersonalInfo />
                </div>
                <div>
                    <MembersActivity />
                </div>
            </div>

             <div class="col q-mx-sm q-gutter-sm">
                <div class=" q-pa-md row justify-evenly items-center">
                    <counter-card v-for="(item,index) in cards" :key="index" v-bind="item" style="width:200px; height:100px;"></counter-card>
                </div>
                <div class="col">
                    <MembersOverview />
                </div>
                <div>
                    <MembersTaskTable />
                </div>
              

            </div>

        </div>

    </q-page>
</template>

<script>
import ProfileCard from 'src/components/MembersProfile/ProfileCard.vue';
import MemberCard from 'src/components/MembersProfile/MemberCard.vue';
import CounterCard from 'components/ui/infographics/counter/type1/index.vue';
import MembersOverview from 'src/components/MembersProfile/MembersOverview.vue';
import MembersTaskTable from 'src/components/MembersProfile/MembersTaskTable.vue';
import PersonalInfo from 'src/components/MembersProfile/PersonalInfo.vue';
import MembersActivity from 'src/components/MembersProfile/MembersActivity.vue';

export default{
    name:'MembersProfile',
    components:{
        ProfileCard,
        MemberCard,
        CounterCard,
        MembersOverview,
        MembersTaskTable,
        PersonalInfo,
        MembersActivity
    },
    data(){
        return{
            cards:[
                {icon:'donut_large',title:'Total Projects',value:'24K'},
                {icon:'donut_large',title:'Pending Projects',value:'155K'},
                {icon:'donut_large',title:'Total Revenue',value:'$50.5M'}
            ]

        }

    }
}
</script>