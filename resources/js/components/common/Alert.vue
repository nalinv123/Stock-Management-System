<template>
    <v-row justify="center">
        <v-dialog
            v-model="this.$store.state.alertModule.alert.status"
            max-width="290"
        >
            <v-card>
                <v-card-title class="headline">{{
                    this.$store.state.alertModule.alert.title
                }}</v-card-title>
                <v-card-text>{{
                    this.$store.state.alertModule.alert.message
                }}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="hideAlert()"
                        >Okay</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: "Alert",
    methods: {
        hideAlert() {
            this.$store.dispatch("alertModule/hideAlert");
        },
    },
};
</script>
