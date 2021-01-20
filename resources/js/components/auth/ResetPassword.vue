<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <Alert />
                <Loader />
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Reset Password</v-toolbar-title>
                        <v-spacer />
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                label="Email"
                                name="email"
                                :prepend-icon="icons.mdiEmail"
                                v-model="email"
                                :error-messages="emailErrors"
                                @input="$v.email.$touch()"
                                @blur="$v.email.$touch()"
                                :disabled="true"
                            />

                            <v-text-field
                                id="password"
                                label="Password"
                                name="password"
                                :prepend-icon="icons.mdiLock"
                                :append-icon="
                                    show ? icons.mdiEye : icons.mdiEyeOff
                                "
                                :type="show ? 'text' : 'password'"
                                @click:append="show = !show"
                                v-model="password"
                                :error-messages="passwordErrors"
                                @input="$v.password.$touch()"
                                @blur="$v.password.$touch()"
                            />
                            <v-text-field
                                id="confirm_password"
                                label="Confirm Password"
                                name="confirm_password"
                                :prepend-icon="icons.mdiLock"
                                :append-icon="
                                    show ? icons.mdiEye : icons.mdiEyeOff
                                "
                                :type="show ? 'text' : 'password'"
                                @click:append="show = !show"
                                v-model="confirmPassword"
                                :error-messages="confirmPasswordErrors"
                                @input="$v.confirmPassword.$touch()"
                                @blur="$v.confirmPassword.$touch()"
                            />
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn
                            color="primary"
                            :disabled="$v.$invalid"
                            @click="doResetPassword()"
                        >
                            Login
                        </v-btn>
                    </v-card-actions>
                    <router-link to="/">
                        <v-btn text color="primary"> Back to Sign In? </v-btn>
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
import { required, email, sameAs } from "vuelidate/lib/validators";
import Loader from "../common/Loader";
import Alert from "../common/Alert";

export default {
    name: "ResetPassword",
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
        confirmPassword: "",
        token: "",
    }),
    created() {
        this.fetchData();
    },
    validations: {
        email: {
            required,
            email,
        },
        password: {
            required,
        },
        confirmPassword: {
            sameAsPassword: sameAs("password"),
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
        confirmPasswordErrors() {
            const error = [];
            if (!this.$v.confirmPassword.$dirty) return error;
            !this.$v.confirmPassword.sameAsPassword &&
                error.push("Password should be same");
            return error;
        },
    },
    methods: {
        fetchData() {
            this.email = this.$route.params.email;
            this.token = this.$route.params.token;
        },
        doResetPassword() {
            const userInput = {
                email: this.email,
                password: this.password,
                password_confirmation: this.confirmPassword,
                token: this.token,
            };

            this.$store.dispatch("loginModule/resetPassword", userInput);
        },
    },
};
</script>
