<script setup>
import { onMounted } from 'vue';

definePage({ meta: { action: 'read', subject: 'Admins' } })
onMounted(() => document.title = "Admin - Campaign");
import { useRouter } from 'vue-router';

const router = useRouter();

const CreateCampaign = ref(false)
const EditCampaign = ref(false)
const status = [
    'Running',
    'Pose',
]

const logisticData = ref([
    {
        icon: 'tabler-car',
        color: 'primary',
        title: 'Data 1',
        value: 42,
        change: 18.2,
        isHover: false,
    },
    {
        icon: 'tabler-alert-triangle',
        color: 'warning',
        title: 'Data 2',
        value: 8,
        change: -8.7,
        isHover: false,
    },
    {
        icon: 'tabler-git-fork',
        color: 'error',
        title: 'Data 3',
        value: 27,
        change: 4.3,
        isHover: false,
    },
])
</script>



<template>
    <VRow>
        <VCol v-for="(data, index) in logisticData" :key="index" cols="12" md="4" sm="6">
            <div>
                <VCard class="logistics-card-statistics cursor-pointer"
                    :style="data.isHover ? { 'border-block-end': `2px solid rgba(var(--v-theme-${data.color}))` } : { 'border-block-end': `2px solid rgba(var(--v-theme-${data.color}), var(--v-disabled-opacity))` }"
                    @mouseenter="data.isHover = true" @mouseleave="data.isHover = false">
                    <VCardText>
                        <div class="d-flex align-center gap-x-4 mb-2">
                            <VAvatar variant="tonal" :color="data.color" rounded>
                                <VIcon :icon="data.icon" size="28" />
                            </VAvatar>
                            <h5 class="text-h5 font-weight-medium">
                                {{ data.value }}
                            </h5>
                        </div>
                        <div class="text-body-1">
                            {{ data.title }}
                        </div>
                    </VCardText>
                </VCard>
            </div>
        </VCol>
    </VRow>
    <VRow>
        <VCol cols="12">
            <VCard>
                <VCardText style="border-bottom: thin solid rgba(var(--v-border-color), var(--v-border-opacity))">
                    <VRow
                        style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">

                        <h4>Table</h4>
                        <VBtn to="/admin/campaign/sms" rounded="pill" color="primary" size="small" class="ml-5">
                            <VIcon start icon="tabler-arrow-left" />Back
                        </VBtn>
                        
                    </VRow>
                </VCardText>
                <VDivider />
                <VCardText class="pt-0">
                    <VTable>
                        <thead>
                            <tr>
                                <th>S#</th>
                                <th>Data1</th>
                                <th>Data2</th>
                                <th>Data3</th>
                                <th>Data4</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Data</td>
                                <td>Data</td>
                                <td>Data</td>
                                <td>Data</td>
                                <td>
                                    <IconBtn>
                                        <VTooltip activator="parent" location="top">Delete</VTooltip>
                                        <VIcon icon="tabler-trash" />
                                    </IconBtn>
                                </td>

                            </tr>




                        </tbody>
                    </VTable>


                    <!-- Model -->
                    <VDialog v-model="EditCampaign" width="500">
                        <DialogCloseBtn @click="EditCampaign = !EditCampaign" />
                        <VCard title="View Campaign SMS">
                            <VDivider class="mt-3" />
                            <VCardText>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis suscipit harum
                                atque?
                                Vitae quisquam fugit qui ullam earum, consequatur sit? Nobis laborum nostrum explicabo
                                earum, sequi nemo esse dicta saepe.
                            </VCardText>
                            <VCardText class="d-flex justify-end">
                                <VBtn @click="EditCampaign = false">Close</VBtn>
                            </VCardText>
                        </VCard>
                    </VDialog>





                </VCardText>


            </VCard>
        </VCol>

    </VRow>
</template>



<style lang="scss" scoped>
@use "@core/scss/base/mixins" as mixins;

.logistics-card-statistics:hover {
  @include mixins.elevation(12);

  transition: all 0.1s ease-out;
}
</style>