<template>
    <v-navigation-drawer app clipped :value="drawer">
        <SidebarMenu />
    </v-navigation-drawer>
</template>

<script>
import SidebarMenu from "./SidebarMenu.vue";

export default {
    name: "Sidebar",
    components: {
        SidebarMenu,
    },
    data: () => ({
        isOpen: true,
    }),
    props: ["messageSidebar"],
    computed: {
        drawer() {
            return this.$props.messageSidebar;
        },
    },
};
</script>
