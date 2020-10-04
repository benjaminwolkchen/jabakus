<template>
  <h1>Plus</h1>
  <div id="app">
    <input type="text" name="" id="input"><br><br>
    <button type="submit" id="submit">Senden!</button>
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
button{
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
        name: "ListItemsSfc",
        props: ['items'],
        data() {
            return {
                UserSolulution: null
            }
        },
        methods: {
            game() {
                alert(0)
            }
        }
    }
</script>