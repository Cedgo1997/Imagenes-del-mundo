<template>
    <div class="card fade-in">
        <div class="card__top">
            <div class="user">
                <img class="user__profile-picture" src="https://placehold.co/40" alt="user-picture">
                <h3>Cesar Gonzalez</h3>
            </div>
        </div>

        <figure class="image-container" ref="image">
            <img class="image fade-in" :src="image.src.original" :alt="image.alt">
        </figure>

        <transition name="like">
            <IconHeartFilled v-show="liked" :size="60" class="like-icon" />
        </transition>

        <div class="buttons">
            <IconHeart class="btn" :size="30" @click="toggleLike" />
            <IconDownload class="btn" :size="30" />
        </div>
    </div>
</template>

<script>
import { IconHeart, IconHeartFilled, IconDownload } from '@tabler/icons-vue'

export default {
    components: {
        IconHeart,
        IconHeartFilled,
        IconDownload
    },
    props: {
        image: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            liked: false
        }
    },
    methods: {
        toggleLike() {
            this.liked = !this.liked;
            setTimeout(() => {
                this.liked = !this.liked;
            }, 800);
        }
    },
    mounted() {
        this.$refs.image.addEventListener("dblclick", this.toggleLike);
    },
    beforeUnmount() {
        this.$refs.image.removeEventListener("dblclick", this.toggleLike);
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
    transition: 0.3s;

    &:hover {
        transform: scale(1.1);
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }

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

.like-icon {
    position: absolute;
    color: whitesmoke;
    pointer-events: none;
    animation: 1s like ease-in-out;
    -webkit-animation: 1s like ease-in-out;
    -moz-animation: 1s like ease-in-out;
    -o-animation: 1s like ease-in-out;
    -ms-animation: 1s like ease-in-out;
}

@keyframes like {
    0% {
        opacity: 0;
        scale: 0;
    }

    15% {
        opacity: 1;
        scale: 1.2;
    }

    30% {
        scale: 0.95;
    }

    45%,
    80% {
        scale: 1;
    }

    100% {
        opacity: 1;
        scale: 0;
    }
}
</style>