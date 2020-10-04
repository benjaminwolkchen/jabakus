<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/plus">Plus</router-link> <br /><br />
    <router-link to="/minus">Minus</router-link> <br /><br />
    <router-link to="/times">Mal</router-link> <br /><br />
    <router-link to="/dividing">Geteilt</router-link> <br /><br />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
