<template>
  <div class="recipe-card" RecipeId="recipeId">
          <img v-bind:src="pictureUrl" class="property-image" alt="...">

    <div class="property-description">
      <h5> {{label}} </h5>
      <p class="calories">{{roundCalories}} kcal</p>
    </div>

      <p class="property-social-icons"> </p>
  </div>

</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    recipeId : {type : String, required : true},
    label : {type : String,  required: true},
    pictureUrl: {type: String, default:"https://www.edamam.com/web-img/b4b/b4b3aead4d39f0871a1843aa313ab354.jpg"},
    calories : {type : Number, required: true}
	},
  computed : {
    roundCalories : function(){
      return this.calories.toFixed(0);
    }
  }
}
</script>

<style scoped>
*
{
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

h5
{
  font-family: 'Rancho', cursive;
  margin:0px;
  font-size:1.4em;
  font-weight:700;
  max-height: 2.5em;
  overflow: hidden;
}

p
{
  font-size:12px;
}

.recipe-card
{
  height:18em;
  width:14em;

  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;

  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;

  -ms-flex-direction:column;
  flex-direction:column;

  position:relative;

  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

  border-radius:20px;
  overflow:hidden;

-webkit-box-shadow: 0px 10px 13px -7px #c7c7c7, 0px 10px 27px 9px #f3f2f2a6; 
box-shadow: 0px 10px 13px -7px #c7c7c7, 0px 10px 27px 9px #f3f2f2a6;

}

.property-image
{

  min-width: 14em;
  position:Absolute;
  top:0;
  left: 0;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

}

.property-description
{
  background-color: #FAFAFC;
  height:7em;
  width:14em;
  position:absolute;
  bottom:0em;

  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0.5em 1em;
  text-align:center;
}

.property-social-icons
{
  width:1em;
  height:1em;
  background-color:black;
  position:absolute;
  bottom:1em;
  left:1em;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.recipe-card:hover .property-description
{
  height:0em;
  padding:0px 1em;
}


.recipe-card:hover .property-social-icons
{
  background-color:white;
}

.recipe-card:hover .property-social-icons:hover
{
  background-color:rgb(91, 223, 152);
  cursor:pointer;
}

.calories{
  position: absolute;
  right: 1.5em;
  bottom: 0.5em;
}
</style>
