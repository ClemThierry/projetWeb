<template>
  <div v-show="isRecipeSelected" v-if="recipeData.length != 0">
    <div class="picture" v-bind:style="{ 'background-image': 'url(' + recipePictureURL + ')' }">
      <button id="back" @click="closeRecipe">
        <div id="arrow"></div>
      </button>
    </div>
    <div class="description">
      <h2> {{recipeData.recipe.label}} </h2>
      <div class="container-icon">
        <div class="icons">
          <img src="../assets/icons8-clock-64.png" alt="duration-icon"/>
          <p>{{recipeData.recipe.totalTime}} min</p>
        </div>
          <div class="icons">
          <img src="../assets/icons8-fire-64.png" alt="calories-icon"/>
          <p>{{recipeData.recipe.calories.toFixed(0)}} kcal</p>
        </div>
          <div class="icons">
          <img src="../assets/icons8-weight-64.png" alt="weight-icon"/>
          <p>{{recipeData.recipe.totalWeight.toFixed(0)}} g</p>
        </div>
      </div>
      <img v-bind:src="recipePictureURL" class="property-image" v-bind:alt="recipeData.recipe.label">
      <div class="container-ingredients">
        <h3>Ingredients</h3>
        <ul>
          <li v-for="ingredient in recipeData.recipe.ingredients"
          :key="ingredient.foodId">{{ingredient.text}}</li>
        </ul>
      </div>
      <div class="directions">
        <h3>Directions</h3>
        <p>If you want to do this recipe follow the link : <a v-bind:href="recipeData.recipe.url">{{recipeData.recipe.label}} directions</a></p>
      </div>
    </div>
  </div>

</template>

<script>
import {getRecipesDataById} from "@/services/api/recipesRepository.js"

export default {
  name: 'RecipePage',
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
    border: none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 5px;
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
    max-width: 110px;
  }

  .icons>img{
    background-color: #ffffff;
    border-radius: 100%;
    padding: 12px;
    object-fit: contain;
  }
  .container-ingredients{
    text-align: left;
    margin: auto;
    padding: 20px;
  }

  h3{
    font-size: 2em;
  }

  p, li{
    font-size: 1.3em;
  }

  @media screen and (min-width: 1024px){
    .property-image{
      max-height: 40vh;
      border-radius: 30px;
      margin: 20px auto;
    }
    .description{
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-content: center;
    }
    h2, .container-icon, .directions{
      grid-column: 1/span 2;
    }

  }

@media screen and (max-width: 1023px) {
  .picture{
    min-height: 50vh;
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
  }
  .property-image{
    display: none;
  }
}

</style>

