<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <Loader />
                <Alert />
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Login form</v-toolbar-title>
                        <v-spacer />
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                v-model="email"
                                label="Email"
                                name="email"
                                :prepend-icon="icons.mdiEmail"
                                type="text"
                                :error-messages="emailErrors"
                                @input="$v.email.$touch()"
                                @blur="$v.email.$touch()"
                            />

                            <v-text-field
                                id="password"
                                v-model="password"
                                label="Password"
                                name="password"
                                :prepend-icon="icons.mdiLock"
                                :append-icon="
                                    show ? icons.mdiEye : icons.mdiEyeOff
                                "
                                :type="show ? 'text' : 'password'"
                                :error-messages="passwordErrors"
                                @click:append="show = !show"
                                @input="$v.password.$touch()"
                                @blur="$v.password.$touch()"
                            />
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn
                            color="primary"
                            :disabled="this.$v.$invalid"
                            @click="doLogin()"
                        >
                            Login
                        </v-btn>
                    </v-card-actions>
                    <router-link to="/forgot_password">
                        <v-btn text color="primary"> Forgot Password? </v-btn>
                    </router-link>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mdiEmail } from "@mdi/js";
import { mdiLock } from "@mdi/js";
import { mdiEye } from "@mdi/js";
import { mdiEyeOff } from "@mdi/js";
import { required, email } from "vuelidate/lib/validators";
import Loader from "../common/Loader";
import Alert from "../common/Alert";

export default {
    name: "Login",
    components: {
        Loader,
        Alert,
    },
    data: () => ({
        icons: {
            mdiEmail,
            mdiLock,
            mdiEye,
            mdiEyeOff,
        },
        show: false,
        email: "",
        password: "",
    }),
    validations: {
        email: {
            required,
            email,
        },
        password: {
            required,
        },
    },
    computed: {
        emailErrors() {
            const error = [];
            if (!this.$v.email.$dirty) return error;
            !this.$v.email.required && error.push("Email is required");
            !this.$v.email.email &&
                error.push("Please enter valid e-mail address.");
            return error;
        },
        passwordErrors() {
            const error = [];
            if (!this.$v.password.$dirty) return error;
            !this.$v.password.required && error.push("Password is required");
            return error;
        },
    },
    methods: {
        doLogin() {
            const userInput = {
                email: this.email,
                password: this.password,
            };

            this.$store.dispatch("loginModule/login", userInput);
        },
    },
};
</script>
