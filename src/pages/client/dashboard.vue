<script setup>
import CrmActiveProject from '@/views/dashboards/crm/CrmActiveProject.vue'
import CrmActivityTimeline from '@/views/dashboards/crm/CrmActivityTimeline.vue'
import CrmAnalyticsSales from '@/views/dashboards/crm/CrmAnalyticsSales.vue'
import CrmBrowserStates from '@/views/dashboards/crm/CrmBrowserStates.vue'
import CrmEarningReportsYearlyOverview from '@/views/dashboards/crm/CrmEarningReportsYearlyOverview.vue'
import CrmProjectStatus from '@/views/dashboards/crm/CrmProjectStatus.vue'
import CrmRecentTransactions from '@/views/dashboards/crm/CrmRecentTransactions.vue'
import CrmRevenueGrowth from '@/views/dashboards/crm/CrmRevenueGrowth.vue'
import CrmSalesAreaCharts from '@/views/dashboards/crm/CrmSalesAreaCharts.vue'
import CrmSessionsBarWithGapCharts from '@/views/dashboards/crm/CrmSessionsBarWithGapCharts.vue'


const simpleStatisticsDemoCards = [
    {
        icon: 'tabler-currency-dollar',
        color: 'error',
        title: 'Total Profit',
        subTitle: 'Last week',
        stat: '1.28k',
        change: '-12.2%',
    },
    {
        icon: 'tabler-chart-bar',
        color: 'info',
        title: 'Total Sales',
        subTitle: 'Last week',
        stat: '$4,673',
        change: '+25.2%',
    },
]



import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore();
onMounted(() => document.title = "Client - Dashboard");
onMounted(() => store.dispatch('GetAuthUser'));
const popupMessages = computed(() => store.state.auth.popupMessages);

</script>

<template>
    <VRow class="match-height">


        <VCol cols="12" md="12">
            <div v-for="(message, index) in popupMessages" :key="index">
                <VAlert title="Warning !" type="error" closable :text="message.content" />
            </div>
        </VCol>
        <VCol cols="12" md="4">
            <CrmBrowserStates />
        </VCol>

        <!-- 👉 Project Status -->
        <VCol cols="12" md="4">
            <CrmProjectStatus />
        </VCol>

        <!-- 👉 Active Project -->
        <VCol cols="12" md="4">
            <CrmActiveProject />
        </VCol>

        <!-- 👉 Recent Transactions -->
        <VCol cols="12" md="6">
            <CrmRecentTransactions />
        </VCol>

        <!-- 👉 Active timeline -->
        <VCol cols="12" md="6">
            <CrmActivityTimeline />
        </VCol>
    </VRow>
</template>
