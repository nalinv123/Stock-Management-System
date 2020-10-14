<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
	  <Loader />
	  <Alert />
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Forgot Password</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <div>
              <p>Lost your password? Please enter your email address. You will receive a link to create a new password via email.</p>
            </div>
            <v-form>
              <v-text-field
                label="Email"
                name="email"
                :prepend-icon="icons.mdiEmail"
				v-model="email"
				:error-messages="emailErrors"
				@input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              />
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="primary" :disabled="this.$v.$invalid" @click="doForgotPassword()">
              Request new password.
            </v-btn>
          </v-card-actions>
          <router-link to="/">
            <v-btn
              text
              color="primary"
            >
              Back to Sign In.
            </v-btn>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiEmail } from '@mdi/js';
import { required, email } from 'vuelidate/lib/validators';
import Loader from '../common/Loader';
import Alert from '../common/Alert';

export default {
	name: 'ForgotPassword',
	components: {
		Loader,
		Alert
	},
	data: () => ({
		icons: {
			mdiEmail
		},
		email: ''
	}),
	validations: {
		email: {
			required,
			email
		}
	},
	computed: {
		emailErrors() {
			const error = [];
			if (!this.$v.email.$dirty) return error;
			!this.$v.email.required && error.push('Email is required');
			!this.$v.email.email && error.push('Please enter valid e-mail address.');
			return error;
		}
	},
	methods: {
		doForgotPassword() {
			const userInput = {
				email: this.email
			}
			
			this.$store.dispatch('loginModule/forgotPassword', userInput);
		}
	}
};
</script>