<template>
	<div>
		<v-container fluid>
			<v-layout column>
				<div class="text-xs-center">
					Welcome to the Marvel Comic Book Reading List Creator and Other Such Things
				</div>
				<v-layout
					row
					justify-center
				>
					<router-link to="/comics">
						<v-btn>
							Enter
						</v-btn>
					</router-link>
				</v-layout>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	name: "Entry"
}
</script>
