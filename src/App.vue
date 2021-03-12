<template>
  <router-view />
  <br />
  <br />
  <div id="footer">
    <br />
    <br />
    <a href="https://awesomebible.de" rel="me"
      >&copy; {{ year }} Benjamin Hartmann</a
    >
  </div>
</template>

<style lang="scss">
/* inter-regular - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/inter-v3-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/inter-v3-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/inter-v3-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/inter-v3-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/inter-v3-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/inter-v3-latin-regular.svg#Inter') format('svg'); /* Legacy iOS */
}
body,
html {
  padding-top: 20px;
}
#app {
  font-family: Inter, sans-serif;
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
#footer {
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
</script>
