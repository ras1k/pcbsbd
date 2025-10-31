<template>
  <section id="our-team" class="bg-gradient-to-br from-violet-100 via-indigo-50 to-white py-24">
    <div class="container mx-auto px-4 text-center">
      <div class="mb-16">
        <h2 data-aos="fade-down" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-900 mb-4">
          Meet Our Team
        </h2>
        <p data-aos="fade-down" data-aos-delay="100" class="text-lg text-violet-700 max-w-2xl mx-auto">
          The passionate professionals behind Building Solutions BD's success
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        <!-- CEO -->
        <TeamCard
          img="/src/assets/images/people-4.png"
          name="Mominul Kabir"
          role="Chief Executive Officer"
          desc="Inspirational leader driving innovation and strategic vision for PCBSBD's growth and success."
          gradient="from-violet-500 via-indigo-400 to-violet-600"
        />

        <!-- Engineer & Consultant -->
        <TeamCard
          img="/src/assets/images/people-2.png"
          name="Abdullah Bin Malek"
          role="Engineer & Consultant"
          desc="Bridging cutting-edge technology with client objectives to deliver optimal performance solutions."
          gradient="from-indigo-400 via-violet-500 to-pink-400"
        />

        <!-- Technology & Business Consultant -->
        <TeamCard
          img="/src/assets/images/people-3.png"
          name="Taief Hossain"
          role="Technology & Business Consultant"
          desc="Developing smart business strategies and optimizing processes through technology solutions."
          gradient="from-violet-500 via-indigo-400 to-blue-400"
        />

        <!-- Graphics Designer -->
        <TeamCard
          img="/src/assets/images/people.jpg"
          name="Benzir Matubbar"
          role="Graphics Designer"
          desc="Crafting visuals that elevate our brand and communicate our values beautifully."
          gradient="from-pink-400 via-violet-400 to-indigo-400"
        />

        <!-- Technician -->
        <TeamCard
          img="/src/assets/images/people.jpg"
          name="Md. Ahnaf Bin Rahman"
          role="Technician"
          desc="Expert PC builder ensuring every system is assembled with precision and peak performance."
          gradient="from-indigo-400 via-blue-400 to-teal-400"
        />

        <!-- Digital Marketer & Sales -->
        <TeamCard
          img="/src/assets/images/people.jpg"
          name="Sahaf Elahi"
          role="Digital Marketer & Sales"
          desc="Boosting engagement and driving sales through innovative digital marketing strategies."
          gradient="from-violet-400 via-fuchsia-400 to-indigo-400"
        />

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

// Initialize particles for all canvases inside cards
onMounted(() => {
  const cards = document.querySelectorAll('#our-team canvas')
  cards.forEach((canvas) => {
    const ctx = canvas.getContext('2d')
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', resize)
    resize()

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

    // Animate particles with connecting lines
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(128, 90, 250, 0.6)' // Violet-ish particles
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

// Team card component (no reusable Vue component; just rendered inline)
const teamMembers = [
  { img: '/src/assets/images/people-4.png', name: 'Mominul Kabir', role: 'Chief Executive Officer', desc: "Inspirational leader driving innovation and strategic vision for PCBSBD's growth and success.", gradient: 'from-violet-500 via-indigo-400 to-violet-600' },
  { img: '/src/assets/images/people-2.png', name: 'Abdullah Bin Malek', role: 'Engineer & Consultant', desc: "Bridging cutting-edge technology with client objectives to deliver optimal performance solutions.", gradient: 'from-indigo-400 via-violet-500 to-pink-400' },
  { img: '/src/assets/images/people-3.png', name: 'Taief Hossain', role: 'Technology & Business Consultant', desc: 'Developing smart business strategies and optimizing processes through technology solutions.', gradient: 'from-violet-500 via-indigo-400 to-blue-400' },
  { img: '/src/assets/images/people.jpg', name: 'Benzir Matubbar', role: 'Graphics Designer', desc: 'Crafting visuals that elevate our brand and communicate our values beautifully.', gradient: 'from-pink-400 via-violet-400 to-indigo-400' },
  { img: '/src/assets/images/people.jpg', name: 'Md. Ahnaf Bin Rahman', role: 'Technician', desc: 'Expert PC builder ensuring every system is assembled with precision and peak performance.', gradient: 'from-indigo-400 via-blue-400 to-teal-400' },
  { img: '/src/assets/images/people.jpg', name: 'Sahaf Elahi', role: 'Digital Marketer & Sales', desc: 'Boosting engagement and driving sales through innovative digital marketing strategies.', gradient: 'from-violet-400 via-fuchsia-400 to-indigo-400' },
]
</script>

<style scoped>
#our-team {
  position: relative;
}
</style>
