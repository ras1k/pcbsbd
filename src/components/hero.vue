<template>
  <section id="home" class="relative overflow-hidden lg:min-h-0 min-h-screen text-white">
    
    <div class="absolute inset-0 z-0">
      <Carousel :autoplay="5000" :wrap-around="true" class="w-full h-full">
        <Slide v-for="slide in slides" :key="slide.img">
          <div class="carousel__item w-full h-full">
            <img :src="slide.img" alt="PC Build Showcase" class="w-full h-full object-cover">
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>

    <div class="absolute inset-0 z-10 bg-[#4B0082]/70"></div>

    <div class="absolute inset-0 z-20">
      <canvas id="particles" class="w-full h-full"></canvas>
    </div>

    <div class="relative container mx-auto px-6 py-32 z-30">
      <div class="flex flex-col items-center justify-center">
        
        <div class="w-full max-w-3xl text-center animate-fade-in">
          <h1 class="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            Build Your <span class="text-violet-300">Dream PC</span>
          </h1>
          <p class="text-lg sm:text-xl text-gray-200 mb-10">
            Customized builds, unbeatable value setups, and expert laptop advice — all under one roof.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <router-link to="/builds" class="px-8 py-4 cursor-pointer bg-white text-[#4B0082] font-semibold rounded-full hover:bg-violet-300 hover:text-white transition duration-300">
              View Builds
            </router-link>
            <router-link to="/contact" class="px-8 py-4 cursor-pointer border-2 border-white text-white rounded-full hover:bg-white hover:text-[#4B0082] transition duration-300">
              Contact Us
            </router-link>
          </div>
        </div>
        
        </div>
    </div>

    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
      <a @click="scrollToSection('about')" class="text-white text-3xl cursor-pointer">
        ↓
      </a>
    </div>

  </section>
  
  <section id="about" class="bg-[#dfd8e9] text-[#1E1B4B] py-24 px-4">
    <div class="container mx-auto ">
      <h2 class="text-4xl sm:text-5xl font-bold text-center mb-16">The Smarter Way to Build Your PC</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

        <div class="space-y-6">
          <div class="flex items-start gap-4">
            <span class="w-4 h-4 bg-violet-500 rounded-full mt-2"></span>
            <p class="text-lg font-medium">Customized builds tailored to your needs</p>
          </div>
          <div class="flex items-start gap-4">
            <span class="w-4 h-4 bg-violet-500 rounded-full mt-2"></span>
            <p class="text-lg font-medium">Premium components from trusted brands</p>
          </div>
          <div class="flex items-start gap-4">
            <span class="w-4 h-4 bg-violet-500 rounded-full mt-2"></span>
            <p class="text-lg font-medium">Expert cable management for optimal airflow</p>
          </div>
          <div class="flex items-start gap-4">
            <span class="w-4 h-4 bg-violet-500 rounded-full mt-2"></span>
            <p class="text-lg font-medium">Thorough stress testing before delivery</p>
          </div>
          <div class="mt-8">
            <p class="text-sm uppercase tracking-wider">Our Experience</p>
            <p class="text-2xl font-bold">We've Completed <span class="italic">50+ Custom Builds</span></p>
          </div>
        </div>

        <div class="flex justify-center animate-fade-in" style="animation-delay: 0.3s;">
          <img src="/src/assets/pc/pc-7.jpg" alt="Custom Gaming PC with RGB lighting" class="w-full max-w-sm rounded-2xl shadow-xl">
        </div>

        <div class="space-y-8">
          <div>
            <h4 class="font-bold italic text-lg">High-Performance CPUs</h4>
            <p class="text-gray-700">Latest generation processors from Intel and AMD for maximum computing power.</p>
          </div>
          <div>
            <h4 class="font-bold italic text-lg">Powerful Graphics</h4>
            <p class="text-gray-700">Top-tier GPUs to handle gaming, content creation, and professional workloads.</p>
          </div>
          <div>
            <h4 class="font-bold italic text-lg">Fast Storage</h4>
            <p class="text-gray-700">NVMe SSDs with blazing fast read/write speeds for instant load times.</p>
          </div>
          <div>
            <h4 class="font-bold italic text-lg">Efficient Cooling</h4>
            <p class="text-gray-700">Advanced air and liquid cooling solutions to keep your system running optimally.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Imports from both files
import { onMounted, ref } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { useStore } from '../store' // Assuming this path is correct
import 'vue3-carousel/dist/carousel.css'
import img1 from '@/assets/cover/1.jpg';
import img2 from '@/assets/cover/2.jpg';
import img3 from '@/assets/cover/3.jpg';
import img4 from '@/assets/cover/4.jpg';
import img5 from '@/assets/cover/5.jpg';
// Carousel logic from second file
const store = useStore()
// console.log(store) // Kept from your original code
const slides = ref([
    {
      img: img1
    },
    {
      img: img2
    },
    {
      img: img3
    },
    {
      img: img4
    },
    {
      img: img5
    },
])

// Scroll function from first file
function scrollToSection(id) {
  // Added a check for 'about' to scroll to the second section
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Particle.js logic from first file
onMounted(() => {
  const canvas = document.getElementById('particles')
  if (!canvas) return; // Added a guard in case canvas isn't found
  
  const ctx = canvas.getContext('2d')

  function resize() {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  window.addEventListener('resize', resize)
  resize() // Initial resize on mount

  let particlesArray = []

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 2 + 1
      this.speedX = Math.random() * 0.5 - 0.25
      this.speedY = Math.random() * 0.5 - 0.25
    }
    update() {
      this.x += this.speedX
      this.y += this.speedY
      if (this.size > 0.2) this.size -= 0.02

      // Re-initialize particle if it goes off-screen
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height || this.size <= 0.2) {
        this.reset();
      }
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }
    draw() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  function init() {
    particlesArray = []
    let numberOfParticles = (canvas.width * canvas.height) / 9000; // Make particle count responsive
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }
  }

  function handleParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update()
      particlesArray[i].draw()
    }
  }

  let animationFrameId;
  function animate() {
    handleParticles()
    animationFrameId = requestAnimationFrame(animate)
  }

  init()
  animate()
  
  // Also re-init on resize
  window.addEventListener('resize', () => {
    resize();
    init();
  });
})
</script>

<style scoped>
/* Fade-in animation from first file */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

/* Styles to make the carousel a full-height background.
  We use :deep() to target the child component's classes.
*/
:deep(.carousel),
:deep(.carousel__viewport),
:deep(.carousel__track),
:deep(.carousel__slide),
:deep(.carousel__item) {
  height: 100%;
}

/* Optional: Style navigation/pagination for better visibility */
:deep(.carousel__pagination-button::after) {
  background-color: rgba(255, 255, 255, 0.5);
}
:deep(.carousel__pagination-button:hover::after) {
  background-color: rgba(255, 255, 255, 0.8);
}
:deep(.carousel__pagination-button--active::after) {
  background-color: #FFFFFF;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 3rem; /* Make them a bit bigger */
  height: 3rem;
}
:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>