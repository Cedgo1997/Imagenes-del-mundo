<template>
  <SearchbarComponent @queryText="getSellersWithImages" />
  <p class="result-query" v-if="searchText">Estos son los resultados para la búsqueda de: <strong>{{ searchText
  }}</strong></p>
  <div class="card-container" v-if="sellersInfo.length">
    <CardComponent v-for="seller in sellersInfo" :seller="seller" :key="seller.image.id" />
  </div>
  <div class="image-placeholder-container" v-else>
    <img src="./../assets/search-zoom.png" alt="Zoom image">
    <strong>¡Comienza tu búsqueda y elige las mejores imágenes!</strong>
  </div>
</template>

<script>
import CardComponent from './CardComponent'
import SearchbarComponent from './SearchbarComponent'
import getImagesByText from '@/helpers/pexels/getPexelsImages';
import getAllSellers from '@/helpers/alegra/getAllSellers';

export default {
  components: {
    CardComponent,
    SearchbarComponent,
  },
  data() {
    return {
      sellersInfo: [],
      searchText: ''
    }
  },
  methods: {
    async getSellersWithImages(query) {
      try {
        if (query) {
          this.searchText = query;
          const sellers = await getAllSellers();
          const images = await getImagesByText(query, 4);
          this.sellersInfo = sellers.map(
            (seller, index) => ({
              ...seller,
              image: images[index]
            })
          )
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.result-query {
  font-size: 24px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 10px;
}

.image-placeholder-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-size: 32px;
}
</style>