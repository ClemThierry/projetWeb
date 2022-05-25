<template>
  <div class="counterRecipes">{{numberOfRecipesFound}} founded</div>
</template>

<script>
export default {
  name: 'RecipesFound',
  data(){
    return{
    numberOfRecipesFound : 0,
	}},
  mounted(){
    this.$root.$on('recipes-number', (nb) => {
      this.numberOfRecipesFound = nb;
    })
  },
}
</script>
<style scooped>
.counterRecipes{
  position: fixed;
  top: 30px;
  right: 30px;
  background-color: #FFFCEB;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 4px 4px 2px 1px #3e732742;
  z-index: 3;
}
</style>

