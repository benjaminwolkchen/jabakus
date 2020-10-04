<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/plus" class="btn">Plus</router-link> <br /><br />
    <router-link to="/minus" class="btn">Minus</router-link> <br /><br />
    <router-link to="/times" class="btn">Mal</router-link> <br /><br />
    <router-link to="/dividing" class="btn">Geteilt</router-link> <br /><br />
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
  background: #2c3e50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
