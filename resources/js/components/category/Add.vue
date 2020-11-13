<template>
  <v-container>
    <v-toolbar flat>
      <!-- <v-toolbar-title>{{ getTitle }}</v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-btn color="primary" dark class="mb-2" @click="goBack()">
        Go Back
      </v-btn>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-btn color="primary" class="mb-2" :disabled="this.$v.$invalid" @click="submit()">
        Save
      </v-btn>
    </v-toolbar>
    <v-card class="justify-center">
      <v-card-text>
        <v-text-field
          label="Category name"
          placeholder="Category name"
          outlined
          v-model="name"
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
          :error-messages="nameErrors"
        >
        </v-text-field>
        <v-text-field
          label="Category short description"
          placeholder="Category short description"
          outlined
          v-model="shortDesc"
          @input="$v.shortDesc.$touch()"
          @blur="$v.shortDesc.$touch()"
          :error-messages="shortDescErrors"
        ></v-text-field>
        <v-textarea
          label="Category long description"
          placeholder="Category long description"
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
  name: "AddCategory",
  data: () => ({
    name: "",
    shortDesc: "",
    longDesc: "",
  }),
	props: ['item'],
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
  },
	created() {
		if (this.$route.params.id) {
			this.initialize()
		}
	},
  computed: {
    getTitle() {
      return this.$route.params.id ? "Edit Category" : "Add Category";
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
      !this.$v.longDesc.required && error.push("Long description is required");
      !this.$v.longDesc.maxLength &&
        error.push("Long description is must be less than 100 characters");
      return error;
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
		},
		submit() {
			if (this.$route.params.id) {
				let userInput = {
					id: this.$route.params.id,
					name: this.name,
					short_description: this.shortDesc,
					long_description: this.longDesc
				}
				this.$store.dispatch('categoryModule/edit', userInput);
			} else {
				let userInput = {
					name: this.name,
					short_description: this.shortDesc,
					long_description: this.longDesc
				}
				this.$store.dispatch('categoryModule/add', userInput);
			}
		}
  },
};
</script>