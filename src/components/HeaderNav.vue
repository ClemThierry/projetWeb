<template>
  <nav>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">Page 1</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">Page 2</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">Page 3</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNav',
  props: {
    //msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  background-color: #42b983;
  padding: 20px;
}
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  /* padding: 0; */
}

li {
  /* display: inline-block; */
  margin: auto; 
}
a {
  color: #ffffff;
}
</style>
