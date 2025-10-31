<template>
  <section id="whyus" class="bg-violet-200 py-20 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl sm:text-5xl font-bold text-violet-800 text-center my-10">
        Why Choose Building Solutions BD?
      </h2>

      <!-- Our Values Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-center">
        <div
          class="space-y-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
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

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          class="group bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200"
        >
          <img 
            src="/src/assets/pc/cover.jpg" 
            alt="Our Values" 
            class="w-full h-72 object-cover rounded-2xl group-hover:brightness-110 transition duration-500"
          />
        </div>
      </div>

      <!-- Unique Offerings Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1000"
          class="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-2xl text-center"
        >
          <div class="text-violet-700 text-5xl mb-6 transition-transform duration-500 hover:rotate-12">
            <i class="fas fa-cogs"></i>
          </div>
          <h4 class="text-2xl font-semibold text-violet-800 mb-4">Custom PC Builds</h4>
          <p class="text-gray-700">
            We offer tailored PC builds that perfectly fit your needs, whether it’s for gaming, content creation, or business.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
          class="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-2xl text-center"
        >
          <div class="text-violet-700 text-5xl mb-6 transition-transform duration-500 hover:rotate-12">
            <i class="fas fa-shield-alt"></i>
          </div>
          <h4 class="text-2xl font-semibold text-violet-800 mb-4">Reliable &amp; Secure</h4>
          <p class="text-gray-700">
            With top-tier components and secure, reliable builds, your system is guaranteed to perform at its best.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          class="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-2xl text-center"
        >
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
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1000"
        class="relative text-center py-16 bg-gradient-to-r from-violet-700 to-violet-900 text-white rounded-2xl shadow-lg overflow-hidden"
      >
        <!-- 🎇 Particles Canvas Only for This Section -->
        <canvas id="particles" class="absolute inset-0 w-full h-full z-0"></canvas>

        <!-- Content above particles -->
        <div class="relative z-10">
          <h3 class="text-3xl sm:text-4xl font-semibold mb-4">Ready to Build Your Perfect PC?</h3>
          <p class="text-lg mb-8">
            Let PCBSBD help you create the best PC build for your needs. Get in touch with us today!
          </p>
          <router-link
            to="/contact"
            class="inline-block bg-white text-violet-700 py-3 px-8 rounded-full text-xl font-semibold transition duration-500 hover:bg-gray-100 hover:scale-110"
          >
            Contact Us Now
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let particlesArray = [];

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.2) this.size -= 0.02;

      if (
        this.x < 0 ||
        this.x > canvas.width ||
        this.y < 0 ||
        this.y > canvas.height ||
        this.size <= 0.2
      ) {
        this.reset();
      }
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
    }
    draw() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    particlesArray = [];
    const numberOfParticles = (canvas.width * canvas.height) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }

  function handleParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
  }

  let animationFrameId;
  function animate() {
    handleParticles();
    animationFrameId = requestAnimationFrame(animate);
  }

  init();
  animate();

  window.addEventListener('resize', () => {
    resize();
    init();
  });
});
</script>
