<template>
  <h1>World Images</h1>
  <!-- Searchbar -->
  <div class="searchbar">
    <IconSearch class="btn btn-left" :size="30" />
    <input class="searchbar__field" type="text" v-model="seearchTerm" @keypress.enter="getImages(seearchTerm)">
    <IconX class="btn btn-right" :size="30" />
  </div>

  <!-- Sellers Component -->
  <div class="card-container" v-if="images.length">
    <CardComponent v-for="image in images" :image="image" :key="image.id" />
  </div>
</template>

<script>
import CardComponent from './CardComponent'
import getImagesByText from '@/helpers/pexels/getPexelsImages';
import { IconSearch, IconX } from '@tabler/icons-vue'

export default {
  components: {
    CardComponent,
    IconSearch,
    IconX
  },
  data() {
    return {
      seearchTerm: '',
      images: []
    }
  },
  methods: {
    async getImages(query) {
      try {
        if (query.trim()) {
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
.searchbar {
  width: 60vw;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 20px auto;

  &__field {
    border: 1px solid black;
    width: inherit;
    height: inherit;
    border-radius: 10px;
    padding: 0 40px;
    caret-color: #9babfe;

    &:focus {
      outline: 2px solid #9babfe;
      border: none;
    }
  }


  .btn {
    position: absolute;
  }

  .btn-left {
    left: 5px;
  }

  .btn-right {
    right: 5px;
    cursor: pointer;

    &:hover {
      color: #9babfe;
    }
  }
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
</style>