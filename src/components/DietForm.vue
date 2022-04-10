<template>
  <div class="conteneur-form">
    <form>
      <fieldset>
        <legend>As-tu un régime particulier ?</legend>
          <div id="responseConteneur">
            <div>
              <input type="checkbox" id="balanced" name="diet" value="balanced">
              <label for="balanced">Balanced</label>
            </div>
            <div>
              <input type="checkbox" id="hight-fiber" name="diet" value="hight-fiber">
              <label for="hight-fiber">Hight fiber</label>
            </div>
            <div>
              <input type="checkbox" id="hight-protein" name="diet" value="hight-protein">
              <label for="hight-protein">Hight protéine</label>
            </div>
            <div>
              <input type="checkbox" id="low-carb" name="diet" value="low-carb">
              <label for="low-carb">Low-carb</label>
            </div>
            <div>
              <input type="checkbox" id="low-fat" name="diet" value="low-fat">
              <label for="low-fat">Low-fat</label>
            </div>
          <div>
        <input type="checkbox" id="low-sodium" name="diet" value="low-sodium">
        <label for="low-sodium">Low-Sodium</label>
      </div>
          </div>
          <div>
            <a href="recipes-gallery"><input type="submit" class="myButton" value="Envoyer le formulaire"></a>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
