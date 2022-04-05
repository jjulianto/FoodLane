<template>
    <div class="menu">
        <div class="container">
            <h1 class="center">Menu Makanan</h1>
            <p class="center">Semua kategori menu makanan yang ada pada etalase kami.</p>
            <div class="flex justify-center select-menu mt-3 p-1">
                <select @change="onChange($event)" class="p-1 rounded">
                    <option value="beef">Beef</option>
                    <option value="chicken">Chicken</option>
                    <option value="dessert">Dessert</option>
                    <option value="lamb">Lamb</option>
                    <option value="miscellaneous">Miscellaneous</option>
                    <option value="pasta">Pasta</option>
                </select>
                <input
                    type="text"
                    class="p-1 rounded"
                    placeholder="Mau makan apa hari ini ?"
                    v-model="searchFood"
                />
            </div>
            <div class="menu-wrapper">
                <transition-group
                    name="fade"
                    class="menu-list grid"
                    tag="div"
                    v-if="filteredFood.length >= 1"
                >
                    <div
                        class="menu-item rounded"
                        v-for="food in filteredFood"
                        :key="food.idMeal"
                        style="animation-duration: 0.3s"
                    >
                        <img class="menu-thumbnail" :src="food.strMealThumb" alt />
                        <div class="menu-content p-3">
                            <h2 class="menu-title">{{ food.strMeal }}</h2>
                            <button class="menu-button item-center rounded bg-primary mt-2">
                                <span class="material-icons" aria-hidden="true">shopping_cart</span> Tambah ke Keranjang
                            </button>
                        </div>
                    </div>
                </transition-group>
                <div class="center mt-5" v-else>
                    <img src="../assets/empty-foods.svg" style="width: 300px" />
                    <h2 class="mt-3">Makanan tidak ditemukan.</h2>
                </div>
            </div>
            <!-- 
            <div>
                <transition-group name="fade" class="food-list flex" tag="div">
                    <div
                        class="food-item p-1"
                        v-for="item in filteredData"
                        :key="item.idMeal"
                        style="animation-duration: 0.3s"
                    >
                        <food-item :food="item" />
                    </div>
                </transition-group>
            </div>-->
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default
    {
        setup() {
            const store = useStore()

            const searchFood = ref('')

            onMounted(() => {
                store.dispatch('menu/getFoods', 'beef')
            })

            const foods = computed(() => {
                return store.state.menu.foods
            })

            const filteredFood = computed(() => {
                return foods.value.filter(food => food.strMeal.toLowerCase().includes(searchFood.value.toLowerCase()))
            })

            const onChange = (event) => {
                if (event.target.value === "beef") {
                    store.dispatch('menu/getFoods', 'beef')
                } else if (event.target.value === "chicken") {
                    store.dispatch('menu/getFoods', 'chicken')
                } else if (event.target.value === "dessert") {
                    store.dispatch('menu/getFoods', 'dessert')
                } else if (event.target.value === "lamb") {
                    store.dispatch('menu/getFoods', 'lamb')
                } else if (event.target.value === "miscellaneous") {
                    store.dispatch('menu/getFoods', 'miscellaneous')
                } else if (event.target.value === "pasta") {
                    store.dispatch('menu/getFoods', 'pasta')
                }
            }

            return {
                searchFood,
                foods,
                filteredFood,
                onChange
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "./../scss/_responsive.scss";
@import "./../scss/_variables.scss";
.select-menu {
    flex-direction: column;
    @include tablet {
        flex-direction: row;
    }
    select {
        &:focus {
            outline: 2px solid $primary-color;
        }
    }
    input {
        min-width: 300px;
        margin-top: 1rem;
        @include tablet {
            margin-left: 10px;
            margin-top: 0;
        }
        &:focus {
            outline: 2px solid $primary-color;
        }
    }
}
.menu-item {
    text-align: center;
    background-color: $white-color;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    .menu-thumbnail {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    .menu-content {
        .menu-title {
            font-size: 20px;
            margin-top: 5px;
            height: 90px;
        }
        .menu-button {
            transition: 0.5s;
            padding: 10px 20px;
            color: $white-color;
            font-size: 1em;
            width: 100%;
            display: inline-block;
            font-weight: bold;
            border: 0;
            &:hover {
                background: #ff6701;
            }
            &:focus {
                background: #ff6701;
                outline: 2px solid #ff6701;
            }
        }
    }
}
</style>