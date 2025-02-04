<script setup>
import navItems from '@/navigation/horizontal'
import { themeConfig } from '@themeConfig'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavBarNotifications from '@/layouts/components/NavBarNotifications.vue'
import NavSearchBar from '@/layouts/components/NavSearchBar.vue'
import NavbarShortcuts from '@/layouts/components/NavbarShortcuts.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import NavBarI18n from '@core/components/I18n.vue'
import { HorizontalNavLayout } from '@layouts'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'

// SECTION: Loading Indicator
const isFallbackStateActive = ref(false)
const refLoadingIndicator = ref(null)

watch([
  isFallbackStateActive,
  refLoadingIndicator,
], () => {
  if (isFallbackStateActive.value && refLoadingIndicator.value)
    refLoadingIndicator.value.fallbackHandle()
  if (!isFallbackStateActive.value && refLoadingIndicator.value)
    refLoadingIndicator.value.resolveHandle()
}, { immediate: true })
// !SECTION



import { onBeforeMount, onMounted } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()
const loading = ref(false);
let role = localStorage.getItem('role');










import { useStore } from 'vuex'

const store = useStore();
onBeforeMount(async () => {
  await store.dispatch("GetAuthUser");
});



const user = computed(() => store.state.auth.user);
const permissions = JSON.parse(user && user.value ? user.value.permissions : "{}");


const navItems = [
  { heading: "Main" },
  {
    title: "Dashboard",
    icon: { icon: "tabler-smart-home" },
    to: "admin-dashboard",
    read: true,
  },
  {
    title: "Admin",
    icon: { icon: "tabler-user" },
    to: "admin-admin",
    read: permissions["Admin"]?.includes("ReadAdmin")
  },
  {
    title: "Client",
    icon: { icon: "tabler-users" },
    to: "admin-client",
    read: permissions["Client"]?.includes("ReadClient")
  },
  {
    title: "Subscriptions",
    icon: { icon: "tabler-file" },
    children: [
      { title: "Subscription", to: "admin-subscription", read: permissions["Subscription"]?.includes("ReadSubscription") },
      { title: "Cancellation Requests", to: "admin-subscription-cancellation-requests", read: permissions["CancellationRequests"]?.includes("ReadCancellationRequests") },
    ],
  },
  {
    title: 'Email',
    icon: { icon: 'tabler-mail' },
    to: 'apps-email',
    read: permissions["Email"]?.includes("ReadEmail")
  },
  // {
  //     title: 'Chat',
  //     icon: { icon: 'tabler-message-circle' },
  //     to: 'apps-chat',
  //     read: permissions["Chat"]?.includes("ReadChat")
  // },
  {
    title: "Campaigns",
    icon: { icon: "tabler-send" },
    children: [
      // { title: "Campaign", to: "admin-campaign", read: permissions["Campaign"]?.includes("ReadCampaign") },
      { title: "SMS Campaign", to: "admin-campaign-sms", read: permissions["CampaignSMS"]?.includes("ReadCampaignSMS") },
      { title: "Email Campaign", to: "admin-campaign-email", read: permissions["CampaignEmail"]?.includes("ReadCampaignEmail") },
      { title: "APIs Config", to: "admin-campaign-config", read: permissions["CampaignApiConfig"]?.includes("ReadCampaignApiConfig") },
    ],
  },
  {
    title: "Billing Information",
    icon: { icon: "tabler-id" },
    to: "admin-billing-information",
    read: permissions["BillingInformation"]?.includes("ReadBillingInformation")
  },
  {
    title: "Invoice Management",
    icon: { icon: "tabler-printer" },
    children: [
      { title: "WooCommerce", to: "admin-invoice-woocommerce", read: permissions["WooCommerceInvoice"]?.includes("ReadWooCommerceInvoice") },
      { title: "Custom", to: "admin-invoice", read: permissions["CustomInvoice"]?.includes("ReadCustomInvoice") },
    ],
  },
  { heading: "Others" },
  {
    title: "Pop-up Messages",
    icon: { icon: "tabler-message-circle" },
    to: "admin-popup-messages",
    read: permissions["PopUpMessages"]?.includes("ReadPopUpMessages")
  },
  {
    title: "Lead Tracking",
    icon: { icon: "tabler-color-swatch" },
    to: "admin-lead",
    read: permissions["LeadTracking"]?.includes("ReadLeadTracking")
  },
  {
    title: "Support Ticket",
    icon: { icon: "tabler-help-circle" },
    to: "admin-support",
    read: permissions["SupportTicket"]?.includes("ReadSupportTicket")
  },
  {
    title: "Feedback",
    icon: { icon: "tabler-star" },
    to: "admin-feedback",
    read: permissions["FeedBack"]?.includes("ReadFeedBack")
  },
  {
    title: "Custom Menu",
    icon: { icon: "tabler-list" },
    to: "admin-custom-solution",
    read: permissions["CustomMenu"]?.includes("ReadCustomMenu")
  },
  {
    title: "Setting",
    icon: { icon: "tabler-settings" },
    to: "admin-setting",
    read: permissions["Setting"]?.includes("ReadSetting")
  },
].filter(menuItem => {
  if (!menuItem.children) {
    return menuItem.read !== false;
  } else {
    menuItem.children = menuItem.children.filter(c => c.read !== false);
    return menuItem.children.length > 0;
  }
});


const navItems1 = [
  { heading: "Main" },
  {
    title: "Dashboard",
    icon: { icon: "tabler-smart-home" },
    to: "client-dashboard",
    read: true
  },
  {
    title: "Teams",
    icon: { icon: "tabler-user" },
    to: "client-team",
    read: permissions["Teams"]?.includes("ReadTeams")
  },
  {
    title: "Subscriptions",
    icon: { icon: "tabler-file" },
    children: [
      { title: "Subscription", to: "client-subscription", read: permissions["Subscription"]?.includes("ReadSubscription") },
      { title: "Cancellation Requests", to: "client-subscription-cancellation-requests", read: permissions["CancellationRequests"]?.includes("ReadCancellationRequests") },
    ],
  },
  {
    title: "Billing Information",
    icon: { icon: "tabler-id" },
    to: "client-billing-information",
    read: permissions["BillingInformation"]?.includes("ReadBillingInformation")
  },
  {
    title: "Invoice Information",
    icon: { icon: "tabler-printer" },
    to: "client-invoice",
    read: permissions["InvoiceManagement"]?.includes("ReadInvoiceManagement")
  },
  { heading: "Setting" },
  {
    title: "Profile",
    icon: { icon: "tabler-user" },
    to: "client-profile",
    read: true
  },
  {
    title: "Update Password",
    icon: { icon: "tabler-lock" },
    to: "client-password",
    read: true
  },
  { heading: "Other" },
  {
    title: "Support Ticket",
    icon: { icon: "tabler-help-circle" },
    to: "client-support",
    read: permissions["SupportTicket"]?.includes("ReadSupportTicket")
  },
  {
    title: "Feedback",
    icon: { icon: "tabler-star" },
    to: "client-feedback",
    read: permissions["FeedBack"]?.includes("ReadFeedBack")
  },
].filter(menuItem => {
  if (!menuItem.children) {
    return menuItem.read !== false;
  } else {
    menuItem.children = menuItem.children.filter(c => c.read !== false);
    return menuItem.children.length > 0;
  }
});


onMounted(() => {
  setTimeout(() => {
    if (!localStorage.getItem('Refresh')) {
      localStorage.setItem('Refresh', 'true');
      location.reload();
    }
  }, 3000);

});


// onMounted(() => {
//     var role = localStorage.getItem('role');
//     if (role === 'Admin') {
//         role = 'Admin';
//         router.push('/admin/dashboard');
//     } else {
//         role = 'Client';
//         router.push('/client/dashboard');
//     }

//     setTimeout(() => {
//         loading.value = false;
//     }, 1000);
// });
</script>

<template>
  <HorizontalNavLayout :nav-items="navItems">
    <!-- 👉 navbar -->
    <template #navbar>
      <RouterLink to="/" class="app-logo d-flex align-center gap-x-3">
        <VNodeRenderer :nodes="themeConfig.app.logo" />

        <h1 class="app-title font-weight-bold leading-normal text-xl text-capitalize">
          {{ themeConfig.app.title }}
          asd
        </h1>
      </RouterLink>
      <VSpacer />

      <NavSearchBar trigger-btn-class="ms-lg-n3" />

      <NavBarI18n v-if="themeConfig.app.i18n.enable && themeConfig.app.i18n.langConfig?.length"
        :languages="themeConfig.app.i18n.langConfig" />

      <NavbarThemeSwitcher />
      <NavbarShortcuts />
      <NavBarNotifications class="me-2" />
      <UserProfile />
    </template>

    <AppLoadingIndicator ref="refLoadingIndicator" />

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component }">
      <Suspense :timeout="0" @fallback="isFallbackStateActive = true" @resolve="isFallbackStateActive = false">
        <Component :is="Component" />
      </Suspense>
    </RouterView>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <TheCustomizer />
  </HorizontalNavLayout>
</template>
