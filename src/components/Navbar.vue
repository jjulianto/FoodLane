<template>
    <header>
        <nav :class="{ 'bg-primary': $route.path !== '/' }" id="drawer">
            <p class="brand-title p-3">FoodLane</p>
            <ul class="menu-desktop">
                <li class="nav-item mr-5">
                    <router-link :to="{ name: 'home' }">Home</router-link>
                </li>
                <li class="nav-item mr-5">
                    <router-link :to="'menu'">Menu</router-link>
                </li>
                <li class="nav-item mr-5">
                    <router-link :to="'gallery'">Gallery</router-link>
                </li>
                <li class="nav-item mr-5" id="dropdown">
                    <router-link :to="'cart'">Cart</router-link>
                </li>
            </ul>

            <a @click="toggle" id="hamburger" class="mr-1" aria-label="Hamburger">☰</a>
        </nav>
        <ul ref="mobileMenu" class="menu-mobile p-3">
            <li class="nav-item">
                <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="'menu'">Menu</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="'gallery'">Gallery</router-link>
            </li>
            <li class="nav-item" id="dropdown">
                <router-link :to="'cart'">Cart</router-link>
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
            toggle
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
    position: fixed;
    background-color: $primary-color;
    color: $white-color;
    justify-content: space-between;
    align-items: center;
    transition: background-color 1s ease;
    z-index: 10;
    @include tablet {
        background-color: transparent;
        .brand-title {
            color: $primary-color;
        }
    }
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
    height: max-content;
    background-color: $primary-color;
    transform: translate(0, -200px);
    transition: all 0.3s ease-in-out;
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