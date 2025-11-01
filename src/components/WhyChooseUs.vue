<template>
  <section id="whyus" class="bg-violet-200 py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl sm:text-5xl font-bold text-violet-800 text-center mb-12">
        Why Choose PC Building Solutions BD?
      </h2>

      <!-- Our Values Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-center">
        <div class="space-y-6">
          <h3 class="text-3xl font-semibold text-violet-700">Our Values</h3>
          <p class="text-gray-700 text-lg">
            At PCBSBD, we’re committed to providing high-quality PC builds and solutions that are 
            tailor-made to meet your needs. Our mission is to offer customers:
          </p>

          <ul class="list-disc list-inside space-y-4 text-gray-700 text-lg">
            <li>Custom-built PCs with the best performance-to-price ratio</li>
            <li>Top-notch customer support and guidance throughout the build process</li>
            <li>Trusted components and high-quality products for reliable performance</li>
            <li>Innovative solutions to meet every type of need, from gaming to workstations</li>
          </ul>
        </div>
        <div class="group bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200">
          <img 
            src="/src/assets/pc/cover.jpg" 
            alt="Our Values" 
            class="w-full h-72 object-cover rounded-2xl group-hover:brightness-110 transition duration-500"
          />
        </div>
      </div>


      <div id="our-team" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-white relative p-8 rounded-2xl shadow-lg border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-2xl text-center">
           <canvas class="absolute inset-0 w-full h-full z-0"></canvas> 
          <div class="text-violet-700 text-5xl mb-6 transition-transform duration-500 hover:rotate-12">
            <i class="fas fa-cogs"></i>
          </div>
          <h4 class="text-2xl font-semibold text-violet-800 mb-4">Custom PC Builds</h4>
          <p class="text-gray-700">
            We offer tailored PC builds that perfectly fit your needs, whether it’s for gaming, content creation, or business.
          </p>
        </div>

        <div class="bg-white relative p-8 rounded-2xl shadow-lg border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-2xl text-center">
           <canvas class="absolute inset-0 w-full h-full z-0"></canvas> 
          <div class="text-violet-700 text-5xl mb-6 transition-transform duration-500 hover:rotate-12">
            <i class="fas fa-shield-alt"></i>
          </div>
          <h4 class="text-2xl font-semibold text-violet-800 mb-4">Reliable &amp; Secure</h4>
          <p class="text-gray-700">
            With top-tier components and secure, reliable builds, your system is guaranteed to perform at its best.
          </p>
        </div>

        <div class="bg-white relative p-8 rounded-2xl shadow-lg border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-2xl text-center">
           <canvas class="absolute inset-0 w-full h-full z-0"></canvas> <!-- Card particles + lines -->
          <div class="text-violet-700 text-5xl mb-6 transition-transform duration-500 hover:rotate-12">
            <i class="fas fa-headset"></i>
          </div>
          <h4 class="text-2xl font-semibold text-violet-800 mb-4">24/7 Customer Support</h4>
          <p class="text-gray-700">
            Our dedicated customer support team is available around the clock to assist with any concerns or queries.
          </p>
        </div>
      </div>

      <!-- Call to Action Section -->
      <div class="parallax relative flex items-center justify-center">
        <div class="text-center py-16 bg-black to-violet-900 bg-opacity-50 w-[85%] text-white rounded-2xl shadow-lg transform transition duration-500 hover:shadow-2xl">
        <h3 class="text-3xl sm:text-4xl font-semibold mb-4">Ready to Build Your Perfect PC?</h3>
        <p class="text-lg mb-8 px-2">Let PCBSBD help you create the best PC build for your needs. Get in touch with us today!</p>
        <router-link 
          to="/contact" 
          href="#contact" 
          class="inline-block bg-white text-violet-700 hover:bg-violet-700 hover:text-white py-3 px-8 rounded-full text-xl font-semibold transition duration-500 hover:scale-110"
        >
          Contact Us Now
        </router-link>
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
.parallax {
  background-image: url("/src/assets/pc/pc-9.jpg");

  min-height: 500px;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
}

</style>
