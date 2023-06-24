<template>
    <q-card flat >
        <q-card-section>
            <div class="row q-gutter-sm">
                <div  class="bg-b=grey-4" style="border:1px solid grey; border-radius:15px;">
                    <q-icon :name="icon" size="lg" color="blue"></q-icon>
                </div>
                <div class="col">
                    <div class="text-caption">{{ caption }}</div>
                    <div class="text-bold">{{ text }}</div>

                </div>
            </div>
        </q-card-section>

    </q-card>
</template>

<script>
export default{
    name:'MemberCard',
    props:['icon', 'caption', 'text'],
   
}
</script>