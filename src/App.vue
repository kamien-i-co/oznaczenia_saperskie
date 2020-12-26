<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Mapa</router-link> |
      <router-link to="/about">O projekcie</router-link> |
      <a href="https://www.facebook.com/kamienicowarszawa" target="_blank">Kamień i Co?</a>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
/* https://coolors.co/2b303a-92dce5-eee5e9-7c7c7c-d64933 */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7C7C7C;
}

body {
  background: #2B303A; // linear-gradient(90deg, #FFF 60%, #ad1d37 40%);
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #7C7C7C;

    &.router-link-exact-active {
      color: #FFF;
    }
  }
}
</style>
