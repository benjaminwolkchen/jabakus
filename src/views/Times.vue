<template>
  <img alt="Vue logo" src="../assets/logo.png" class="logo" />
  <div id="app">
    <h1>{{ title }}</h1>
    <input type="text" name="" id="input" v-model="UserInput" /><br /><br />
    <button v-on:click="game">{{ ButtonText }}</button>
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
.logo {
  height: 30px;
  width: 30px;
}
</style>
<script>
var i,
  ii,
  ComputerTask,
  TaskOutput,
  beright = false;

function generateTask() {
  i = Math.floor(Math.random() * 11);
  ii = Math.floor(Math.random() * 11);
  ComputerTask = i + ii;
  TaskOutput = i + " × " + ii;
}

export default {
  name: "App",
  el: "#app",
  data() {
    return {
      title: "Multiplizieren",
      ButtonText: "Starte das Spiel!",
      UserInput: null
    };
  },
  methods: {
    game() {
      if (this.UserInput == ComputerTask && beright == false) {
        this.title = "Herzlichen Glückwunsch - du hast die Aufgabe gelöst!";
        beright = true;
      } else if (
        this.UserInput &&
        this.UserInput !== ComputerTask &&
        beright == false
      ) {
        this.title =
          "Du hast die Aufgabe leider nicht richtig gelöst. Die richtige Lösung wäre: " +
          ComputerTask +
          ".";
        beright = true;
      } else {
        // Change Button Text
        this.ButtonText = "Nächste Aufgabe";
        this.title = "";

        generateTask();
        this.title = "Was ergibt " + TaskOutput + "?";

        beright = false;
      } // End else
    } // END start method
  }
};
</script>
