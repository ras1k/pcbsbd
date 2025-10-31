<template>
 <section id="our-team" class="bg-violet-100 py-24">
  <div class="container mx-auto px-4 text-center">

    <!-- Page Header -->
    <div class="mb-16">
      <h2 data-aos="fade-down" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-900 mb-4">
        Meet Our Team
      </h2>
      <p data-aos="fade-down" data-aos-delay="100" class="text-lg text-violet-700 max-w-2xl mx-auto">
        The passionate professionals behind Building Solutions BD's success
      </p>
    </div>

    <!-- CEO -->
    <div class="flex justify-center mb-20" data-aos="zoom-in">
      <!-- CEO Card -->
      <div class="group w-full max-w-xl bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 relative">
        <canvas class="absolute inset-0 w-full h-full z-0"></canvas> <!-- Card particles + lines -->
            <div class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-400 via-blue-400 to-teal-400"></div>
        <div class="p-6 relative z-10">
          <div class="overflow-hidden flex justify-center mt-6">
            <img src="/src/assets/images/people-4.png" alt="CEO"
              class="w-40 h-40 object-cover rounded-full border-4 border-violet-200 group-hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-2xl font-bold text-violet-900 mb-2">Mominul Kabir</h3>
          <p class="text-violet-700 font-semibold">Chief Executive Officer</p>
          <p class="text-gray-600 mt-2">Inspirational leader driving innovation and strategic vision for PCBSBD's growth and success.</p>
        </div>
      </div>
    </div>

    <!-- Consultants -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-20">
      <!-- Consultant 1 -->
      <div class="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 relative">
        <canvas class="absolute inset-0 w-full h-full z-0"></canvas>
          <div class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400"></div>
        <div class="p-6 relative z-10">
          <div class="overflow-hidden flex justify-center mt-6">
            <img src="/src/assets/images/people-2.png" alt="Engineer"
              class="w-32 h-32 object-cover rounded-full border-4 border-violet-200 group-hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-2xl font-bold text-violet-900 mb-2">Abdullah Bin Malek</h3>
          <p class="text-violet-700 font-semibold">Engineer &amp; Consultant</p>
          <p class="text-gray-600 mt-2">Specializes in bridging cutting-edge technology with client objectives to deliver optimal performance solutions.</p>
        </div>
      </div>

      <!-- Consultant 2 -->
      <div class="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 relative">
        <canvas class="absolute inset-0 w-full h-full z-0"></canvas>
           <div class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400"></div>
        <div class="p-6 relative z-10">
          <div class="overflow-hidden flex justify-center mt-6">
            <img src="/src/assets/images/people-3.png" alt="Consultant"
              class="w-32 h-32 object-cover rounded-full border-4 border-violet-200 group-hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-2xl font-bold text-violet-900 mb-2">Taief Hossain</h3>
          <p class="text-violet-700 font-semibold">Technology &amp; Business Consultant</p>
          <p class="text-gray-600 mt-2">Focuses on developing smart business strategies and optimizing processes through technology solutions.</p>
        </div>
      </div>
    </div>

    <!-- Other Team Members -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      <!-- Other Members Cards with their particles and tech lines -->
      <!-- Example Member -->
<!-- Graphics Designer -->
        <div
          class="relative group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl"
          data-aos="fade-up"
        >
          <canvas class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
          <div class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400"></div>
          <div class="overflow-hidden flex justify-center mt-8 relative z-10">
            <img
              src="/src/assets/images/people.jpg"
              alt="Graphics Designer"
              class="w-32 h-32 object-cover rounded-full border-4 border-violet-200 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div class="p-6 relative z-10">
            <h3 class="text-2xl font-bold text-violet-900 mb-2">Benzir Matubbar</h3>
            <p class="text-violet-700 font-semibold">Graphics Designer</p>
            <p class="text-gray-600 mt-2">
              Crafting visuals that elevate our brand and communicate our values beautifully.
            </p>
          </div>
        </div>

        <!-- Technician -->
        <div
          class="relative group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl"
          data-aos="fade-up"
        >
          <canvas class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
          <div class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-400 via-blue-400 to-teal-400"></div>
          <div class="overflow-hidden flex justify-center mt-8 relative z-10">
            <img
              src="/src/assets/images/people.jpg"
              alt="Technician"
              class="w-32 h-32 object-cover rounded-full border-4 border-violet-200 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div class="p-6 relative z-10">
            <h3 class="text-2xl font-bold text-violet-900 mb-2">Md. Ahnaf Bin Rahman</h3>
            <p class="text-violet-700 font-semibold">Technician</p>
            <p class="text-gray-600 mt-2">
              Expert PC builder ensuring every system is assembled with precision and peak performance.
            </p>
          </div>
        </div>

        <!-- Digital Marketer & Sales -->
        <div
          class="relative group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl"
          data-aos="fade-up"
        >
          <canvas class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
          <div class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400"></div>
          <div class="overflow-hidden flex justify-center mt-8 relative z-10">
            <img
              src="/src/assets/images/people.jpg"
              alt="Digital Marketer"
              class="w-32 h-32 object-cover rounded-full border-4 border-violet-200 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div class="p-6 relative z-10">
            <h3 class="text-2xl font-bold text-violet-900 mb-2">Sahaf Elahi</h3>
            <p class="text-violet-700 font-semibold">Digital Marketer &amp; Sales</p>
            <p class="text-gray-600 mt-2">
              Boosting engagement and driving sales through innovative digital marketing strategies.
            </p>
          </div>
        </div>
    </div>

  </div>
</section>

</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const cards = document.querySelectorAll('#our-team canvas')

  cards.forEach((canvas) => {
    const ctx = canvas.getContext('2d')
    let particles = []

    let lineOffset = 0 // For animated diagonal lines
    let isHovered = false

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', resize)
    resize()

    // Track hover to animate lines
    canvas.parentElement.addEventListener('mouseenter', () => isHovered = true)
    canvas.parentElement.addEventListener('mouseleave', () => isHovered = false)

    // Create diagonal line positions
    const lineSpacing = 25
    const diagonalLines = []
    for (let x = -canvas.height; x < canvas.width + canvas.height; x += lineSpacing) {
      diagonalLines.push({ x, y: 0 })
    }

    // Create particles
    const count = 25
    for (let i = 0; i < count; i++) {
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

      // Animate diagonal lines if hovered
      if (isHovered) lineOffset += 0.5
      else lineOffset *= 0.95 // slowly slow down when not hovered

      // Draw diagonal tech lines
      ctx.strokeStyle = 'rgba(128, 90, 250, 0.05)'
      ctx.lineWidth = 1
      diagonalLines.forEach((line) => {
        ctx.beginPath()
        ctx.moveTo(line.x + lineOffset, line.y)
        ctx.lineTo(line.x + lineOffset + canvas.height, canvas.height)
        ctx.stroke()
      })

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(128, 90, 250, 0.6)'
        ctx.fill()

        // Connect nearby particles
        for (let j = 0; j < particles.length; j++) {
          const p2 = particles[j]
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (dist < 40) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(128, 90, 250, ${1 - dist / 40})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }

        // Update particle position
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
</script>



<style scoped>
#our-team {
  position: relative;
}
</style>
