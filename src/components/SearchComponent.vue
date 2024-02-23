<template>
  <SearchbarComponent @queryText="getSellersWithImages" />
  <div class="card-container" v-if="sellersInfo.length">
    <CardComponent v-for="seller in sellersInfo" :seller="seller" :key="seller.image.id" />
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
      sellersInfo: []
    }
  },
  methods: {
    async getSellersWithImages(query) {
      try {
        if (query) {
          const sellers = await getAllSellers();
          const images = await getImagesByText(query, 4);
          console.log(sellers)
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
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
</style>