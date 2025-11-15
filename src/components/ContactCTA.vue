<template>
  <section id="contact" class="py-24 bg-violet-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl sm:text-4xl font-bold text-violet-800 text-center mb-8">
        Contact Us
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- Contact Form -->
        <div
          class="bg-gray-50 shadow-lg rounded-lg p-8 border border-gray-200"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1000"
        >
          <h3 class="text-2xl font-semibold text-violet-800 mb-6">Get in Touch</h3>
          
          <form @submit.prevent="submitForm" method="POST"> 
            <div class="mb-4">
              <label for="name" class="block text-lg font-medium text-gray-700">Your Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name"
                required
                class="w-full p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
            
            <div class="mb-4">
              <label for="email" class="block text-lg font-medium text-gray-700">Your Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email"
                required
                class="w-full p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
            
            <div class="mb-4">
              <label for="message" class="block text-lg font-medium text-gray-700">Your Message</label>
              <textarea 
                id="message" 
                v-model="formData.message"
                required
                rows="4"
                class="w-full p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"></textarea>
            </div>

            <button type="submit" 
                    :disabled="isSubmitting"
                    class="bg-violet-700 hover:bg-violet-800 text-white py-3 px-6 rounded-lg text-lg w-full transition-all">
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>
          </form>
        </div>
        
        <!-- Contact Info -->
      <div
  class="bg-gray-50 shadow-lg rounded-lg p-8 border border-gray-200 relative"
  data-aos="fade-up"
  data-aos-delay="150"
  data-aos-duration="1000"
>
  <div class="absolute inset-0 z-0">
    <canvas id="particles" class="w-full h-full"></canvas>
  </div>

  <div class="relative z-10">
    <h3 class="text-2xl font-semibold text-violet-800 mb-6">Our Contact Info</h3>
             <div class="mb-4">
            <h4 class="text-lg font-semibold text-violet-700">Address</h4>
            <p class="text-gray-700">Dhaka, Bangladesh</p>
          </div>

          <div class="mb-4">
            <h4 class="text-lg font-semibold text-violet-700">Phone</h4>
            <p class="text-gray-700">+880 1700948410</p>
          </div>

          <div class="mb-4">
            <h4 class="text-lg font-semibold text-violet-700">Email</h4>
            <p class="text-gray-700">info@pcbsbd.com</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold text-violet-700">Follow Us</h4>
            <div class="flex space-x-4 mt-2">
              <a href="https://www.facebook.com/share/1AKn8ZzVFq/" target="_blank" class="text-violet-700 hover:text-violet-800"><i class="fab fa-facebook"></i></a>
              <a href="https://x.com/PCBSBD" target="_blank" class="text-violet-700 hover:text-violet-800"><i class="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/pcbsbd?igsh=amV4enRsNXRudGYw" target="_blank" class="text-violet-700 hover:text-violet-800"><i class="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/pc-building-solutions/" target="_blank" class="text-violet-700 hover:text-violet-800"><i class="fab fa-linkedin"></i></a>
              <a href="https://youtube.com/@pcbuildingsolutions?si=e799iwpBN03ZjGiJ" target="_blank" class="text-violet-700 hover:text-violet-800"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
  </div>
      </div>

      </div>

      <!-- Map Section (optional) -->
      <div
        class="mt-16 bg-white p-8 rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <h3 class="text-2xl font-semibold text-violet-800 text-center mb-6">Find Us on the Map</h3>
        <div class="relative w-full h-72 rounded-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.662570999282!2d90.37384540000001!3d23.8038146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d35cc33b3d%3A0xf407ee8433836340!2sMirpur-10%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1762881521829!5m2!1sen!2sbd"
            class="absolute top-0 left-0 w-full h-full rounded-lg border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import emailjs from '@emailjs/browser'
import { useToast } from "vue-toast-notification";
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const toast = useToast()

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true

  const templateParams = {
    from_name: formData.value.name,
    from_email: formData.value.email,
    message: formData.value.message,
  }

  try {
    await emailjs.send(
      serviceId, // EmailJS service ID
      templateId, // EmailJS template ID
      templateParams,
      publicKey // EmailJS public key
    )

    toast.success('Your email is sent successfully!')
    formData.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('EmailJS error:', error)
    toast.error('Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
onMounted(() => {
  const cards = document.querySelectorAll('#particles')

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
/* Optional: Style the map iframe and other elements */
</style>



