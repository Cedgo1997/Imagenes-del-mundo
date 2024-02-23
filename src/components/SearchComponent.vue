<template>
  <SearchbarComponent @queryText="getSellersWithImages" />
  <p class="result-query" v-if="searchText">Estos son los resultados para la búsqueda de: <strong>{{ searchText
  }}</strong></p>

  <div class="card-container" v-if="sellersInfo.length">
    <TransitionGroup name="fade" v-if="!loading">
      <CardComponent v-for="seller in sellersInfo" :seller="seller" :key="seller.id" @gameOver="handleSellerWin" />
    </TransitionGroup>
  </div>

  <div class="image-placeholder-container" v-else-if="!loading">
    <img src="./../assets/search-zoom.png" alt="Zoom image">
    <strong>¡Comienza tu búsqueda y elige las mejores imágenes!</strong>
  </div>

  <div class="loader-container" v-if="loading" :open="dialogOpen">
    <IconLoader2 class="loader-icon" :size="80"></IconLoader2>
  </div>

  <dialog class="final-modal" v-if="dialogOpen">
    <div class="modal-content">
      <h2 class="modal-title">¡Felicidades!</h2>
      <p class="modal-text">Se ha escogido un ganador</p>
      <button class="accept-button" @click="startAgain">Aceptar</button>
    </div>
  </dialog>
</template>

<script>
import CardComponent from './CardComponent'
import SearchbarComponent from './SearchbarComponent'
import getImagesByText from '@/helpers/pexels/getPexelsImages';
import getAllSellers from '@/helpers/alegra/getAllSellers';
import createInvoice from '@/helpers/alegra/createInvoice';
import { TransitionGroup } from 'vue';
import { IconLoader2 } from '@tabler/icons-vue';

export default {
  components: {
    CardComponent,
    SearchbarComponent,
    TransitionGroup,
    IconLoader2
  },
  data() {
    return {
      sellersInfo: [],
      searchText: '',
      dialogOpen: false,
      loading: false
    }
  },
  methods: {
    async getSellersWithImages(query) {
      this.loading = true;
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
          );
          this.loading = false;

        }
      } catch (error) {
        this.loading = false;
        console.error(error);
      }
    },
    async handleSellerWin(event) {
      this.dialogOpen = true;

      try {
        const payload = {
          status: 'open',
          numberTemplate: {
            number: 0
          },
          items: [
            {
              id: 1,
              name: "Image 1",
              description: "This is an image",
              quantity: 1,
              price: 120
            }
          ],
          seller: {
            id: 1,
            name: "Seller name"
          },
          date: Date().toISOString().split('T')[0],
          dueDate: new Date().toISOString().split('T')[0],
          client: {
            id: 1
          }
        }
        await createInvoice({ ...payload });
      } catch (error) {
        console.error(error)
      }
    },
    startAgain() {
      this.dialogOpen = false;
      this.$router.push('/');
    }
  }
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

.final-modal {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  /* Sombra ligera */
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.modal-text {
  font-size: 1rem;
  margin-bottom: 20px;
}

.accept-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.accept-button:hover {
  background-color: #0056b3;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader-icon {
  animation: spin 1s infinite linear;
  color: #7EB2ED;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>