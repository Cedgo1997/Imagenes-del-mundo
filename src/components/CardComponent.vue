<template>
    <div class="card" v-if="seller">
        <div class="ribbon">Score: {{ score }}/20</div>
        <div class="card__top">
            <div class="user">
                <img class="user__profile-picture"
                     :src="`https://i.pravatar.cc/40?u=${seller.name.replace(' ', '').toLowerCase()}`" alt="user-picture">
                <h3>{{ seller.name }}</h3>
            </div>
        </div>

        <figure class="image-container" ref="image">
            <img class="image fade-in" :src="seller.image.src.original" :alt="seller.image.alt">
        </figure>

        <transition name="like">
            <IconHeartFilled v-show="showLike" :size="60" class="like-icon" />
        </transition>

        <div class="buttons">
            <IconHeart @click="likeCard" v-show="!liked" class="btn heart-icon" :size="30" />
            <IconHeartFilled @click="likeCard" v-show="liked" class="btn heart-filled-icon" :size="30" />
            <a class="download-button" :href="seller.image.src.original" target="_blank" download>
                <IconDownload class="btn download-icon" :size="30" />
            </a>
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
        seller: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            liked: false,
            showLike: false,
            score: 0
        }
    },
    methods: {
        toggleLike() {
            this.showLike = !this.showLike;
            if (!this.liked) {
                this.likeCard();
            }
            setTimeout(() => {
                this.showLike = !this.showLike;
            }, 800);
        },
        likeCard() {
            this.liked = !this.liked;
            this.score += this.liked ? 3 : -3;
            const currentScore = JSON.parse(localStorage.getItem('currentScore')) || {};
            currentScore[this.seller.id] = this.score;
            localStorage.setItem('currentScore', JSON.stringify(currentScore));
            if (this.score >= 20) {
                this.$emit('gameOver', {
                    sellerId: this.seller.id,
                    scoreData: currentScore
                });
                localStorage.removeItem('currentScore');
            }
        }
    },
    mounted() {
        this.$refs.image.addEventListener("dblclick", this.toggleLike);
        const currentScore = JSON.parse(localStorage.getItem('currentScore')) || {};
        this.score = currentScore[this.seller.id] || 0;
    },
    beforeUnmount() {
        this.$refs.image.removeEventListener("dblclick", this.toggleLike);
    },
    watch: {
        seller(newSeller) {
            if (newSeller) this.liked = false;
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
    transition: 0.3s;

    &:hover {
        transform: scale(1.1);
        transform: translateY(-1px);
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

    .ribbon {
        --f: 10px;
        --r: 15px;
        --t: 10px;
        position: absolute;
        inset: var(--t) calc(-1*var(--f)) auto auto;
        padding: 0 10px var(--f) calc(10px + var(--r));
        clip-path:
            polygon(0 0, 100% 0, 100% calc(100% - var(--f)), calc(100% - var(--f)) 100%,
                calc(100% - var(--f)) calc(100% - var(--f)), 0 calc(100% - var(--f)),
                var(--r) calc(50% - var(--f)/2));
        background-color: #7EB2EDff;
        box-shadow: 0 calc(-1*var(--f)) 0 inset #0005;
        color: whitesmoke;
    }
}

.buttons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .btn {
        cursor: pointer;
    }

    .heart-icon {
        scale: 1;
        transition: scale 100ms ease-in;

        &:hover {
            scale: 1.1;
        }
    }

    .heart-filled-icon {
        color: red;
    }

    .download-button {
        text-decoration: none;
        color: inherit;

        .download-icon {
            transition: color 100ms ease-in;

            &:hover {
                color: #7EB2EDff;
            }
        }
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
        user-select: none;
        -webkit-user-drag: none;
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