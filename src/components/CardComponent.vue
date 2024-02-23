<template>
    <div class="card fade-in">
        <div class="card__top">
            <div class="user">
                <img class="user__profile-picture" src="https://placehold.co/40" alt="user-picture">
                <h3>Cesar Gonzalez</h3>
            </div>
        </div>

        <figure class="image-container">
            <img class="image fade-in" :src="image.src.original" :alt="image.alt">
        </figure>

        <div class="buttons">
            <IconHeart class="btn" :size="30" />
            <IconDownload class="btn" :size="30" />
        </div>
    </div>
</template>

<script>
import { IconHeart, IconDownload } from '@tabler/icons-vue'

export default {
    components: {
        IconHeart,
        IconDownload
    },
    props: {
        image: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    align-items: center;
    background: #fff;
    border-radius: 5px;
    box-shadow: 15px 15px 60px rgba(0, 0, 0, .15);
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 400px;
    padding: 20px;
    position: relative;
    width: 310px;

    &__top {
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 100%;

        .user {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-left: 2px;
            gap: 10px;

            &__profile-picture {
                border-radius: 50%;
            }
        }
    }
}

.buttons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .btn {
        cursor: pointer;
    }
}

.image-container {
    height: 320px;
    max-height: 300px;
    overflow: hidden;
    position: relative;
    width: 300px;
    cursor: pointer;


    .image {
        height: 350px;
        width: 100%;
    }
}
</style>