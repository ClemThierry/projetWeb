<template>
  <div class="divWantedForm">
    <div class="conteneur-form">
      <h1>Tu as une idée de ce que tu veux manger ? </h1>
      <input type="radio" v-model="checkedIdea" name="yes" value="yes">
      <label for="yes">Oui</label>
      <input type="radio" v-model="checkedIdea" name="no" value="no">
      <label for="no">Non</label>
    </div>
    <img src="../assets/sushi.png"/>
  <div id="answer">
    <form v-if="this.checkedIdea == 'yes'" @submit.prevent="sendingToGallery">
        <label for="foodWantedInput">Dis moi tout : </label>
        <input type="text" name="foodWantedInput" v-model="foodWanted" placeholder="Search type of food"/>
        <input type="submit" value="Valider" />
    </form>
    <p v-else-if="this.checkedIdea == 'no'"> Dans ce cas remplie le formulaire juste en dessous !</p>
  </div>



  </div>
</template>

<script>
export default {
  name: 'FoodWantedForm',
  props: {
    initialInput: {type : String, default : "pizza"}
  },
  data(){
    return{
      foodWanted: this.initialInput,
      checkedIdea:''
    }
  },
  methods: {
    sendingToGallery(){
      if (this.foodWanted == "moitout" || this.foodWanted == "moi tout" || this.foodWanted=="tout") {
        alert("C'était pas super drôle de ta part en vrai.");
      }else{
        this.$root.$emit("food-chosen", this.foodWanted);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form{
  font-size: 2em;
}

.divWantedForm{
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
}

.conteneur-form{
  padding: 5%;
}

img{
  max-width: 40vw;
}

.answer{
  grid-column: 1 / end;
}

legend{
  font-size:100px;
  color: #2c3e50;
  margin-bottom: 5%;
}

</style>