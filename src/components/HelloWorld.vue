<template>
  <h1>World Images</h1>
  <SearchbarComponent @queryText="getImages" />
  <div class="card-container" v-if="images.length">
    <CardComponent v-for="image in images" :image="image" :key="image.id" />
  </div>
</template>

<script>
import CardComponent from './CardComponent'
import SearchbarComponent from './SearchbarComponent'
import getImagesByText from '@/helpers/pexels/getPexelsImages';

export default {
  components: {
    CardComponent,
    SearchbarComponent
  },
  data() {
    return {
      images: []
    }
  },
  methods: {
    async getImages(query) {
      try {
        if (query) {
          const images = await getImagesByText(query, 4);
          this.images = images;
        }
      } catch (error) {
        console.error(error);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
</style>