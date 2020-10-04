<template>
  <router-view />
  <br />
  <br />
  <a href="https://www.netlify.com">
    <img
      src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
      alt="Deploys by Netlify"
    />
  </a>
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
</style>
