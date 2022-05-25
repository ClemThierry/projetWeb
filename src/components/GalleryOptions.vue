<template>
    <div class="gallery-options">
        <input type="text" :value="search" @input="onSearchChanged" placeholder="Search food">
        <button v-if="search" @click="cleanSearch">X</button>
		<label for="recipe-sort">Trier par : </label>
			<select :value="recipesSortType" @input="onRecipesSortTypeChanged" id="recipe-sort">
				<option value="AZName">Name de A à Z</option>
				<option value="ZAName">Name de Z à A</option>
				<option value="AZCal">Calories max</option>
				<option value="ZACal">Calories min</option>
			</select>
    </div>
</template>

<script>
export default {
  name: 'GalleryOptions',
	props: {
		search: String,
		recipesSortType: String
  },
	watch: {
		search: function(newSearch) {
			localStorage.setItem("search", newSearch)
		},
		recipesSortType: function(newrecipesSortType) {
			localStorage.setItem("recipesSortType", newrecipesSortType)
		}
	},
	methods: {
		cleanSearch: function() {
			this.$emit('update:search', "")
		},
		onSearchChanged(event) {
			this.$emit('update:search', event.target.value) 
		},
		onRecipesSortTypeChanged(event) {
			this.$emit('update:recipesSortType', event.target.value) 
		},
	}
}
</script>