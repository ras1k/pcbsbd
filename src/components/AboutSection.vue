<template>
  <section id="about"  class="bg-violet-50 py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl sm:text-5xl font-extrabold text-violet-800">
        About PCBSBD
      </h2>
      <p class="mt-6 text-lg sm:text-xl text-gray-700 max-w-5xl mx-auto">
         At <span class="font-bold text-violet-700">PCBSBD</span>, we don't just build computers - we create personalized solutions that empower your digital life. 
            Our team of passionate technologists combines cutting-edge components with meticulous craftsmanship to deliver 
            performance that exceeds expectations.
      </p>

      <div data-aos="fade-up" class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
        <!-- Card 1 -->
        <div class="bg-white border border-violet-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
          <h3 class="text-2xl font-bold text-violet-700 mb-4">Custom Builds</h3>
          <p class="text-gray-600">
            Whether you're a gamer, designer, or engineer, we build powerful custom PCs tailored exactly to your needs.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="bg-white border border-violet-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
          <h3 class="text-2xl font-bold text-violet-700 mb-4">Value for Money</h3>
          <p class="text-gray-600">
            Get maximum performance without overspending. We optimize your setup for the best possible return on investment.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="bg-white border border-violet-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
          <h3 class="text-2xl font-bold text-violet-700 mb-4">Expert Advice</h3>
          <p class="text-gray-600">
            Confused about your next purchase? We offer honest, expert advice on everything from laptops to accessories.
          </p>
        </div>
      </div>
      <div class="mt-20 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-2xl shadow-lg p-8 sm:p-10 backdrop-blur-sm" data-aos="fade-up">
        <h3 class="text-2xl font-bold text-center text-violet-900 mb-10">Our Impact in Numbers</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
            <div class="lg:text-4xl text-3xl font-bold text-violet-700 mb-2">
             <span class="inline-flex items-center">
               <count-up :end-val="2000" ></count-up>+
             </span>
            </div>
            <div class="text-gray-600 font-medium">Systems Built</div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
            <div class="lg:text-4xl text-3xl font-bold text-violet-700 mb-2">
              <span class="inline-flex items-center">
                <count-up :end-val="98" ></count-up>%
              </span>
            </div>
            <div class="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
            <div class="lg:text-4xl text-3xl font-bold text-violet-700 mb-2">
              <span class="inline-flex items-center">
                <count-up :end-val="2" ></count-up>+
              </span>
            </div>
            <div class="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
            <div class="lg:text-4xl text-3xl font-bold text-violet-700 mb-2">24/7</div>
            <div class="text-gray-600 font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CountUp from 'vue-countup-v3'
// No script needed for now
</script>


