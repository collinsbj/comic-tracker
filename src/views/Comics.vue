<template>
	<v-container
		fluid
		grid-list-md
	>
		<v-layout
			row
			wrap
		>
			<v-flex xs3>
				hi
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import { marvelAPICalls } from "@/mixins.js"
import { mapState } from "vuex"

export default {
	name: "ComicsView",
	mixins: [marvelAPICalls],
	async mounted() {
		const characters = await this.marvelGET("https://gateway.marvel.com/v1/public/characters", this.offset)
		console.log("CHAR", characters)
	},
	computed: {
		...mapState({
			offset: state => state.offset
		})
	}
}
</script>

<style>

</style>
