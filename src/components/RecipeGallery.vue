<template>

    <div class="recipes-gallery">
      <div>
        <h3>Une envie particulière ?</h3>
        <input type="text" v-model="search" placeholder="Search type of food" @change="retrieveRecipesData"/>
      </div>
      <h2>Recipe Suggest</h2>
      <div class="gallery">
        <RecipeCard 
        v-for="recipes in recipesData.hits"
        :recipeId="recipes.recipe.uri"
        :label="recipes.recipe.label"
        :pictureUrl="recipes.recipe.image"
        :calories="recipes.recipe.calories"
        :key="recipes.recipe.uri"
        @click.native="selectOneRecipe(recipes.recipe.uri)"
        />
      </div>
      <button class="myButton" v-if="isNextPage" @click="nextPage">Next page</button>
      <!-- <button @click="openRecipePage">Test</button> -->
      <RecipePage class="recipe-page"/>

		</div>
</template>

<script>
    import RecipeCard from './RecipeCard.vue';
		import {getRecipesData} from '../services/api/recipesRepository';
    import RecipePage from './RecipePage.vue';

// console.log(getRecipesData("pizza"));

export default {
  name: 'RecipeGallery',
  props:{
    initialInput: {type : String, default : "pizza"},

},
  components: {
    RecipeCard,
    RecipePage
  },
  data(){
    return {
      recipesData: [],
      search: this.initialInput,
      newRequest : null,
      isNextPage: true
      //recipeClicked : "http://www.edamam.com/ontologies/edamam.owl#recipe_5cfd32ab67396a6249f599b2f53e6b57"
    }
  },
  created: function () {
    this.retrieveRecipesData()
  },
	methods: {

		async retrieveRecipesData() {
				this.recipesData = await getRecipesData(this.search);
        //console.log(this.recipesData.hits[0].recipe.label);
		},

    selectOneRecipe(id) {
      console.log(id);
      this.$root.$emit("recipe-to-render", id);
    },

    async nextPage(){
      this.newRequest = this.recipesData._links.next.href;
      this.recipesData = await getRecipesData(this.newRequest);
      console.log(this.recipesData);
      if (typeof(this.recipesData._links.next) != "undefined") {
        this.isNextPage = true;
      } else {
        this.isNextPage = false;
      }
    }

	}
}


</script>

<style>
.recipes-gallery{
  position: relative;
}

.gallery{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}


@media screen and (min-width: 1024px) and (max-width: 1222px) {
.gallery{
	grid-template-columns: 1fr 1fr 1fr 1fr;
}
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .gallery {
    grid-template-columns: 1fr 1fr 1fr;
    background-color: lightgreen;
  }
}

@media screen and (max-width: 767px) {
  .gallery {
    grid-template-columns: 1fr;
    background-color: lavender;
  }
}

input{
  /* grid-column-start: 1; */
  /* grid-column-end: span col4-start; */
  /* grid-column: 1/6; */
}


.gallery > *{
  justify-self: center;
  align-self: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

.recipe-page{
  position: absolute;
  top: 0;
  background-color: #FCE49C;
  min-height: 90vh;
  width: 80vw;
  border-radius: 30px;
  margin-left: 10vw;
  transition-duration: 2s;
  overflow: hidden;
}
</style>
