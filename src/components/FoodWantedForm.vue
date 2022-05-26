<template>
  <div class="divWantedForm">
    <div class="conteneur-form">
      <h2>Do you have an idea of what you want to eat? </h2>
      <input type="radio" v-model="checkedIdea" name="yes" value="yes">
      <label for="yes">Yes</label>
      <input type="radio" v-model="checkedIdea" name="no" value="no" @change="clearInputAndSend">
      <label for="no">No</label>
      <form v-if="this.checkedIdea == 'yes'" @submit.prevent="sendingToGallery">
        <label for="foodWantedInput">Tell me everything: </label>
        <input type="text" name="foodWantedInput" class="foodWantedInput" v-model="foodWanted" placeholder="Search type of food" maxlength="49" value="foodWanted"/>
        <input type="submit" value="Submit" class="myButton" />
      </form>
      <p v-else-if="this.checkedIdea == 'no'"> In this case fill in the forms below!</p>
    </div>
    <img src="../assets/sushi.png"/>
  </div>
</template>

<script>
export default {
  name: 'FoodWantedForm',
  watch: {
		foodWanted: function(newFoodWanted) {
			localStorage.setItem("foodWanted", newFoodWanted)
		},
		checkedIdea: function(newCheckedIdea) {
			localStorage.setItem("checkedIdea", newCheckedIdea)
		}
	},
  data(){
    return{
      foodWanted: localStorage.getItem("foodWanted") || "",
      checkedIdea:localStorage.getItem("checkedIdea") || ""
    }
  },
  methods: {
    clearInputAndSend(){
      this.foodWanted = "";
      this.sendingToGallery();
    },
    sendingToGallery(){
      if (this.foodWanted != "" || this.checkedIdea == "no") {
        if (this.foodWanted == "everything") {
          alert("That wasn't very funny of you.");
        }else{
          this.$root.$emit("food-chosen", this.foodWanted);
          this.goToTheNextForm();
        }
      }else{
        alert("Complet the form before submit.");
      }
    },
    goToTheNextForm(){
      window.scrollTo(0, window.innerHeight*2);
    }
  }
}
</script>

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

form{
  margin-top: 30px;
}

label,p{
  font-size:1.5em;
  color: #2c3e50;
  margin-bottom: 5%;
}

.foodWantedInput{
  margin-left: 5px;
  margin-right: 10px;
  padding:8px 20px;
  border-radius:38px;
  border: 1px solid #2c3e50;
  font-size:1.1em;
}

.myButton {
	box-shadow: 0px 2px 3px 1px #3e73276f;
	background-color:#FCE49C;
	border-radius:38px;
	display:inline-block;
	cursor:pointer;
	padding:10px 20px;
	text-decoration:none;
	text-shadow:0px 1px 0px #42B96A;
  color: #2c3e50;
  transition-duration: 0.4s;
  border: 1px solid #2c3e50;
}
.myButton:hover {
  background-color:#3e7327;
  color: #FCE49C;
  box-shadow: inset 0px 2px 3px 1px #FCE49C6f;
}
.myButton:active {
	position:relative;
	top:1px;
}

</style>