<template>
  <div class="divWantedForm">
    <div class="conteneur-form">
      <h2>Do you have an idea of what you want to eat? </h2>
      <input type="radio" v-model="checkedIdea" name="yes" value="yes">
      <label for="yes">Yes</label>
      <input type="radio" v-model="checkedIdea" name="no" value="no" @click="goToTheNextForm">
      <label for="no">No</label>
          <form v-if="this.checkedIdea == 'yes'" @submit.prevent="sendingToGallery">
        <label for="foodWantedInput">Tell me everything: </label>
        <input type="text" name="foodWantedInput" v-model="foodWanted" placeholder="Search type of food"/>
        <input type="submit" value="Submit" />
    </form>
    <p v-else-if="this.checkedIdea == 'no'"> In this case fill in the forms below!</p>
    </div>
    <img src="../assets/sushi.png"/>






  </div>
</template>

<script>
export default {
  name: 'FoodWantedForm',
  props: {
    initialInput: {type : String, default : "pizza"},
  },
  data(){
    return{
      foodWanted: this.initialInput,
      checkedIdea:''
    }
  },
  methods: {
    sendingToGallery(){
      if (this.foodWanted == "everything") {
        alert("That wasn't very funny of you.");
      }else{
        this.$root.$emit("food-chosen", this.foodWanted);
        this.goToTheNextForm();
      }
    },
    goToTheNextForm(){
      window.scrollTo(0, window.innerHeight*2);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 881px) {
  .divWantedForm {
  grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 880px) {
  .divWantedForm{
    grid-template-columns: 1fr;
  }
}

form{
  font-size: 2em;
    grid-column: 1 / end;
}

.divWantedForm{
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;

}

.conteneur-form{
  padding: 5%;
}

img{
  max-width: 40vw;
  margin: auto;
}

legend{
  font-size:100px;
  color: #2c3e50;
  margin-bottom: 5%;
}

</style>