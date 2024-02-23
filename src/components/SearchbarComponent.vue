<template>
    <div class="searchbar">
        <IconSearch class="btn btn-left" :size="30" />
        <input class="searchbar__field" type="text" v-model="searchTerm" @keypress.enter="sendText">
        <IconX class="btn btn-right" :size="30" />
    </div>
</template>

<script>
import { IconSearch, IconX } from '@tabler/icons-vue'

export default {
    components: {
        IconSearch,
        IconX
    },
    data() {
        return {
            searchTerm: '',
        }
    },
    methods: {
        sendText() {
            if (this.searchTerm.trim()) {
                this.$emit('queryText', this.searchTerm);
                console.log(this.searchTerm)
                this.searchTerm = '';
            }
        }
    }
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
</style>