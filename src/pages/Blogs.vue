<template>
  <section id="blog" class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl sm:text-4xl font-bold text-violet-800 text-center mb-12">
        Latest Blog Posts
      </h2>

      <div class="space-y-6">
        <div
          v-for="(blog, index) in blogs"
          :key="index"
          class="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all"
          :class="{ 'bg-violet-50': activeIndex === index }"
        >
          <!-- Header -->
          <button
            @click="toggle(index)"
            class="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-violet-100 transition-colors duration-300"
          >
            <h3 class="text-xl font-semibold text-violet-800">{{ blog.title }}</h3>
            <i :class="[
              'fas text-lg text-violet-700 transition-transform duration-300',
              activeIndex === index ? 'fa-chevron-up rotate-180' : 'fa-chevron-down'
            ]"></i>
          </button>

          <!-- Body -->
          <div
            v-show="activeIndex === index"
            class="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-6 animate-fade-in"
          >
            <!-- Image -->
            <div>
              <img
                :src="blog.image"
                alt="Blog Cover"
                class="rounded-lg object-cover w-60 h-60 "
              />
            </div>

            <!-- Content -->
            <div class="prose prose-violet max-w-none text-gray-800 text-base leading-relaxed">
              <div v-html="blog.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const blogs = ref([
  {
    title: 'The Ultimate Guide to Building Your First Gaming PC',
    image: `/src/assets/pc/pc-1.jpg`,
    content: `
      <p>Building a gaming PC might feel intimidating, but it's one of the most rewarding things you can do as a gamer. Here's a quick breakdown:</p>
      <ul>
        <li><strong>CPU:</strong> Start with an AMD Ryzen 5 or Intel i5 – plenty of power for most games.</li>
        <li><strong>GPU:</strong> Your graphics card is king. A good NVIDIA RTX 3060 or AMD RX 6700 XT can handle modern titles.</li>
        <li><strong>RAM:</strong> 16GB DDR4 (3200MHz or higher).</li>
        <li><strong>Storage:</strong> NVMe SSD for OS + large HDD or SATA SSD for games.</li>
      </ul>
      <p>Follow tutorials, use PCPartPicker for compatibility, and don’t be afraid to ask the community!</p>
    `
  },
  {
    title: '5 Signs It’s Time to Upgrade Your PC',
    image: `/src/assets/pc/pc-2.jpg`,
    content: `
      <p>Your PC served you well, but is it falling behind? Look for these signs:</p>
      <ol>
        <li>Games are lagging even at low settings.</li>
        <li>Apps take forever to open or install.</li>
        <li>Your motherboard doesn’t support newer parts.</li>
        <li>You're stuck on SATA SSDs while NVMe dominates.</li>
        <li>Thermal throttling and loud fans during light tasks.</li>
      </ol>
      <p>Upgrading your GPU, adding more RAM, or switching to an M.2 NVMe drive can make a huge difference.</p>
    `
  },
  {
    title: 'Air vs Liquid Cooling: Real-World Comparison',
    image: `/src/assets/pc/pc-3.jpg`,
    content: `
      <p>Should you go with an air tower cooler or a sleek AIO liquid cooler? It depends:</p>
      <ul>
        <li><strong>Air Cooling:</strong> Reliable, cheaper, and easier to maintain. Great for most users.</li>
        <li><strong>Liquid Cooling:</strong> Quieter under load and looks amazing, but more expensive and riskier.</li>
      </ul>
      <p>For most mid-tier builds, a good air cooler like the Deepcool AK620 or Noctua NH-U12S is more than enough. But if aesthetics and silence are top priorities, go AIO.</p>
    `
  },
  {
    title: 'Top 10 Tools Every PC Builder Should Own',
    image: 'https://images.unsplash.com/photo-1581092914043-7b3d64b252b4',
    content: `
      <ul>
        <li>Magnetic screwdriver set</li>
        <li>Anti-static wrist strap</li>
        <li>Thermal paste & remover</li>
        <li>Zip ties and Velcro straps</li>
        <li>Flashlight or headlamp</li>
        <li>Precision tweezers</li>
        <li>Thermal sensor reader</li>
        <li>Isopropyl alcohol (99%)</li>
        <li>Extra fan screws and standoffs</li>
        <li>Patience — seriously, it’s a tool!</li>
      </ul>
      <p>Having these on hand saves time, avoids damage, and keeps your build clean.</p>
    `
  },
  {
    title: 'Avoid These Mistakes When Picking Parts',
    image: 'https://images.unsplash.com/photo-1618375531913-3e3ef1ec03a0',
    content: `
      <p>Don't get burned — here’s what to avoid when choosing components:</p>
      <ol>
        <li><strong>Mismatch:</strong> Pairing a high-end GPU with a low-watt PSU.</li>
        <li><strong>Clearance issues:</strong> Not checking GPU/cooler size vs. your case.</li>
        <li><strong>VRMs:</strong> Ignoring motherboard quality for Ryzen CPUs.</li>
        <li><strong>Overpaying:</strong> Spending on RGB over raw performance.</li>
        <li><strong>Cheap case:</strong> Bad airflow = overheating components.</li>
      </ol>
      <p>Do your research, plan builds smartly, and don’t fall for marketing gimmicks!</p>
    `
  }
])
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
