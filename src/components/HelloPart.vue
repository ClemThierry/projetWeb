<template>
  <div>
    <div id="welcome">
      <img src="../assets/broccoli-vegetable.gif"/>
      <div id="text">
        <h1>Hello !</h1>
        <p>I’m Steev. I’m going to help you to meal prep ! But first in need some information about your life style.</p> 
        <p>Ready ? </p>
        <a v-bind:href="idToScrollAfter" class="myButton">Let's go</a>
      </div>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="green" d="M68.3215 -64.3708C-67.8008 43.0458 22.5817 198.582 159.312 299.719C321.963 420.029 204.743 537.071 401.114 666.276C597.485 795.481 1030.43 663.879 1117.16 539.907C1222.2 409.55 1147.65 298.643 1053.52 172.383C959.387 46.1224 1015.24 -81.6527 731.248 -168.708C524.379 -232.121 293.417 -241.998 68.3215 -64.3708Z"/>
        <path id="yellow" d="M740.996 115.267C691.971 -44.2413 520.951 -17.2601 382.618 70.2333C218.061 174.313 153.822 28.4166 -30.4504 159.657C-214.723 290.897 -247.279 725.147 -166.21 846.094C-85.7835 985.697 39.6811 957.39 185.735 916.86C331.789 876.33 427.013 970.9 603.95 746.377C732.836 582.828 822.066 379.034 740.996 115.267Z"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloPart',
  props:{
    idToScrollAfter : {type: String, required: true, default : "#"}
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rancho&display=swap');
#welcome{
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
}


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

}

svg{
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

#green{
  transform: scale(1.3) translateX(25%) translateY(-5%);
  transition-duration: 0.4s;
  fill : #42B96A;
}

#yellow{
  transform: scale(1.3) translateY(20%);
  transition-duration: 0.4s;
  fill:#FCE49C;
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

@media screen and (min-width: 768px) and (max-width: 1023px) {

}

@media screen and (max-width: 923px) {
  #welcome>img{
    height: 40vh;
    position: initial;
    margin: auto;
    margin-bottom: 10vh;
  }

  #welcome>#text{
    font-size: 1em;
    left: 10vw;
    right: 10vw;
    max-width: unset;
  }

  #green{
    transform: scale(0.8) translateX(25%) translateY(-5%);
  }

  #yellow{
    transform: scale(0.8) translateY(20%);
  }
}

</style>
