<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <input type="text" name="" id="input" v-model="UserInput" /><br /><br />
    <button v-on:click="game">Senden!</button>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
button {
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
<script>
export default {
  name: "App",
  el: "#app",
  data() {
    return {
      title: "Plus",
      UserInput: null
    };
  },
  methods: {
    game() {
      if (this.UserInput == null) {
        var i = Math.floor(Math.random() * 11),
          ii = Math.floor(Math.random() * 11);
        this.title = "Was ist " + i + " + " + ii;
      }
    }
  }
};
</script>
