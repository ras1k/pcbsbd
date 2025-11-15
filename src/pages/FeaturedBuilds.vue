<template>
  <!-- Featured Builds Section -->
  <section id="builds" class="bg-violet-100 py-24">
    <div class="container mx-auto px-4 text-center">
      <h2 
        class="text-4xl sm:text-5xl font-bold text-violet-900 mb-14"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="ease-out-cubic"
      >
        Featured Builds
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Build Cards - All with the same animation for consistency -->
        <div 
          v-for="(build, index) in builds"
          :key="index"
          class="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02]"
          data-aos="fade-up"
          :data-aos-delay="100 + (index * 100)"
          data-aos-duration="600"
          data-aos-easing="ease-out-cubic"
          data-aos-anchor-placement="top-bottom"
        >
          <div class="overflow-hidden h-60">
            <img 
              :src="build.image" 
              :alt="build.title" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            >
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-violet-900 mb-2 group-hover:text-violet-700 transition-colors duration-300">
              {{ build.title }}
            </h3>
            <p class="text-gray-600">{{ build.description }}</p>
            <div class="mt-4 flex justify-center gap-2 flex-wrap">
              <span 
                v-for="(tag, tagIndex) in build.tags"
                :key="tagIndex"
                class="text-xs px-2 py-1 bg-violet-100 text-violet-800 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import img1 from '@/assets/pc/pc-1.jpg';
import img2 from '@/assets/pc/pc-2.jpg';
import img3 from '@/assets/pc/pc-3.jpg';
import img4 from '@/assets/pc/pc-8.jpg';
import img5 from '@/assets/pc/pc-5.jpg';
import img6 from '@/assets/pc/pc-10.jpg';
const builds = ref([
  {
    title: "Gaming Beast",
    description: "High-performance gaming PC built to handle the latest AAA games (high-end) at ultra settings.",
    image: img1,
    tags: ["RTX 5080", "i9-13900K", "32GB DDR5"]
  },
  {
    title: "Workstation Pro",
    description: "A powerful workstation for content creation, 3D modeling, and rendering.",
    image: img2,
    tags: ["RTX 5090", "Ryzen 9 7950X", "64GB DDR5"]
  },
  {
    title: "Budget Champion",
    description: "Affordable and reliable build for everyday tasks, web browsing, and light gaming.",
    image: img3,
    tags: ["RTX 5060", "Ryzen 5 5600", "16GB DDR4"]
  },
  {
    title: "Streamer Setup",
    description: "Perfect for streaming and multitasking with high frame rate support and quiet cooling.",
    image: img4,
    tags: ["Dual PC", "Capture Card", "Low Noise"]
  },
  {
    title: "Mini ITX",
    description: "Compact and powerful — ideal for small spaces without sacrificing performance.",
    image: img5,
    tags: ["Small Form Factor", "Portable", "Efficient"]
  },
  {
    title: "Creator Rig",
    description: "Designed for video editing and graphic design with fast rendering and smooth multitasking.",
    image: img6,
    tags: ["4K Editing", "Color Accurate", "Multi-threaded"]
  }
]);
</script>


