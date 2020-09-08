<template>
    <!-- <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div> -->

					<div class="my-2">
        				<v-btn small tile outlined color="success">
							<v-icon left>{{ icons.mdiPencil }}</v-icon>Edit
						</v-btn>
      				</div>
                <!-- </div>
            </div>
        </div>
    </div> -->
</template>

<script>
	import { mdiPencil } from '@mdi/js';

    export default {
        mounted() {
            console.log('Component mounted.')
		},
		data: () => ({
			icons: {
				mdiPencil
			},
		}),
    }
</script>
