<template>
    <div class="hero">
        <div class="hero-inner">
            <p class="hero-text">Welcome to</p>
            <h1 class="hero-title">FoodLane</h1>
            <p class="hero-tagline">Let's find food that can cure your hunger now!</p>
            <a class="hero-button">Explore</a>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "./../scss/_responsive.scss";
@import "./../scss/_variables.scss";

.hero {
    background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.651),
            rgba(3, 3, 3, 0.856)
        ),
        url("../assets/hero.jpg");
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    align-items: center;
    .hero-inner {
        color: $white-color;
        margin: 0 auto;
        text-align: center;
        .hero-text {
            font-size: 1.3rem;
            margin-bottom: 5px;
            @include tablet {
                font-size: 1.6rem;
            }
        }
        .hero-title {
            color: $primary-color;
            font-weight: bolder;
            font-size: 3rem;
            margin-bottom: 10px;
            @include tablet {
                font-size: 3.4rem;
            }
        }
        .hero-tagline {
            font-size: 1.2rem;
            margin-bottom: 15px;
            @include tablet {
                font-size: 1.4rem;
            }
        }
        .hero-button {
            cursor: pointer;
            min-width: 44px;
            min-height: 44px;
            transition: 0.5s;
            padding: 10px 20px;
            border: 2px solid $primary-color;
            background: none;
            color: $white-color;
            text-transform: uppercase;
            text-decoration: none;
            font-size: 1em;
            letter-spacing: 1.5px;
            display: block;
            max-width: 150px;
            margin-left: auto;
            margin-right: auto;
            &:focus {
                background: $primary-color;
                color: $white-color;
                outline: 2px solid $primary-color;
            }
            &:hover {
                background: $primary-color;
                color: $white-color;
            }
        }
    }
}
</style> 