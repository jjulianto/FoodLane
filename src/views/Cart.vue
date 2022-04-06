<template>
    <div class="container flex mt-12" style="margin-bottom: 15rem;">
        <div class="cart-container p-2 m-2 rounded">
            <h2>Keranjang</h2>
            <div class="center" v-if="cartCount === 0">
                <img src="../assets/empty-foods.svg" style="width: 250px; margin-top: 20px;" />
                <h4 class="mt-3 mb-4">Sepertinya kamu belum memiliki menu di keranjang.</h4>
                <router-link :to="{ name: 'menu' }" class="empty-cart-button bg-primary rounded">
                    <span class="material-icons">keyboard_arrow_left</span> Menu
                </router-link>
            </div>
            <div v-else>
                <div class="flex cart-item mt-3" v-for="item in cart" :key="item.food.idMeal">
                    <img class="image-food rounded" :src="item.food.strMealThumb" alt />
                    <div class="ml-2">
                        <p>{{ item.food.strMeal }}</p>
                        <h4>Rp{{ moneyFormat(25000) }}</h4>
                    </div>
                    <div class="cart-content">
                        <button
                            class="cart-delete-button rounded mr-3"
                            @click.prevent="removeFromCart(item.food)"
                        >
                            <span class="material-icons">delete</span>
                        </button>
                        <button
                            class="cart-button bg-primary rounded"
                            @click.prevent="decreaseCartQuantity(item)"
                        >
                            <span class="material-icons">remove</span>
                        </button>
                        <input
                            type="number"
                            disabled
                            style="width:40px; text-align:center; background-color: #ffffff;"
                            :value="item.quantity"
                        />
                        <button
                            class="cart-button bg-primary rounded"
                            @click.prevent="increaseCartQuantity(item)"
                        >
                            <span class="material-icons">add</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="summary-container p-2 m-2 rounded">
            <h2>Ringkasan Belanja</h2>
            <div class="flex justify-between mt-2">
                <p>Total Harga ({{ cartCount }} barang)</p>
                <p>Rp{{ moneyFormat(cartSummary * 25000) }}</p>
            </div>
            <div class="flex summary-total justify-between mt-2 mb-2">
                <p>Total Harga</p>
                <p>Rp{{ moneyFormat(cartSummary * 25000) }}</p>
            </div>
            <router-link :to="'checkout'" class="bg-primary center summary-button rounded">Checkout</router-link>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Swal from 'sweetalert2'

export default {
    name: 'Cart',
    setup() {
        const store = useStore()

        const cart = computed(() => {
            return store.state.cart.cart
        })

        const cartCount = computed(() => {
            return store.getters['cart/cartCount']
        })

        const cartSummary = computed(() => {
            return store.getters['cart/cartSummary']
        })

        const removeFromCart = (item) => {
            store.dispatch('cart/removeFromCart', item)
            Swal.fire({
                title: "Success",
                text: "Menu dihapus dari keranjang.",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            });
        }

        const increaseCartQuantity = (item) => {
            store.dispatch('cart/increaseCartQuantity', {
                food: item.food,
                quantity: 1
            })
        }

        const decreaseCartQuantity = (item) => {
            if (item.quantity !== 1) {
                store.dispatch('cart/decreaseCartQuantity', {
                    food: item.food,
                    quantity: 1
                })
            }
        }

        return {
            cart,
            cartCount,
            cartSummary,
            removeFromCart,
            increaseCartQuantity,
            decreaseCartQuantity
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./../scss/_responsive.scss";
@import "./../scss/_variables.scss";

.container {
    &.flex {
        flex-wrap: wrap;
        align-items: flex-start;
    }
    .cart-container {
        margin: 10px 5px;
        width: 100%;
        background-color: $white-color;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        @include tablet {
            width: calc(60% - 10px);
        }
        .empty-cart-button {
            transition: 0.5s;
            padding: 10px 20px;
            color: $white-color;
            font-size: 1rem;
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
        .cart-item {
            border-bottom: solid 1px #2b2b2b;
            position: relative;
            min-height: 150px;
            .image-food {
                width: 75px;
                height: 75px;
                object-fit: cover;
            }
            .cart-content {
                margin-left: auto;
                margin-top: 10px;
                margin-bottom: 10px;
                @include tablet {
                    margin-top: 0;
                    margin-bottom: 0;
                }
                .cart-delete-button {
                    background-color: $red-color;
                    color: $white-color;
                    border: 0;
                    &:hover {
                        background: #cc1717;
                    }
                    &:focus {
                        background: #cc1717;
                        outline: 2px solid #cc1717;
                    }
                }
                .cart-button {
                    transition: 0.5s;
                    color: $white-color;
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
    }
    .summary-container {
        margin: 10px 5px;
        width: 100%;
        background-color: $white-color;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        @include tablet {
            width: calc(40% - 10px);
        }
        .summary-total {
            border-top: 1px solid #2b2b2b;
            padding-top: 10px;
        }
        .summary-button {
            transition: 0.5s;
            padding: 10px 20px;
            color: $white-color;
            font-size: 1rem;
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