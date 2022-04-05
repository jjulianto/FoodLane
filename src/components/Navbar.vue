<template>
    <header>
        <nav class="bg-primary" id="drawer">
            <p class="brand-title pl-2">FoodLane</p>
            <ul class="menu-desktop">
                <li class="nav-item mr-5">
                    <router-link :to="{ name: 'home' }">
                        <span class="material-icons" aria-hidden="true">home</span> Home
                    </router-link>
                </li>
                <li class="nav-item mr-5">
                    <router-link :to="{ name: 'menu' }">
                        <span class="material-icons" aria-hidden="true">restaurant_menu</span> Menu
                    </router-link>
                </li>
                <li class="nav-item mr-5">
                    <router-link :to="{ name: 'gallery' }">
                        <span class="material-icons" aria-hidden="true">collections</span> Gallery
                    </router-link>
                </li>
                <li class="nav-item mr-5">
                    <router-link :to="'cart'">
                        <span class="material-icons" aria-hidden="true">shopping_cart</span> Cart
                    </router-link>
                </li>
            </ul>

            <a @click="toggle" id="hamburger" class="mr-1" aria-label="Hamburger">☰</a>
        </nav>
        <ul ref="mobileMenu" class="menu-mobile p-3">
            <li class="nav-item">
                <router-link :to="{ name: 'home' }">
                    <span class="material-icons" aria-hidden="true">home</span> Home
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'menu' }">
                    <span class="material-icons" aria-hidden="true">restaurant_menu</span> Menu
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'gallery' }">
                    <span class="material-icons" aria-hidden="true">collections</span> Gallery
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="'cart'">
                    <span class="material-icons" aria-hidden="true">shopping_cart</span> Cart
                </router-link>
            </li>
        </ul>
    </header>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "Navbar",
    setup() {

        const mobileMenu = ref(null);

        const toggle = () => {
            mobileMenu.value.classList.toggle("show-mobile-menu");
        }

        return {
            mobileMenu,
            toggle,
        }
    },
}
</script>

<style lang="scss" scoped>
@import "./../scss/_responsive.scss";
@import "./../scss/_variables.scss";

nav {
    display: flex;
    width: 100%;
    top: 0;
    color: $white-color;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    padding: 14px;
    z-index: 10;
    .brand-title {
        font-weight: bold;
        font-size: 21px;
    }
    ul {
        &.menu-desktop {
            display: none;
        }
        margin-left: auto;
        list-style: none;
        flex-direction: column;
        @include tablet {
            &.menu-desktop {
                display: flex;
                flex-direction: row;
            }
        }
        li {
            a {
                color: $white-color;
                position: relative;
                &::before {
                    content: "";
                    position: absolute;
                    z-index: -1;
                    left: 50%;
                    right: 50%;
                    bottom: 0;
                    background: $white-color;
                    height: 2px;
                    -webkit-transition-property: left, right;
                    transition-property: left, right;
                    -webkit-transition-duration: 0.3s;
                    transition-duration: 0.3s;
                    -webkit-transition-timing-function: ease-out;
                    transition-timing-function: ease-out;
                }
                &:hover::before,
                &:focus::before {
                    left: 0;
                    right: 0;
                }
            }
        }
    }
    #hamburger {
        font-size: 30px;
        @include tablet {
            display: none;
        }
    }
}
.menu-mobile {
    position: fixed;
    top: 0;
    list-style: none;
    width: 100%;
    background-color: $primary-color;
    transform: translate(0, -200px);
    z-index: 2;
    @include tablet {
        display: none;
    }
    li {
        a {
            position: relative;
            color: $white-color;
            display: inline-block;
        }
    }
}
.show-mobile-menu {
    transform: translate(0, 50px);
}
</style>