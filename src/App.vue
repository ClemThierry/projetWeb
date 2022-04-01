<template>
  <div id="app">
    <div id="welcome">
      <img src="./assets/broccoli-vegetable.gif"/>
      <div id="text">
        <h2>Hello !</h2>
        <p>I’m Steev. I’m going to help you to meal prep ! But first in need some information about your life style.</p> 
        <p>Ready ? </p>
        <a href="#form" class="myButton">Let's go</a>
      </div>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="green" d="M68.3215 -64.3708C-67.8008 43.0458 22.5817 198.582 159.312 299.719C321.963 420.029 204.743 537.071 401.114 666.276C597.485 795.481 1030.43 663.879 1117.16 539.907C1222.2 409.55 1147.65 298.643 1053.52 172.383C959.387 46.1224 1015.24 -81.6527 731.248 -168.708C524.379 -232.121 293.417 -241.998 68.3215 -64.3708Z"/>
        <path id="yellow" d="M740.996 115.267C691.971 -44.2413 520.951 -17.2601 382.618 70.2333C218.061 174.313 153.822 28.4166 -30.4504 159.657C-214.723 290.897 -247.279 725.147 -166.21 846.094C-85.7835 985.697 39.6811 957.39 185.735 916.86C331.789 876.33 427.013 970.9 603.95 746.377C732.836 582.828 822.066 379.034 740.996 115.267Z"/>
      </svg>
      </div>
    <!-- <HeaderNav/> -->
    <DietForm id="form"/>
    <RecipeGallery id="recipes-gallery"/>
  </div>
</template>

<script>
    import RecipeGallery from './components/RecipeGallery.vue';
    // import HeaderNav from './components/HeaderNav.vue';
    import DietForm from './components/DietForm.vue';

//getRecipesData();

export default {
  name: 'App',
  props:[],
  components: {
    // HeaderNav,
    RecipeGallery,
    DietForm,
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

h2{
  font-size: 4em;
}

#welcome{
  /* background-color: #00ffff; */
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* #welcome>*{
  margin: auto;
} */

#welcome>img{
  height: 50vh;
  position: absolute;
  bottom: 8vh;
  left: 8vw;
}

#welcome>#text{
  font-size: 2em;
  max-width:50vw;
  position: absolute;
  top: 20vh;
  right: 8vw;
  /* background-color: #42B96A;
  padding: 5%;
  border-radius: 30px; */
}

svg{
  position: absolute;
  /* left: 0;
  right: 0; */
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

#green{
  transform: scale(1.3) translateX(25%) translateY(-5%);
  fill : #42B96A;
}

#yellow{
  transform: scale(1.3) translateY(20%);
  fill:#FCE49C;
}

.myButton {
	box-shadow: 0px 3px 6px 1px #3e7327;
	background-color:#FCE49C;

	border-radius:38px;
	display:inline-block;
	cursor:pointer;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:0px 1px 0px #42B96A;
  color: #2c3e50;
  transition-duration: 0.4s;

}
.myButton:hover {
  background-color:transparent;
  color: #FCE49C;
}
.myButton:active {
	position:relative;
	top:1px;
}

p legend label{
 font-size: 2em;
}

</style>
