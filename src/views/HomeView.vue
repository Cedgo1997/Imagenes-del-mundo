<template>
  <div class="home">
    <div class="home__image-container">
      <img src="./../assets/search-cat.png" alt="">
    </div>
    <div class="hero">
      <h1 class="hero__title">¡Encuentra la imagen perfecta!</h1>
      <p class="hero__description">Explora nuestra colección de imágenes únicas y elige la que mejor se adapte a tus
        necesidades.</p>
      <router-link to="/search" class="hero__cta">Comenzar ahora</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  background-color: #f0f0f0;
  padding: 100px 0;
  justify-content: space-evenly;
  align-items: center;
}

.hero {
  max-width: 500px;
  text-align: center;
}

.hero__title {
  font-size: 42px;
  color: #333;
}

.hero__description {
  font-size: 21px;
  color: #666;
  margin-bottom: 30px;
}

.hero__cta {
  display: inline-block;
  background-color: #7EB2EDff;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.hero__cta:hover {
  background-color: #0056b3;
}
</style>