<template>
  <section id="our-team" class="bg-violet-100 py-24">
    <div class="container mx-auto px-4 text-center">
       <div class="mb-16">
        <h2 data-aos="fade-down" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-900 mb-4">
          Meet Our Team
        </h2>
        <p data-aos="fade-down" data-aos-delay="100" class="text-lg text-violet-700 max-w-2xl mx-auto">
          The passionate professionals behind PCBSBD's success
        </p>
      </div>

      <!-- CEO -->
      <div class="flex justify-center mb-20" data-aos="zoom-in">
        <div
          class="group w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
        >
          <div class="overflow-hidden flex justify-center mt-6">
            <img src="/src/assets/images/people-4.png" alt="CEO"
              class="w-40 h-40 object-cover rounded-full border-4 border-violet-200 group-hover:scale-110 transition-transform duration-500">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-violet-900 mb-2">Shahab Kabir</h3>
            <p class="text-violet-700 font-semibold">Chief Executive Officer</p>
            <p class="text-gray-600 mt-2">Inspirational leader driving innovation and strategic vision for PCBSBD's growth and success.</p>
          </div>
        </div>
      </div>

      <!-- Consultants -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-20">
        <!-- Consultant 1 -->
        <div
          data-aos="fade-up"
          class="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
        >
          <div class="overflow-hidden flex justify-center mt-6">
            <img src="/src/assets/images/people-2.png" alt="Engineer"
              class="w-32 h-32 object-cover rounded-full border-4 border-violet-200 group-hover:scale-110 transition-transform duration-500">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-violet-900 mb-2">Abdullah Bin Malek</h3>
            <p class="text-violet-700 font-semibold">Engineer &amp; Consultant</p>
            <p class="text-gray-600 mt-2">Specializes in bridging cutting-edge technology with client objectives to deliver optimal performance solutions.</p>
          </div>
        </div>

        <!-- Consultant 2 -->
        <div
          data-aos="fade-up"
          class="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
        >
          <div class="overflow-hidden flex justify-center mt-6">
            <img src="/src/assets/images/people-3.png" alt="Consultant"
              class="w-32 h-32 object-cover rounded-full border-4 border-violet-200 group-hover:scale-110 transition-transform duration-500">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-violet-900 mb-2">Taief Hossain</h3>
            <p class="text-violet-700 font-semibold">Technology &amp; Business Consultant</p>
            <p class="text-gray-600 mt-2">Focuses on developing smart business strategies and optimizing processes through technology solutions.</p>
          </div>
        </div>
      </div>

      <!-- Other Members -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        <!-- Graphics Designer -->
        <div
          data-aos="fade-up"
          class="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
        >
          <div class="overflow-hidden flex justify-center mt-6">
            <img src="/src/assets/images/people.jpg" alt="Graphics Designer"
              class="w-32 h-32 object-cover rounded-full border-4 border-violet-200 group-hover:scale-110 transition-transform duration-500">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-violet-900 mb-2">Benzir Matubbar</h3>
            <p class="text-violet-700 font-semibold">Graphics Designer</p>
            <p class="text-gray-600 mt-2">Creates compelling visuals that elevate the brand experience and communicate our values effectively.</p>
          </div>
        </div>

        <!-- Digital Marketer & Sales -->
        <div
          data-aos="fade-up"
          class="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
        >
          <div class="overflow-hidden flex justify-center mt-6">
            <img src="/src/assets/images/people.jpg" alt="Digital Marketer"
              class="w-32 h-32 object-cover rounded-full border-4 border-violet-200 group-hover:scale-110 transition-transform duration-500">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-violet-900 mb-2">Sahaf Elahi</h3>
            <p class="text-violet-700 font-semibold">Digital Marketer &amp; Sales</p>
            <p class="text-gray-600 mt-2">Boosts engagement and drives sales through innovative digital marketing strategies.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>




<script setup>
// No script needed
const people4 = '/src/assets/images/people-4.png'
const people2 = '/src/assets/images/people-2.png'
const people3 = '/src/assets/images/people-3.png'
</script>
