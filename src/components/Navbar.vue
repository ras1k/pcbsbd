<template>
  <div>
    <!-- Scroll Progress Bar -->
    <div
    v-if="route.name == 'home'"
    class="fixed top-0 left-0 h-1 bg-violet-500 z-[60] transition-all duration-200"
    :style="{ width: scrollProgress + '%' }"
  ></div>
  

    <!-- Navbar -->
    <nav 
      :class="['fixed top-0 left-0 w-full z-50 transition-transform duration-300', 
              isHidden ? '-translate-y-full' : 'translate-y-0', 
              'bg-[#1a0b2e]/80 backdrop-blur-md shadow-md']">
      
      <div class="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <!-- <span class="text-white">{{ route.name }}</span> -->
        <!-- Logo -->
        <div class="text-white font-bold text-2xl cursor-pointer">
            <!-- <img src="/src/assets/pc/logo.jpg" class="w-24 h-12" alt=""> -->
             <a @click="scrollToSection('home')">PCBS<span class="text-violet-400">BD</span></a>
          
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex items-center space-x-8 text-white font-medium">
          <li><router-link to="/" @click="scrollToSection('home')" class="hover:text-violet-300 transition cursor-pointer">Home</router-link></li>
          <li><router-link to="/about" class="hover:text-violet-300 transition cursor-pointer">About</router-link></li>
          <li><router-link to="/builds" @click="scrollToSection('builds')" class="hover:text-violet-300 transition cursor-pointer">Builds</router-link></li>
          <li><router-link to="/whyUs" @click="scrollToSection('whyus')" class="hover:text-violet-300 transition cursor-pointer">Why Us</router-link></li>
          <li><router-link to="/team" @click="scrollToSection('team')" class="hover:text-violet-300 transition cursor-pointer">Our Team</router-link></li>
          <li><router-link to="/contact" @click="scrollToSection('contact')" class="hover:text-violet-300 transition cursor-pointer">Contact</router-link></li>
        </ul>

        <!-- Mobile Hamburger -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <template v-if="isOpen">
              <XIcon class="w-8 h-8" />
            </template>
            <template v-else>
              <MenuIcon class="w-8 h-8" />
            </template>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="md:hidden bg-[#1a0b2e] px-6 py-4">
        <ul class="flex flex-col space-y-4 text-white font-medium">
          <li><router-link to="/" @click="scrollToSection('home')" class="hover:text-violet-300 transition cursor-pointer">Home</router-link></li>
          <li><router-link to="/about" class="hover:text-violet-300 transition cursor-pointer">About</router-link></li>
          <li><router-link to="/builds" @click="scrollToSection('builds')" class="hover:text-violet-300 transition cursor-pointer">Builds</router-link></li>
          <li><router-link to="/whyUs" @click="scrollToSection('whyus')" class="hover:text-violet-300 transition cursor-pointer">Why Us</router-link></li>
          <li><router-link to="/team" @click="scrollToSection('team')" class="hover:text-violet-300 transition cursor-pointer">Our Team</router-link></li>
          <li><router-link to="/contact" @click="scrollToSection('contact')" class="hover:text-violet-300 transition cursor-pointer">Contact</router-link></li>
        </ul>
      </div>

    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu as MenuIcon, X as XIcon } from 'lucide-vue-next'
import logo from '/src/assets/pc/logo.jpg'
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)
const isHidden = ref(false)
const scrollProgress = ref(0)
let lastScrollTop = 0

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function navigateAndClose(section) {
  closeMenu()
  scrollToSection(section)
}

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (route.name == 'home') {
    // Hide/Show Navbar on scroll only on home page
    if (scrollTop > lastScrollTop) {
      isHidden.value = true
    } else {
      isHidden.value = false
    }
  } else {
    // Always show navbar on other pages
    isHidden.value = false
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop

  // Update Scroll Progress
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (scrollTop / docHeight) * 100
}


function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>

.router-link-active {
  color: #8b5cf6;
  border-bottom: 2px solid white;
  padding: 4px 8px;
  border-radius: 8px;
}
</style>
