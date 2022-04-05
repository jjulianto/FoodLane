<template>
    <div class="container">
        <h1 class="center">Gambar</h1>
        <p class="center">Beberapa foto & pengalaman pengujung di FoodLane</p>
        <div class="gallery-container">
            <div class="gallery" v-for="(img, index) in image" :key="index">
                <img v-lazy="{ src: getImageUrl(img) }" class="img-gallery" alt />
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    name: 'Gallery',
    setup() {
        const image = ref([])

        const getImageUrl = (img) => {
            return require(`../assets/${img}`)
        }

        const images = () => {
            for (let i = 1; i <= 7; i++) {
                let imageTitle = `gallery-${i}.jpg`;
                image.value.push(imageTitle);
            }
        }

        onMounted(() => {
            images()
        })

        return {
            image,
            getImageUrl,
            images
        }
    }
}
</script>

<style lang="scss" scoped>
.gallery-container {
    -moz-column-width: 18em;
    -webkit-column-width: 18em;
    column-width: 18em;
    -moz-column-gap: 1em;
    -webkit-column-gap: 1em;
    column-gap: 1em;
    .gallery {
        display: inline-block;
        width: 100%;
        padding: 30px;
        margin: 5px;
        .img-gallery {
            border-radius: 20px;
            width: 100%;
            transition: 0.3s ease-in-out;
            &:hover {
                padding: 0.5rem;
            }
        }
    }
}
</style>