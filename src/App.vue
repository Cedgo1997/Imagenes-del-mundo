<template>
  <NavbarComponent />
  <router-view />
  <FooterComponent />
</template>


<script>

import FooterComponent from './components/FooterComponent';
import NavbarComponent from './components/NavbarComponent';
export default {
  name: 'App',
  components: {
    FooterComponent,
    NavbarComponent
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
  }

  .router-link-exact-active {
    color: #0462CDff
  }
}
</style>
