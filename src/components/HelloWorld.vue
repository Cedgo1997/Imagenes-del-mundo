<template>
  <h1>World Images</h1>
  <!-- Searchbar -->
  <input type="text" v-model="seearchTerm" @keypress.enter="getImages(seearchTerm)">

  <!-- Sellers Component -->
  <div v-if="images.length">
    <figure class="image-container" v-for="(image, index) in images" :key="index">
      <img class="image" :src="image.imageUrl" :alt="image.title">
      <figcaption>{{ image.title }}</figcaption>
    </figure>
  </div>
</template>

<script>

import getImagesByText from '@/helpers/google/getGoogleImages';
import randomizer from '@/utils/randomizer';

export default {
  data() {
    return {
      seearchTerm: '',
      images: []
    }
  },
  methods: {
    async getImages(query) {
      if (query.trim()) {
        const images = await getImagesByText(query);
        this.images = [...randomizer().map(
          index => images[index]
        )]
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.image-container {
  height: 350px;
  max-height: 350px;
  overflow: hidden;
  position: relative;
  width: 350px;
  border: 10px solid #333;

  .image {
    height: 350px;
    object-fit: cover;
    width: 100%;
  }
}
</style>