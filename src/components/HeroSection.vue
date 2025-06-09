<template>
  <section id="home" class="relative bg-[#4B0082] pt-32 pb-32 overflow-hidden text-white">
    <!-- Particle Background -->
    <div class="absolute inset-0 z-0">
      <canvas id="particles" class="w-full h-full"></canvas>
    </div>

    <div class="relative container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between z-10">
      
      <!-- Left Content -->
      <div class="w-full md:w-1/2 text-center md:text-left animate-fade-in">
        <h1 class="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
          Build Your <span class="text-violet-300">Dream PC</span>
        </h1>
        <p class="text-lg sm:text-xl text-gray-200 mb-10">
          Customized builds, unbeatable value setups, and expert laptop advice — all under one roof.
        </p>
        <div class="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <router-link to="/builds" class="px-8 py-4 cursor-pointer bg-white text-[#4B0082] font-semibold rounded-full hover:bg-violet-300 hover:text-white transition duration-300">
            View Builds
          </router-link>
          <router-link to="/contact" class="px-8 py-4 cursor-pointer border-2 border-white text-white rounded-full hover:bg-white hover:text-[#4B0082] transition duration-300">
            Contact Us
          </router-link>
        </div>
      </div>

      <!-- Right Image -->
      <div class="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center animate-fade-in" style="animation-delay: 0.3s;">
        <img src="/src/assets/pc/cover.jpg" 
             alt="PC Build" 
             class="w-full max-w-lg rounded-2xl shadow-2xl">
      </div>

    </div>

    <!-- Scroll Down Icon -->
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
      <a @click="scrollToSection('about')" class="text-white text-3xl cursor-pointer">
        ↓
      </a>
    </div>

  </section>
  <section class="bg-[#dfd8e9] text-[#1E1B4B] py-24 px-4">
  <div class="container mx-auto max-w-7xl">
    <h2 class="text-4xl sm:text-5xl font-bold text-center mb-16">The Smarter Way to Build Your PC</h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

      <!-- Left: Bullet List -->
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

      <!-- Center: PC Image -->
      <div class="flex justify-center animate-fade-in" style="animation-delay: 0.3s;">
        <img src="/src/assets/pc/pc-7.jpg" alt="Custom Gaming PC with RGB lighting" class="w-full max-w-sm rounded-2xl shadow-xl">
      </div>

      <!-- Right: Component Info Blocks -->
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
// Particle.js simple setup
import { onMounted } from 'vue'
function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
onMounted(() => {
  const canvas = document.getElementById('particles')
  const ctx = canvas.getContext('2d')

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  window.addEventListener('resize', resize)
  resize()

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
    for (let i = 0; i < 100; i++) {
      particlesArray.push(new Particle())
    }
  }

  function handleParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update()
      particlesArray[i].draw()
      if (particlesArray[i].size <= 0.2) {
        particlesArray[i] = new Particle()
      }
    }
  }

  function animate() {
    handleParticles()
    requestAnimationFrame(animate)
  }

  init()
  animate()
})
</script>

<style scoped>
/* Fade-in animation */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

/* Bounce animation is already built-in from Tailwind: animate-bounce */
</style>
