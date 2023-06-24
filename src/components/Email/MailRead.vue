<template>
    <div class="q-pa-md">
        <q-card class="q-pa-md">
            <div class="row justify-between">
                <div class="text-bold">You can now use your storage in Google Drive – Hey Nicklas!</div>
                <div>
                    <div class="q-gutter-sm">
                        <q-btn icon="printer" class="text-blue-5"></q-btn>
                        <q-btn icon="spam" class="text-blue-5"></q-btn>
                        <q-btn icon="delete" class="text-blue-5"></q-btn>
                        <q-btn icon="topic" class="text-blue-5"></q-btn>
                        <q-btn icon="more_vert" class="text-blue-5">
                            <q-menu>
                                <q-list class="text-grey-7">
                                    <q-item>
                                        <div>
                                            <q-icon name="add"></q-icon><span class="q-ml-xs">Add</span>
                                        </div>
        
                                    </q-item>
        
                                    <q-item>
                                        <div>
                                            <q-icon name="delete"></q-icon><span class="q-ml-xs">Delete</span>
                                        </div>
        
                                    </q-item>
        
                                    <q-item>
                                        <div>
                                            <q-icon name="refresh"></q-icon><span class="q-ml-xs">Refresh</span>
                                        </div>
        
                                    </q-item>
                                </q-list>
                            </q-menu>
                        </q-btn>
                        
                    </div>

                </div>

            </div>

            <q-card-section>
                <div class="row">
                    <div class="q-mr-xs">
                        <img src="public/icons/user1.jpg" />
                    </div>
                    <div>
                        <div class="text-bold">Jordan Stevenson</div>
                        <div class="text-caption text-grey">From: jonathan@domain.com</div>
                    </div>
                </div>
                <div class="q-pa-md">
                    <span class="text-bold text-blue-3"> Hi Coderthemes!<br /></span>
                    <p class="">
                        Last pic over my village – Yeah i'd like that! Do you remember the video som..
                        
                        Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus convallis.
                        
                        Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>
                </div>
            </q-card-section>

            <q-card-section>
                <div class="text-blue-3">Checklists/Sub-tasks</div>
                <div>
                    <ol>
                        <li>Your design preferences (Color, style, shapes, Fonts, others)</li>
                        <li>Tell me, why is your item different?</li>
                        <li>Do you want to bring up a specific feature of your item? If yes, please tell me</li>
                        <li>Do you have any preference or specific thing you would like to change or improve on your item page?</li>
                        <li>Do you want to include your item's or your provider's logo on the page? if yes, please send it to me in vector format (Ai or EPS)</li>
                        <li>Please provide me with the copy or text to display</li>
                  </ol>
                </div>

                <div>
                    <p>Filling in this form with the above information will ensure that they will be able to start work quickly.

                        You can complete your order by putting your coupon code into the Promotional code box and clicking ‘Apply Coupon’.</p>
                </div>

            </q-card-section>


            <q-card-section class="q-pa-md">
                <div class="text-bold">Attached Files</div>
                <div class="q-pa-sm">
                     <div class="text-grey cursor-pointer q-mb-md">tagus-design.psd</div>
                    <div class="text-grey cursor-pointer">tagus-design.sketch</div>
                
                </div>


            </q-card-section>

            <q-card-section>
                <div class="row  justify-end q-gutter-md">
                    <div><q-btn color="grey">Reply</q-btn></div>
                    <div><q-btn color="primary">Forward</q-btn></div>
                    
                </div>
            </q-card-section>

        </q-card>

    </div>
    
</template>
<script>
export default{
    name:'MailRead',
    data(){
        return{

        }
    }
}
</script>