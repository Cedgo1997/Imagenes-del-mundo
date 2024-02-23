<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/search">Search</router-link>
  </nav>
  <router-view />
  <FooterComponent />
</template>


<script>

import FooterComponent from './components/FooterComponent';
export default {
  name: 'App',
  components: {
    FooterComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  position: relative;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
