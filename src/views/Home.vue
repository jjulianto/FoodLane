<template>
    <div class="home">
        <Hero />
        <div class="container">
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
        </div>
    </div>
</template>

<script>
import Hero from "../components/Hero.vue"
export default
    {
        components: { Hero },
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
</style>