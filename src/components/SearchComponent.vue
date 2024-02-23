<template>
  <SearchbarComponent @queryText="getSellersWithImages" />
  <p class="result-query" v-if="searchText">Estos son los resultados para la búsqueda de: <strong>{{ searchText
  }}</strong></p>
  <div class="card-container" v-if="sellersInfo.length">
    <CardComponent v-for="seller in sellersInfo" :seller="seller" :key="seller.id" @gameOver="handleSellerWin" />
  </div>
  <div class="image-placeholder-container" v-else>
    <img src="./../assets/search-zoom.png" alt="Zoom image">
    <strong>¡Comienza tu búsqueda y elige las mejores imágenes!</strong>

    <dialog class="final-modal" v-if="dialogOpen">
      <div class="modal-content">
        <h2 class="modal-title">¡Felicidades!</h2>
        <p class="modal-text">Se ha terminado el juego. ¿Deseas empezar de nuevo?</p>
        <button class="accept-button" @click="startAgain">Aceptar</button>
      </div>
    </dialog>
  </div>
</template>

<script>
import CardComponent from './CardComponent'
import SearchbarComponent from './SearchbarComponent'
import getImagesByText from '@/helpers/pexels/getPexelsImages';
import getAllSellers from '@/helpers/alegra/getAllSellers';
import createInvoice from '@/helpers/alegra/createInvoice';

export default {
  components: {
    CardComponent,
    SearchbarComponent,
  },
  data() {
    return {
      sellersInfo: [],
      searchText: '',
      dialogOpen: false
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
    async handleSellerWin(event) {
      try {
        const payload = {
          status: 'open',
          numberTemplate: {
            id: 0
          },
          items: [],
          seller: {
            id: event.sellerId,
          },
          date: new Date(),
          dueDate: new Date(),
          client: {
            id: 7
          }
        }
        await createInvoice({ ...payload });
        this.dialogOpen = true;
      } catch (error) {
        console.error(error)
      }
    },
    startAgain() {
      this.dialogOpen = false;
      this.$router.push('/');
    }
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
</style>