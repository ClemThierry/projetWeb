<template>

    <div class="recipes-gallery">
      <div>
        <h3>Une envie particulière ?</h3>
        <input type="text" v-model="search" placeholder="Search type of food" @change="retrieveRecipesData"/>
        <label for="dog-sort">Trier par : </label>
				<select v-model="recipesSortType" id="dog-sort" @input="retrieveRecipesData">
          <option value="AZName">Name de A à Z</option>
          <option value="ZAName">Name de Z à A</option>
          <option value="AZCal">Calories max</option>
          <option value="ZACal">Calories min</option>
				</select>
      </div>
      <h2>Recipe Suggest</h2>
      <div class="gallery">
        <RecipeCard 
        v-for="recipes in recipesOrganizedData.hits"
        :recipeId="recipes.recipe.uri"
        :label="recipes.recipe.label"
        :pictureUrl="recipes.recipe.image"
        :calories="recipes.recipe.calories"
        :key="recipes.recipe.uri"
        @click.native="selectOneRecipe(recipes.recipe.uri)"
        />
      </div>
      <button class="myButton" v-if="isNextPage" @click="nextPage">Next page</button>
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
  created: function () {
    this.retrieveRecipesData()
  },
  computed: {
		recipesOrganizedData: function() {
      //const field = ["AZName", "ZAName"].includes(this.persoSortType) ? "label" : "calories";
      //const comparator = (a, b) => a.recipe.colories.localeCompare(b.recipe.calories);

      const reversed = ["ZAName", "ZACal"].includes(this.recipesSortType);

      let computedData = this.recipesData;
      //computedData.hits.sort(comparator);
      if (reversed) {
        computedData.hits.reverse();
      }
      //console.log(computedData.hits[0]);   //undifined pour 0 raison :(   
      console.log(computedData);
      return computedData;
		}
  },
  data(){
    return {
      recipesData: [],
      search: this.initialInput,
      recipesSortType: "AZName",
      newRequest : null,
      isNextPage: true,
      checkedDietsFromForm: []
      //recipeClicked : "http://www.edamam.com/ontologies/edamam.owl#recipe_5cfd32ab67396a6249f599b2f53e6b57"
    }
	},
  mounted(){
    this.$root.$on('diet-chosen', (checkedDiets) => {
      console.log("Bien reçu bien reçu !");
      console.log(checkedDiets);
      this.checkedDietsFromForm = checkedDiets;
      this.retrieveRecipesData();
    })
    //this.recipesData = this.recipesOrganizedData;
  },
	methods: {
		async retrieveRecipesData() {
				this.recipesData = await getRecipesData(this.search, this.checkedDietsFromForm);
        //console.log(this.recipesData.hits[0].recipe.label);
        console.log(this.recipesData);
		},
    selectOneRecipe(id) {
      //console.log(id);
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
