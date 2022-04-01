<template>

    <div class="recipes-gallery">
      <h2>Recipe Suggest</h2>
      <div class="gallery">
        <input type="text" v-model="search" placeholder="Search type of food" @change="retrieveRecipesData"/>
        <RecipeCard 
        v-for="recipes in recipesData.hits"
        :label="recipes.recipe.label"
        :pictureUrl="recipes.recipe.image"
        :calories="recipes.recipe.calories"
        :key="recipes.uri"/>
        <!-- <RecipePage label="chat" /> -->
      </div>
		</div>
</template>

<script>
    import RecipeCard from './RecipeCard.vue';
		import getRecipesData from '../services/api/recipesRepository';
    // import RecipePage from './RecipePage.vue';

// console.log(getRecipesData("pizza"));

export default {
  name: 'RecipeGallery',
  props:{
    initialInput: {type : String, default : "pizza"},

},
  components: {
    RecipeCard,
    // RecipePage
  },
  data(){
    return {
      recipesData: [],
      search: this.initialInput
    }
  },
  created: function () {
    this.retrieveRecipesData()
  },
	methods: {

		async retrieveRecipesData() {
				this.recipesData = await getRecipesData(this.search);
        console.log(typeof getRecipesData(this.search));
		}

    // openRecipePage(event){
    //   event.target.
    // }

	}
}


</script>

<style>
input{
  /* grid-column-start: 1; */
  /* grid-column-end: span col4-start; */
  grid-column: 1/6;
}

.gallery{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  /* padding: 5vh; */
}
.gallery > *{
  justify-self: center;
  align-self: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
}
</style>
