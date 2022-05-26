<template>
  <div class="conteneur-form">
    <img src="../assets/tacos.png"/>
    <form name="HealthForm">
      <fieldset>
        <legend>Do you have any dietary restrictions?</legend>
          <div id="responseConteneur">
            <div>
              <input @change="validation" type="checkbox" id="alcohol-cocktail" v-model="checkedHealth" name="diet" value="alcohol-cocktail">
              <label for="alcohol-cocktail">alcohol-cocktail</label>
            </div>
            <div>
              <input @change="validation" type="checkbox" id="alcohol-free" v-model="checkedHealth" name="diet" value="alcohol-free">
              <label for="alcohol-free">Alcohol Free</label>
            </div>
            <div>
              <input @change="validation" type="checkbox" id="dairy-free" v-model="checkedHealth" name="diet" value="dairy-free">
              <label for="dairy-free">Dairy free</label>
            </div>
            <div>
              <input @change="validation" type="checkbox" id="egg-free" v-model="checkedHealth" name="diet" value="egg-free">
              <label for="egg-free">egg-free</label>
            </div>
            <div>
              <input @change="validation" type="checkbox" id="gluten-free" v-model="checkedHealth" name="diet" value="gluten-free">
              <label for="gluten-free">gluten-free</label>
            </div>
            <div>
              <input @change="validation" type="checkbox" id="pork-free" name="diet" v-model="checkedHealth" value="pork-free">
              <label for="pork-free">pork-free</label>
            </div>
            <div>
              <input @change="validation" type="checkbox" id="peanut-free" v-model="checkedHealth" name="diet" value="peanut-free">
              <label for="peanut-free">peanut-free</label>
            </div>
            <div>
              <input @change="validation" type="checkbox" id="vegetarian" v-model="checkedHealth" name="diet" value="vegetarian">
              <label for="vegetarian">vegetarian</label>
            </div>
          </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HealthForm',
  props: {
  },
  data(){
    return{
      checkedHealth: []
    }
  },
  methods: {
    validation(){
      this.$root.$emit("healths-chosen", this.checkedHealth);
    }
  }
}
</script>

<style scoped>
*{
  font-size: 1em;
}

img{
  max-height: 50vh;
}

@media screen and (max-width: 880px) {
  img {
    display: none;
  }
}

.conteneur-form{
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
    background-color: #FCE49C;

}

.conteneur-form>*{
  margin: auto;
}

form{
  font-size: 2em;
}

#responseConteneur{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 10%;
}

#responseConteneur>*{
  margin: 8%;
  justify-self: start;
}

#responseConteneur>div>input{
  transform: scale(2);
  border-radius: 20px;
  margin-right: 15px;
}

#responseConteneur>div>input:checked{
  color: rgb(190, 26, 135);
}

fieldset{
  min-width: 40vw;
  max-width: 50vh;
  border-radius: 20px;
  border : none;
}

legend{
  font-size:1.5em;
  color: #2c3e50;
  margin-bottom: 5%;
}

</style>
