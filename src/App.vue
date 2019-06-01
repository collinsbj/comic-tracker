<template>
	<v-app>
		<v-content>
			<router-view/>
		</v-content>
	</v-app>
</template>

<script>
import Home from "@/views/Home.vue"

export default {
	name: "App",
	components: {
		Home
	},
	created() {
		fetch(`http://localhost:${process.env.PORT || 3000}/comics`)
			.then(response => response.json())
			.then(response => console.log("RESP", response))
			.catch(err => console.log(err))
	}
}
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100%;
}
</style>
