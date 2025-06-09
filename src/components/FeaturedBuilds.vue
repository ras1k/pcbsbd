<template>
  <!-- Featured Builds Section -->
  <section id="builds" class="bg-violet-100 py-24">
    <div class="container mx-auto px-4 text-center">
      <h2 data-aos="fade-down" class="text-4xl sm:text-5xl font-bold text-violet-900 mb-14">
        Featured Builds
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <!-- Build 1 -->
        <div 
          class="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02]"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div class="overflow-hidden">
            <img src="/src/assets/pc/pc-1.jpg" alt="Gaming Beast" class="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-violet-900 mb-2 group-hover:text-violet-700 transition-colors duration-300">
              Gaming Beast
            </h3>
            <p class="text-gray-600">High-performance gaming PC built to handle the latest AAA games at ultra settings.</p>
          </div>
        </div>

        <!-- Build 2 -->
        <div 
          class="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02]"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div class="overflow-hidden">
            <img src="/src/assets/pc/pc-2.jpg" alt="Workstation Pro" class="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-violet-900 mb-2 group-hover:text-violet-700 transition-colors duration-300">
              Workstation Pro
            </h3>
            <p class="text-gray-600">A powerful workstation for content creation, 3D modeling, and rendering.</p>
          </div>
        </div>

        <!-- Build 3 -->
        <div 
          class="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div class="overflow-hidden">
            <img src="/src/assets/pc/pc-3.jpg" alt="Budget Build" class="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-violet-900 mb-2 group-hover:text-violet-700 transition-colors duration-300">
              Budget Build
            </h3>
            <p class="text-gray-600">Affordable and reliable build for everyday tasks, web browsing, and light gaming.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>
