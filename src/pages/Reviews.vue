<template>
  <section id="reviews" class="bg-violet-100 py-24 relative overflow-hidden">
    <div class="container mx-auto px-4">

      <!-- Header -->
      <div class="text-center mb-16">
        <h2
          data-aos="fade-down"
          class="text-4xl sm:text-5xl font-bold text-violet-900 mb-4"
        >
          What Our Customers Say
        </h2>
        <p
          data-aos="fade-down"
          data-aos-delay="100"
          class="text-lg text-violet-700 max-w-2xl mx-auto"
        >
          Real experiences from satisfied customers who trusted PCBSBD
        </p>
      </div>

      <!-- Facebook Review Summary -->
<div
  data-aos="zoom-in"
  class="flex flex-col items-center mb-20"
>
  <div class="flex items-center gap-3 text-violet-800">
    <i class="fab fa-facebook text-4xl"></i>
    <span class="text-4xl font-bold">Recommended</span>
  </div>

  <div class="mt-4 flex items-center gap-3">
    <span class="text-2xl font-bold text-green-600">
  {{ recommendPercent }}%
</span>

    <span class="text-gray-700 text-lg">
      of customers recommend <a href="https://www.facebook.com/profile.php?id=61570132933190" target="_blank" class="underline hover:text-blue-600">PCBSBD</a>
    </span>
  </div>

  <p class="text-gray-600 mt-2">
    Based on 250+ verified Facebook reviews
  </p>

  <a
    href="https://www.facebook.com/profile.php?id=61570132933190&sk=reviews"
    target="_blank"
    class="mt-4 inline-flex items-center gap-2 text-violet-700 font-semibold hover:underline"
  >
    View all reviews on Facebook
    <i class="fas fa-arrow-right text-sm"></i>
  </a>
</div>


      <!-- Reviews Grid -->
      <!-- Reviews Grid (Asymmetrical) -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

  <!-- Featured Big Review -->
  <div
    data-aos="fade-up"
    class="lg:col-span-2 lg:row-span-2 relative bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-500"
  >
    <canvas class="absolute inset-0 w-full h-full z-0 pointer-events-none"></canvas>

    <div class="relative z-10">
      <div class="flex items-center mb-6">
        <img
          :src="reviews[1].image"
          class="w-16 h-16 rounded-full border-2 border-violet-200 mr-4"
        />
        <div>
          <h4 class="text-xl font-bold text-violet-900">
            {{ reviews[1].name }}
          </h4>
          <p class="text-violet-600">
            {{ reviews[1].role }}
          </p>
        </div>
      </div>

      <p class="text-gray-700 text-lg leading-relaxed">
        “{{ reviews[1].comment }}”
      </p>

      <span class="inline-block mt-6 text-sm text-green-600 font-semibold">
        ✅ Verified Facebook Review
      </span>
    </div>
  </div>

  <!-- Smaller Reviews -->
  <div
    v-for="(review, index) in reviews.filter((_, i) => i !== 1)"
    :key="index"
    data-aos="fade-up"
    class="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
  >
    <canvas class="absolute inset-0 w-full h-full z-0 pointer-events-none"></canvas>

    <div class="relative z-10">
      <div class="flex items-center mb-3">
        <img
          :src="review.image"
          class="w-12 h-12 rounded-full border border-violet-200 mr-3"
        />
        <div>
          <h4 class="font-semibold text-violet-900">
            {{ review.name }}
          </h4>
          <p class="text-sm text-violet-600">
            {{ review.role }}
          </p>
        </div>
      </div>

      <p class="text-gray-700 text-sm leading-relaxed line-clamp-4">
        “{{ review.comment }}”
      </p>
       <span class="inline-block mt-6 text-sm text-green-600 font-semibold">
        ✅ Verified Facebook Review
      </span>
    </div>
  </div>
</div>


      <!-- CTA -->
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        class="mt-24 bg-gradient-to-r from-violet-700 to-violet-900 text-white rounded-2xl py-16 text-center relative overflow-hidden"
      >
        <canvas id="reviewsParticles" class="absolute inset-0 w-full h-full z-0"></canvas>

        <div class="relative z-10">
          <h3 class="text-3xl sm:text-4xl font-semibold mb-4">
            Ready to Experience Premium PC Building?
          </h3>
          <p class="text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of happy customers and build your dream PC with PCBSBD today.
          </p>
          <router-link
            to="/contact"
            class="inline-block bg-white text-violet-700 px-8 py-3 rounded-full font-semibold text-xl hover:scale-110 transition"
          >
            Get Started
          </router-link>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const recommendPercent = ref(0)

const reviews = [
  {
    name: 'Ishmam Zaman Arno',
    role: 'Student',
    rating: 5,
    comment:
      'They are honestly the best service out there. Very nice to talk with and very picky. It was a delightful experience',
    image: '/src/assets/images/people.jpg',
  },
  {
    name: 'Dewan Nafiul Islam Noor',
    role: 'Job Holder',
    rating: 5,
    comment:
      'After completing my BSc, I needed a solid high end PC build to handle heavy tasks. One of my juniors recommended their PC consultation and build service and honestly, it was a great decision. What impressed me first was how they provided two separate build options based on budget: one for mid/low budget and another high end configuration that’s future proof. I went with the high end build. Throughout the process, they were friendly, professional, and transparent. Every component was discussed in detail, and they made sure I understood why one option might be better than another. One challenge I faced was the market supply a few components (like the RM850x PSU) were unavailable at that time. But they helped me find proper upgrade/alternative options without compromising on quality which shows real expertise and care. Overall, the experience was super satisfying. If your’e planning to build a future proof or customized PC, Id  efinitely recommend this service. Honest suggestions, dedicated support, and a smooth, stress-free experience couldn’t ask for more!',
    image: '/src/assets/images/people.jpg',
  },
  {
    name: 'Wasif A Khoda',
    role: 'Student',
    rating: 5,
    comment:
      'Their service is good and they are friendly. They helped me to choose laptop',
    image: '/src/assets/images/people.jpg',
  },
  {
    name: 'Nasmus Sadat Chowdhury',
    role: 'Student',
    rating: 5,
    comment:
      'I recently got a laptop based on a recommendation from one of your team member and The suggestion was spot on, considering my needs and budget. The laptop performs excellently, and I truly appreciate the guidance and expertise provided. If your’e looking for reliable recommendations and great service, I highly recommend checking out this page. Thanks again for your help!',
    image: '/src/assets/images/people.jpg',
  },
  {
    name: 'তাহাসিনা মিম সোমা',
    role: 'Student',
    rating: 5,
    comment:
      'After weeks of research and comparisons, I finally found the one. Thanks to PC Building Solutions for helping me find my dream laptop. It’s sleek, fast, and reliable, with great battery life and a stunning display—perfect for work, creativity, and entertainment. Absolutely worth it! Once again, thank you, PC Building Solutions, for helping me find my dream laptop',
    image: '/src/assets/images/female-2.jpg',
  },
  {
    name: 'Shaswata Barua',
    role: 'Student',
    rating: 5,
    comment:
      'This page is super helpful for finding good laptop,pc components at good affordable prices. The recommendations are clear, and it’s easy to compare options. Great for anyone looking for a good deal and everything is for free!!',
    image: '/src/assets/images/people.jpg',
  },
]

onMounted(() => {
  const canvases = document.querySelectorAll('#reviews canvas, #reviewsParticles')

  canvases.forEach((canvas) => {
    const ctx = canvas.getContext('2d')
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.6)'
        ctx.fill()

        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      requestAnimationFrame(animate)
    }
    animate()
  })
})


onMounted(() => {
  let target = 96
  let count = 0
  const interval = setInterval(() => {
    count++
    recommendPercent.value = count
    if (count >= target) clearInterval(interval)
  }, 20)
})
</script>

<style scoped>
#reviews {
  position: relative;
}
</style>
