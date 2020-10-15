<template>
  <router-view />
  <br />
  <br />
  <div id="footer">
  <a href="https://www.netlify.com">
    <img src="./assets/netlify-color-bg.svg" alt="Deploys by Netlify" />
  </a>
  <br />
  <br />
  <a href="https://awesomebible.de" rel="me"
    >&copy; {{ year }} Benjamin Hartmann</a
  >
  </div>

<audio id="audioplayer-win">
  <source src="./assets/win_sound_1.wav" type="audio/wav">
  Your browser does not support the audio element.
</audio>

</template>

<style lang="scss">
body,
html {
  padding-top: 20px;
}
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
      color: white;
    }
  }
}
#footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
<script>
export default {
  name: "App",
  el: "#app",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};

var x = document.getElementById("audioplayer-win"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 
</script>
