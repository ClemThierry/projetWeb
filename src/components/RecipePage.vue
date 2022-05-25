<template>
  <div v-show="isRecipeSelected" v-if="recipeData.length != 0">
    <div class="picture" v-bind:style="{ 'background-image': 'url(' + recipePictureURL + ')' }">
      <button id="back" @click="closeRecipe">
        <div id="arrow"></div>
      </button>
    </div>

    <div class="description">
      <h2> {{recipeData.recipe.label}} </h2>
      <!-- <img v-bind:src="recipePictureURL" class="property-image" v-bind:alt="recipeData.recipe.label"> -->
      <div class="container-icon">
        <div class="icons">
          <img src="../assets/icons8-clock-64.png" alt="duration-icon"/>
          <p>{{recipeData.recipe.totalTime}} min</p>
        </div>
          <div class="icons">
          <img src="../assets/icons8-fire-100.png" alt="calories-icon"/>
          <p>{{recipeData.recipe.calories.toFixed(0)}} kcal</p>
        </div>
          <div class="icons">
          <img src="../assets/icons8-weight-100.png" alt="weight-icon"/>
          <p>{{recipeData.recipe.totalWeight.toFixed(0)}} g</p>
        </div>
      </div>
      <div class="container-ingredients">
        <h3>Ingredients</h3>
        <ul>
          <li v-for="ingredient in recipeData.recipe.ingredients"
          :key="ingredient.foodId">{{ingredient.text}}</li>
        </ul>
      </div>
      <div>
        <h3>Directions</h3>
        <!-- <ol>
          <li v-for="direction in recipeData.recipe.ingredients"
          :key="ingredient.foodId">{{ingredient.food}}</li>
        </ol> -->
      </div>
    </div>
  </div>

</template>

<script>
import {getRecipesDataById} from "@/services/api/recipesRepository.js"

export default {
  name: 'RecipePage',
  props: {
    //label : {type : String,  required: true},
    //hachtags : {type : String},
    // pictureUrl: {type: String, default:"https://www.edamam.com/web-img/b4b/b4b3aead4d39f0871a1843aa313ab354.jpg"}
	},
  data(){
    return{
      recipeData: [],
      recipeID: null,
      isRecipeSelected : false,
      recipePictureURL: null
    }
  },
  mounted(){
    this.$root.$on('recipe-to-render', (id) => {
      console.log(id);
      this.recipeID = id;
      this.isRecipeSelected = true;

      if (this.recipeID) {
        this.getARecipe(this.recipeID);
      }
    })
  },
  methods: {
    getARecipe: async function() {
        this.recipeData = await getRecipesDataById(this.recipeID);

        if (typeof this.recipeData.recipe.images.LARGE !== 'undefined') {
          this.recipePictureURL = this.recipeData.recipe.images.LARGE.url;
        }else{
          this.recipePictureURL = this.recipeData.recipe.images.REGULAR.url;
        }
        console.log(this.recipeData.recipe);
    },

    closeRecipe: function () {
      this.isRecipeSelected = false;
    }
}
}
</script>
<style>

  #back{
    top: 2vh;
    left: 2vh;
    position: absolute;
    background: #ffffff;
    border-radius: 100%;
    font-size: 2em;
    font-family: Arial, Helvetica, sans-serif;
    padding: 5px;
    /* border: #42B96A 5px solid; */
    border: none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;  
  }

  #arrow{
    margin: 1vh;
    margin-left: 1.25vh;
    margin-right: 0.75vh;
    height: 1vh;
    width: 1vh;
    border-width: 0px 0px 3px 3px;
    border-color: #000000;
    border-style: solid;
    transform: rotate(45deg);
    border-radius: 2px;
  }

  #back:hover{
    box-shadow: rgb(203, 203, 203) 3px 0px 3px 0px inset;
  }

  .picture{
    background-color: chocolate;
    background-image: none;
    position: relative;
  }

@media screen and (max-width: 1023px) {
  .picture{
    min-height: 50vh;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  }
}

.description{
  padding: 15px;
  padding-left: 8%;
  padding-right: 8%;
}

.container-icon{
  display: flex;
  flex-wrap: wrap;
}

.icons{
  background-color: #42B96A;
  padding: 5px;
  border-radius: 50px;
  margin: auto;
}

.icons>img{
  background-color: white;
  border-radius: 100%;
  padding: 12px;
  width: 8vw;
}
.container-ingredients{
  text-align: left;
  margin: auto;
}

</style>

