<template>
    <div class="container flex mt-12" style="margin-bottom: 15rem;">
        <div class="checkout-container p-2 m-2 rounded">
            <h2>Checkout</h2>
            <div class="flex">
                <div class="form-group name">
                    <label for="name">Nama</label>
                    <input
                        class="rounded mt-1"
                        type="text"
                        required
                        name="name"
                        id="name"
                        v-model="state.name"
                    />
                    <div
                        v-if="validation.name"
                        class="text-danger"
                        style="margin-top: 5px;"
                    >Masukkan Nama Lengkap</div>
                </div>
                <div class="form-group phone">
                    <label for="phone">No. Telepon</label>
                    <input
                        class="rounded mt-1"
                        type="number"
                        required
                        name="phone"
                        id="phone"
                        v-model="state.phone"
                    />
                    <div
                        v-if="validation.phone"
                        class="text-danger"
                        style="margin-top: 5px;"
                    >Masukkan No. Telepon</div>
                </div>
                <div class="form-group city">
                    <label for="city">Kota</label>
                    <select
                        class="rounded mt-1"
                        name="city"
                        required
                        id="city"
                        v-model="state.city"
                        @change="onChange($event)"
                    >
                        <option value="cimahi">Cimahi</option>
                        <option value="bandung">Bandung</option>
                        <option value="jakarta">Jakarta</option>
                        <option value="bekasi">Bekasi</option>
                    </select>
                    <div
                        v-if="validation.city"
                        class="text-danger"
                        style="margin-top: 5px;"
                    >Masukkan Kota</div>
                </div>
                <div class="form-group zipcode">
                    <label for="zipcode">Kode POS</label>
                    <input
                        class="rounded mt-1"
                        type="number"
                        required
                        name="zipcode"
                        id="zip"
                        v-model="state.zipcode"
                    />
                    <div
                        v-if="validation.zipcode"
                        class="text-danger"
                        style="margin-top: 5px;"
                    >Masukkan Kode POS</div>
                </div>
            </div>
            <div class="form-group mt-1">
                <label for="address">Alamat</label>
                <textarea
                    class="rounded mt-1"
                    name="address"
                    required
                    id="address"
                    rows="4"
                    v-model="state.address"
                ></textarea>
                <div v-if="validation.address" class="text-danger">Masukkan Alamat</div>
            </div>
        </div>
        <div class="summary-container p-2 m-2 rounded">
            <h2>Ringkasan Belanja</h2>
            <div class="flex justify-between mt-2">
                <p>Total Harga ({{ cartCount }} barang)</p>
                <p>Rp{{ moneyFormat(cartSummary * 25000) }}</p>
            </div>
            <div class="flex justify-between mt-2">
                <p>Ongkos Kirim ({{ cartCount }} barang)</p>
                <p>Rp{{ moneyFormat(price) }}</p>
            </div>
            <div class="flex summary-total justify-between mt-2 mb-2">
                <p>Total Harga</p>
                <p>Rp{{ moneyFormat((cartSummary * 25000) + price) }}</p>
            </div>
            <button
                @click="checkout"
                class="bg-primary center summary-button rounded"
            >Bayar Sekarang</button>
        </div>
    </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
    name: 'Checkout',
    setup() {
        const store = useStore()

        const router = useRouter()

        const cartCount = computed(() => {
            return store.getters['cart/cartCount']
        })

        const cartSummary = computed(() => {
            return store.getters['cart/cartSummary']
        })

        const state = reactive({
            name: '',
            phone: '',
            city: '',
            zipcode: '',
            address: '',
        })

        const price = ref(0)

        const validation = reactive({
            name: false,
            phone: false,
            city: false,
            zipcode: false,
            address: false
        })

        const onChange = (event) => {
            if (event.target.value === "cimahi") {
                price.value = 10000;
            } else if (event.target.value === "bandung") {
                price.value = 15000;
            } else if (event.target.value === "jakarta") {
                price.value = 30000;
            } else if (event.target.value === "bekasi") {
                price.value = 25000;
            }
            return price;
        }

        const checkout = () => {
            if (state.name && state.phone && state.address && state.city && state.zipcode) {
                store.dispatch('cart/clearCart')
                router.push({
                    name: 'home',
                })
                Swal.fire({
                    title: "Success",
                    text: "Pesanan akan diproses.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000
                });
            }

            if (!state.name) {
                validation.name = true
            }

            if (!state.phone) {
                validation.phone = true
            }

            if (!state.city) {
                validation.city = true
            }

            if (!state.zipcode) {
                validation.zipcode = true
            }

            if (!state.address) {
                validation.address = true
            }
        }

        return {
            cartCount,
            cartSummary,
            state,
            price,
            validation,
            onChange,
            checkout
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
    .checkout-container {
        margin: 10px 5px;
        width: 100%;
        background-color: $white-color;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        @include tablet {
            width: calc(60% - 10px);
        }
        .flex {
            & > * {
                margin: 10px 5px;
            }
        }
        .form-group {
            .text-danger {
                color: #e61919;
                font-size: 0.8rem;
            }
            &.name {
                width: 100%;
                @include tablet {
                    width: calc(50% - 10px);
                }
            }
            &.phone {
                width: 100%;
                @include tablet {
                    width: calc(50% - 10px);
                }
            }
            &.city {
                width: 100%;
                @include tablet {
                    width: calc(50% - 10px);
                }
                select {
                    width: 100%;
                }
            }
            &.zipcode {
                width: 100%;
                @include tablet {
                    width: calc(50% - 10px);
                }
            }
            textarea {
                width: 100%;
            }
        }
        input,
        textarea,
        select {
            padding: 0.5rem;
            width: 100%;
            border: 1px solid rgba(49, 53, 59, 0.96);
            &:focus {
                outline: 2px solid $primary-color;
                border: 0;
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