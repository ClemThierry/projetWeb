<template>
  <div class="recipe-page">

    <div class="description">
      <h2> {{label}} </h2>
      <span>{{hachtags}}</span>
      <div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'RecipePage',
  props: {
    label : {type : String,  required: true},
    hachtags : {type : String},
    // pictureUrl: {type: String, default:"https://www.edamam.com/web-img/b4b/b4b3aead4d39f0871a1843aa313ab354.jpg"}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.recipe-page{
  background-color: brown;
  min-height: 90vh;
  width: 80vw;
}
</style>
