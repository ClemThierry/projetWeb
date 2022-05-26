<template>
  <div class="conteneur-form">
    <form name="DietForm">
      <fieldset>
        <legend>Do you have a special diet?</legend>
          <div id="responseConteneur">
            <div>
              <input @change="validation" type="checkbox" id="balanced" v-model="checkedDiets" name="diet" value="balanced">
              <label for="balanced">Balanced</label>
            </div>
            <div>
              <input @change="validation" type="checkbox" id="high-fiber" v-model="checkedDiets" name="diet" value="high-fiber">
              <label for="high-fiber">High fiber</label>
            </div>
            <div>
              <input @change="validation" type="checkbox" id="high-protein" v-model="checkedDiets" name="diet" value="high-protein">
              <label for="high-protein">High protéine</label>
            </div>
            <div>
              <input @change="validation" type="checkbox" id="low-carb" v-model="checkedDiets" name="diet" value="low-carb">
              <label for="low-carb">Low-carb</label>
            </div>
            <div>
              <input @change="validation" type="checkbox" id="low-fat" v-model="checkedDiets" name="diet" value="low-fat">
              <label for="low-fat">Low-fat</label>
            </div>
          <div>
        <input @change="validation" type="checkbox" id="low-sodium" name="diet" v-model="checkedDiets" value="low-sodium">
        <label for="low-sodium">Low-Sodium</label>
      </div>
          </div>
      </fieldset>
    </form>
    <img src="../assets/banana.png"/>
  </div>
</template>

<script>
export default {
  name: 'DietForm',
  props: {
  },
  data(){
    return{
      checkedDiets: []
    }
  },
  methods: {
    validation(){
      this.$root.$emit("diet-chosen", this.checkedDiets);
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
  background-color: #42B96A;
}

.conteneur-form>*{
  margin: auto;
}

form{
  color: white;
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
