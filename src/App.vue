<template>
  <div id="app">
    <HelloPart idToScrollAfter="#food-form"/>
    <RecipesFound/>
    <FoodWantedForm id="food-form" idToScrollAfter="#health-form"/>
    <HealthForm id="health-form"/>
    <DietForm id="diet-form"/>
    <RecipeGallery id="recipes-gallery"/>
  </div>
</template>

<script>
    import HelloPart from './components/HelloPart.vue';
    import RecipesFound from './components/RecipesFound.vue';
    import RecipeGallery from './components/RecipeGallery.vue';
    import DietForm from './components/DietForm.vue';
    import FoodWantedForm from './components/FoodWantedForm.vue';
    import HealthForm from './components/HealthForm.vue';

export default {
  name: 'App',
  props:[],
  components: {
    HelloPart,
    RecipesFound,
    RecipeGallery,
    DietForm,
    FoodWantedForm,
    HealthForm
  },
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rancho&display=swap');
*{
  font-family: 'Rancho', cursive;
  scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

body{
  margin: 0;
  background-color: #FFFCEB;
}

h1{
  font-size: 4em;
}

h2{
  font-size: 2.5em;
}
</style>
