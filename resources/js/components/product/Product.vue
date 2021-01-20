<template>
	<v-container fluid>
    <v-toolbar flat>
      <v-text-field v-model="search" label="Search"></v-text-field>
      <v-divider class="mx-4" inset vertical></v-divider>
	  <router-link to="/product/add">
      	<v-btn color="primary" dark class="mb-2" > New Item </v-btn>
	  </router-link>
    </v-toolbar>
    <Table
      :headers="headers"
      :data="getData"
      :search="search"
      :component="1"
      :loading="loading"
    />
  </v-container>
</template>

<script>
import Table from "../common/Table";

export default {
	name: 'Product',
	components: {
		Table
	},
	data: () => ({
		headers: [
			{
				text: "Id",
				align: "start",
				value: "id"
			},
      {
        text: "Name",
        value: "name",
      },
			{ text: "Category", value: "category.name" },
      { text: "Short Description", value: "short_description" },
      { text: "Long Description", value: "long_description" },
			{ text: "actions", value: "actions", sortable: false }
		],
		data: [],
		search: "",
		loading: true
	}),
	created() {
		this.initialize();
	},
	computed: {
		getData() {
			this.data = this.$store.state.productModule.products;
			return this.data;
		}
	},
	methods: {
		initialize() {
			this.$store.dispatch('categoryModule/read');
			this.$store.dispatch('productModule/read');
			this.loading = false;
		}
	}
}
</script>