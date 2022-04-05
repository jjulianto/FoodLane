<template>
    <div class="home">
        <Hero />
        <div class="container" id="content">
            <h1 class="center content-title">Kenapa kamu harus memilih kami</h1>
            <div class="flex main-inner">
                <div class="main-icon">
                    <span class="material-icons">lunch_dining</span>
                    <p>Menu makanan yang berkualitas tinggi dan higienis</p>
                </div>
                <div class="main-icon">
                    <span class="material-icons">paid</span>
                    <p>Harga yang terjangkau untuk semua kalangan</p>
                </div>
                <div class="main-icon">
                    <span class="material-icons">delivery_dining</span>
                    <p>Menu makanan akan dikirimkan ke rumah kamu</p>
                </div>
            </div>
            <h1 class="mt-4 center content-title">Categories</h1>
            <div class="category-wrapper">
                <div class="category-list grid">
                    <div
                        class="category-item rounded"
                        v-for="category in categories.slice(0, 6)"
                        :key="category.idCategory"
                    >
                        <img
                            class="category-thumbnail"
                            v-lazy="{ src: category.strCategoryThumb }"
                            alt
                        />
                        <div class="category-content p-3">
                            <h2 class="category-title">{{ category.strCategory }}</h2>
                            <p
                                class="category-description"
                            >{{ category.strCategoryDescription.substr(0, 100) }}...</p>
                        </div>
                    </div>
                </div>
                <router-link :to="{ name: 'menu' }">
                    <button class="item-center rounded bg-primary mt-2">
                        <span class="material-icons mr-1">visibility</span> See All Menu
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Hero from "../components/Hero.vue"
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default
    {
        components: { Hero },
        setup() {
            const store = useStore()

            onMounted(() => {
                store.dispatch('home/getCategories')
            })

            const categories = computed(() => {
                return store.state.home.categories
            })

            return {
                categories
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "./../scss/_responsive.scss";
@import "./../scss/_variables.scss";

.center {
    margin: 3rem 0 0;
    &.content-title {
        font-size: 1.6rem;
        @include tablet {
            font-size: 2rem;
        }
    }
}
.main-inner {
    text-align: center;
    @include tablet {
        flex-wrap: nowrap;
    }
    .main-icon {
        width: 100%;
        padding: 2rem;
        .material-icons {
            font-size: 6rem;
            color: $primary-color;
            padding-bottom: 20px;
        }
    }
}
.category-item {
    text-align: center;
    background-color: $white-color;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
    .category-thumbnail {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    .category-content {
        .category-title {
            font-size: 20px;
            margin-top: 5px;
        }
        .category-description {
            margin-top: 10px;
            font-size: 16px;
            line-height: 1.5rem;
        }
    }
}

button {
    transition: 0.5s;
    padding: 10px 20px;
    color: $white-color;
    font-size: 1em;
    border: 0;
    font-weight: bold;
    &:hover {
        background: #ff6701;
    }
    &:focus {
        background: #ff6701;
        outline: 2px solid #ff6701;
    }
}
</style>