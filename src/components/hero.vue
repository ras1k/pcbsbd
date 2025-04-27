<template>
   
     <Carousel>
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item">
        <!-- <img :src="imageURL+slide.image" alt="cover" class="cover max-w-screen-xl max-h-[500px]"> -->
        <img :src="slide.img" alt="cover" class="cover max-w-screen-xl max-h-[500px]">
       </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
    <!-- <div class=" bg-center bg-cover ">
        <img src="../assets/landing/1.png" alt="">
       <div class="flex flex-col items-center justify-center h-full w-3/5 m-auto gap-5">
            
            <p class="text-lg font-semibold text-center uppercase text-white">fall winter collection 2021</p>
            <h1 class="text-6xl text-white font-semibold text-center">Our Latest Collection</h1>
            <p class="text-lg text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, id quis. Inventore qui porro temporibus, laudantium quam illo aspernatur cupiditate.</p>
            <button class="h-[50px] w-[150px] text-amber-100 font-semibold bg-green-600 uppercase text-sm">View More</button>
        </div>
    </div> -->
</template>

<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import {ref} from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { useStore } from '../store'
const imageURL = image_url
const store = useStore()
// const slides = ref(store.banners)
console.log(store)
const slides = ref([
    {
        img:'/src/assets/landing/2.png'
    },
    {
        img:'/src/assets/landing/1.png'
    },
    // {
    //     img:'/src/assets/landing/3.png'
    // }
])
</script>

<style>
.ban-img-one{
        animation: 10s ban-animate1 linear infinite;
    }
    @keyframes ban-animate1{
        0%{
            background-image: url(../assets/landing/1.png);
        }
        46%{
            background-image: url(../assets/landing/1.png);
        }
        50%{
            background-image: url(../assets/landing/1.png);
        }
        96%{
            background-image: url(../assets/landing/1.png);
        }
        100%{
            background-image: url(../assets/landing/1.png);
        }
    }
</style>