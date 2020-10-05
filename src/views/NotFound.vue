<template>
  <img alt="Vue logo" src="../assets/logo.png" class="logo" />
  <div id="app">
    <h1>Oops! Wir konnten die Seite leider nicht finden!</h1>
    <br /><br />

    <img v-bind:src="selectedImage" /> <br /><br />

    <a href="/" class="btn">Zurück zur Startseite</a>
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
button,
a.btn {
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
export default {
  name: "App",
  el: "#app",
  data() {
    return {
      images: [
        "https://media.giphy.com/media/kF0ngyP7S1DfmzKqiN/giphy-downsized.gif",
        "https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy-downsized.gif",
        "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy-downsized.gif",
        "https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif"
      ],
      selectedImage: ""
    };
  },
  created() {
    const idx = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[idx];
  }
};
</script>
