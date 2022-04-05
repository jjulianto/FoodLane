<template>
    <div class="container">
        <h1 class="center">Gambar</h1>
        <p class="center">Beberapa foto menu makanan pilihan dari kami.</p>
        <div class="gallery-container">
            <div class="gallery" v-for="(img, index) in image" :key="index">
                <img v-lazy="{ src: getImageUrl(img) }" class="img-gallery rounded" alt />
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
    -moz-column-width: 18rem;
    -webkit-column-width: 18rem;
    column-width: 18rem;
    -moz-column-gap: 1rem;
    -webkit-column-gap: 1rem;
    column-gap: 1rem;
    .gallery {
        display: inline-block;
        width: 100%;
        padding: 30px;
        margin: 5px;
        .img-gallery {
            width: 100%;
            transition: 0.3s ease-in-out;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
}
</style>