<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field label="Login" name="login" :prepend-icon="icons.mdiEmail" type="text"></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                :prepend-icon="icons.mdiLock"
                :append-icon="show ? icons.mdiEye : icons.mdiEyeOff"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="primary">Login</v-btn>
          </v-card-actions>
          <v-btn text color="primary">Forgot Password?</v-btn>
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

export default {
  name: "Login",
  data: () => ({
    icons: {
      mdiEmail,
      mdiLock,
      mdiEye,
      mdiEyeOff,
    },
    show: false,
  }),
};
</script>