<template>
    <v-container>
        <v-toolbar flat>
            <!-- <v-toolbar-title>{{ getTitle }}</v-toolbar-title> -->
            <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" @click="goBack()">
                Go Back
            </v-btn>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-btn
                color="primary"
                class="mb-2"
                :disabled="this.$v.$invalid"
                @click="submit()"
            >
                Save
            </v-btn>
        </v-toolbar>
        <v-card class="justify-center">
            <v-card-text>
                <v-autocomplete
                    label="Category Id"
                    placeholder="Category Id"
                    outlined
                    v-model="categoryId"
                    @input="$v.categoryId.$touch()"
                    @blur="$v.categoryId.$touch()"
                    :error-messages="categoryIdErrors"
                    :items="getCategoryList"
                    item-text="name"
                    item-value="id"
                ></v-autocomplete>
                <v-text-field
                    label="Product name"
                    placeholder="Product name"
                    outlined
                    v-model="name"
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                    :error-messages="nameErrors"
                >
                </v-text-field>
                <v-text-field
                    label="Product short description"
                    placeholder="Product short description"
                    outlined
                    v-model="shortDesc"
                    @input="$v.shortDesc.$touch()"
                    @blur="$v.shortDesc.$touch()"
                    :error-messages="shortDescErrors"
                ></v-text-field>
                <v-textarea
                    label="Product long description"
                    placeholder="Product long description"
                    outlined
                    counter="100"
                    v-model="longDesc"
                    @input="$v.longDesc.$touch()"
                    @blur="$v.longDesc.$touch()"
                    :error-messages="longDescErrors"
                ></v-textarea>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import { required, maxLength } from "vuelidate/lib/validators";

export default {
    name: "AddProduct",
    data: () => ({
        name: "",
        shortDesc: "",
        longDesc: "",
        categoryId: "",
    }),
    props: ["item"],
    validations: {
        name: {
            required,
        },
        shortDesc: {
            required,
        },
        longDesc: {
            required,
            maxLength: maxLength(100),
        },
        categoryId: {
            required,
        },
    },
    created() {
        if (this.$route.params.id) {
            this.initialize();
        }
    },
    computed: {
        getTitle() {
            return this.$route.params.id ? "Edit Product" : "Add Product";
        },
        nameErrors() {
            const error = [];
            if (!this.$v.name.$dirty) return error;
            !this.$v.name.required && error.push("Name is required");
            return error;
        },
        shortDescErrors() {
            const error = [];
            if (!this.$v.shortDesc.$dirty) return error;
            !this.$v.shortDesc.required &&
                error.push("Short description is required");
            return error;
        },
        longDescErrors() {
            const error = [];
            if (!this.$v.longDesc.$dirty) return error;
            !this.$v.longDesc.required &&
                error.push("Long description is required");
            !this.$v.longDesc.maxLength &&
                error.push(
                    "Long description is must be less than 100 characters"
                );
            return error;
        },
        categoryIdErrors() {
            const error = [];
            if (!this.$v.categoryId.$dirty) return error;
            !this.$v.categoryId.required &&
                error.push("Category Id is required");
            return error;
        },
        getCategoryList() {
            return this.$store.state.categoryModule.categories;
        },
    },
    methods: {
        goBack() {
            this.$router.back();
        },
        initialize() {
            this.name = this.$props.item.name;
            this.shortDesc = this.$props.item.short_description;
            this.longDesc = this.$props.item.long_description;
            this.categoryId = this.$store.state.categoryModule.categories.find(
                (x) => x.id === this.$props.item.category_id
            ).id;
        },
        submit() {
            if (this.$route.params.id) {
                const userInput = {
                    id: this.$route.params.id,
                    name: this.name,
                    short_description: this.shortDesc,
                    long_description: this.longDesc,
                    category_id: this.categoryId,
                };
                this.$store.dispatch("productModule/edit", userInput);
            } else {
                const userInput = {
                    name: this.name,
                    short_description: this.shortDesc,
                    long_description: this.longDesc,
                    category_id: this.categoryId,
                };
                this.$store.dispatch("productModule/add", userInput);
            }
        },
    },
};
</script>
