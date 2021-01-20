<template>
    <v-data-table
        :headers="getHeaders"
        :items="getData"
        sort-by="calories"
        class="elevation-1"
        :footer-props="{
            prevIcon: mdiChevronLeft,
            nextIcon: mdiChevronRight,
        }"
        :search="doSearch"
        :loading="getLoaderState"
    >
        <template v-slot:top>
            <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                    <v-card-title class="headline"
                        >Are you sure you want to delete this
                        item?</v-card-title
                    >
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete"
                            >Cancel</v-btn
                        >
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="deleteItemConfirm"
                            >OK</v-btn
                        >
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">{{
                mdiPencil
            }}</v-icon>
            <v-icon small @click="deleteItem(item)">{{ mdiDelete }}</v-icon>
        </template>
        <!-- <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template> -->
    </v-data-table>
</template>

<script>
import { mdiPencil, mdiDelete, mdiChevronRight, mdiChevronLeft } from "@mdi/js";
export default {
    name: "Table",
    data: () => ({
        dialog: false,
        dialogDelete: false,
        mdiPencil,
        mdiDelete,
        mdiChevronRight,
        mdiChevronLeft,
        deleteItemId: 0,
    }),
    props: ["headers", "data", "search", "component", "loading"],
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
        },
        getHeaders() {
            return this.$props.headers;
        },
        getData() {
            return this.$props.data;
        },
        doSearch() {
            return this.$props.search;
        },
        getLoaderState() {
            return this.$props.loading;
        },
    },
    watch: {
        dialog(val) {
            val || this.close();
        },
        dialogDelete(val) {
            val || this.closeDelete();
        },
    },
    created() {},
    methods: {
        editItem(item) {
            if (this.$props.component === 0) {
                this.$router.push({
                    name: "Edit Category",
                    params: { id: item.id, item: item },
                });
            } else if (this.$props.component === 1) {
                this.$router.push({
                    name: "Edit Product",
                    params: { id: item.id, item: item },
                });
            }
        },
        deleteItem(item) {
            this.deleteItemId = item.id;
            this.dialogDelete = true;
        },
        deleteItemConfirm() {
            if (this.$props.component === 0) {
                const userInput = {
                    id: this.deleteItemId,
                };
                this.$store.dispatch("categoryModule/remove", userInput);
            } else if (this.$props.component === 1) {
                const userInput = {
                    id: this.deleteItemId,
                };
                this.$store.dispatch("productModule/remove", userInput);
            }
            this.closeDelete();
        },
        close() {
            this.dialog = false;
            // this.$nextTick(() => {
            //   this.editedItem = Object.assign({}, this.defaultItem);
            //   this.editedIndex = -1;
            // });
        },
        closeDelete() {
            this.dialogDelete = false;
            // this.$nextTick(() => {
            //   this.editedItem = Object.assign({}, this.defaultItem);
            //   this.editedIndex = -1;
            // });
        },
    },
};
</script>
