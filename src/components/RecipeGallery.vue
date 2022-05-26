<template>
    <div class="recipes-gallery" v-if="this.recipesData.count != 0">
      <h2>Recipe Suggest</h2>
      <GalleryOptions :search.sync="search" :recipesSortType.sync="recipesSortType"/>
      <div class="gallery">
        <RecipeCard 
        v-for="recipes in recipesOrganizedData"
        :recipeId="recipes.recipe.uri"
        :label="recipes.recipe.label"
        :pictureUrl="recipes.recipe.image"
        :calories="recipes.recipe.calories"
        :key="recipes.recipe.uri"
        @click.native="selectOneRecipe(recipes.recipe.uri)"
        />
      </div>
      <button class="myButton" v-if="isOtherRecipes" @click="otherRecipes">Others suggest</button>
      <RecipePage class="recipe-page"/>

		</div>
</template>

<script>
    import RecipeCard from './RecipeCard.vue';
		import {getRecipesData} from '../services/api/recipesRepository';
    import RecipePage from './RecipePage.vue';
    import GalleryOptions from './GalleryOptions.vue';

export default {
  name: 'RecipeGallery',
  props:{
  },
  components: {
    RecipeCard,
    RecipePage,
    GalleryOptions
  },
  created: function () {
    this.retrieveRecipesData()
  },
  computed: {
		recipesOrganizedData: function() {
      let computedData;
      if (this.recipesData.hits != undefined) {
        computedData = this.recipesData.hits.slice();
        const filterFunc = (a) => a.recipe.label.toLowerCase().includes(this.search.toLowerCase());
        computedData = computedData.filter(filterFunc);

        switch (this.recipesSortType) {
          case 'AZName':
            computedData = computedData.sort((a, b) => {
              if (a.recipe.label > b.recipe.label) {
                return 1
              }
              if (b.recipe.label> a.recipe.label) {
                return -1
              }
              return 0
            })
            break
          case 'ZAName':
            computedData = computedData.sort((a, b) => {
              if (a.recipe.label> b.recipe.label) {
                return -1
              }
              if (b.recipe.label> a.recipe.label) {
                return 1
              }
              return 0
            })
            break
          case 'ZACal':
            computedData = computedData.sort((a, b) => {
              if (a.recipe.calories > b.recipe.calories) {
                return 1
              }
              if (b.recipe.calories > a.recipe.calories) {
                return -1
              }
              return 0
            })
            break
          case 'AZCal':
            computedData = computedData.sort((a, b) => {
              if (a.recipe.calories > b.recipe.calories) {
                return -1
              }
              if (b.recipe.calories > a.recipe.calories) {
                return 1
              }
              return 0
            })
            break
          default:
            break
			}
      }
      return computedData;     
		}
  },
  watch: {
		recipesData: function() {
      if (typeof(this.recipesData._links.next) != "undefined") {
          this.isOtherRecipes = true;
      } else {
          this.isOtherRecipes = false;
      }
		}
	},
  data(){
    return {
      recipesData: [],
      search: localStorage.getItem("search") || "",
      foodWantedFromForm : localStorage.getItem("foodWantedFromForm") || "",
      recipesSortType: localStorage.getItem("recipesSortType") || "AZName",
      newRequest : null,
      isOtherRecipes: true,
      checkedDietsFromForm: localStorage.getItem("checkedDietsFromForm") || [],
      checkedHealthFromForm: localStorage.getItem("checkedHealthFromForm") || [],
      recipeClicked : "http://www.edamam.com/ontologies/edamam.owl#recipe_5cfd32ab67396a6249f599b2f53e6b57"
    }
	},
  mounted(){
    this.$root.$on('diet-chosen', (checkedDiets) => {
      this.checkedDietsFromForm = checkedDiets;
      this.retrieveRecipesData();
    }),
    this.$root.$on('food-chosen', (foodWanted) =>{
      this.foodWantedFromForm = foodWanted;
      this.retrieveRecipesData();
    }),
    this.$root.$on('healths-chosen', (checkedHealths) =>{
      this.checkedHealthFromForm = checkedHealths;
      this.retrieveRecipesData();
    })
  },
	methods: {
		async retrieveRecipesData() {
				this.recipesData = await getRecipesData(this.foodWantedFromForm, this.checkedDietsFromForm, this.checkedHealthFromForm);
        this.$root.$emit("recipes-number", this.recipesData.count);
		},
    selectOneRecipe(id) {
      this.$root.$emit("recipe-to-render", id);
    },
    async otherRecipes(){
      this.newRequest = this.recipesData._links.next.href;
      this.recipesData = await getRecipesData(this.newRequest);
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
  }
}

@media screen and (max-width: 767px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}

.gallery > *{
  justify-self: center;
  align-self: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

.recipe-page{
  position: absolute;
  top: 30px;
  width: 70vw;
  background: #FFFCEB;
  border-radius: 30px;
  margin-left: 15vw;
  transition-duration: 2s;
  overflow: hidden;
  -webkit-box-shadow: 0px 10px 13px -7px #c7c7c7, 0px 10px 27px 9px #f3f2f2a6; 
  box-shadow: 0px 10px 13px -7px #c7c7c7, 0px 10px 27px 9px #f3f2f2a6;
}
</style>
