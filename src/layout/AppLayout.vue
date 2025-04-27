<template>
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <main class="flex-1">
        <slot />  <!-- This will render content from the page (e.g., index.vue) -->
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  </script>
  