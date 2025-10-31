<template>
  <section id="about"  class="bg-violet-50 py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl sm:text-5xl font-extrabold text-violet-800">
        About PC Building Solutions BD
      </h2>
      <p class="mt-6 text-lg sm:text-xl text-gray-700 max-w-5xl mx-auto">
         At <span class="font-bold text-violet-700">Building Solutions BD</span>, we don't just build computers - we create personalized solutions that empower your digital life. 
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
       <section
    class="relative mt-20 bg-gradient-to-r from-violet-100 to-indigo-50 rounded-2xl shadow-lg p-8 sm:p-10 overflow-hidden"
    data-aos="fade-up"
  >
    <!-- Particle Canvas -->
    <canvas id="impactParticles" class="absolute inset-0 w-full h-full pointer-events-none"></canvas>

    <!-- Content -->
    <h3 class="text-3xl sm:text-4xl font-bold text-center text-violet-900 mb-10 relative z-10">
      Our Impact in Numbers
    </h3>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
      <!-- Card 1 -->
      <div
        class="relative bg-white/80 p-6 rounded-2xl shadow-md text-center transition transform hover:-translate-y-1 hover:shadow-xl group"
      >
        <div
          class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-violet-500 to-pink-400 rounded-t-2xl"
        ></div>
        <div class="lg:text-4xl text-3xl font-bold text-violet-700 mb-2 mt-2">
          <span class="inline-flex items-center">
            <count-up :end-val="50"></count-up>+
          </span>
        </div>
        <div class="text-gray-600 font-medium">Systems Built</div>
      </div>

      <!-- Card 2 -->
      <div
        class="relative bg-white/80 p-6 rounded-2xl shadow-md text-center transition transform hover:-translate-y-1 hover:shadow-xl group"
      >
        <div
          class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-2xl"
        ></div>
        <div class="lg:text-4xl text-3xl font-bold text-blue-700 mb-2 mt-2">
          <span class="inline-flex items-center">
            <count-up :end-val="98"></count-up>%
          </span>
        </div>
        <div class="text-gray-600 font-medium">Satisfaction Rate</div>
      </div>

      <!-- Card 3 -->
      <div
        class="relative bg-white/80 p-6 rounded-2xl shadow-md text-center transition transform hover:-translate-y-1 hover:shadow-xl group"
      >
        <div
          class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-t-2xl"
        ></div>
        <div class="lg:text-4xl text-3xl font-bold text-orange-600 mb-2 mt-2">
          <span class="inline-flex items-center">
            <count-up :end-val="1"></count-up>+
          </span>
        </div>
        <div class="text-gray-600 font-medium">Years Experience</div>
      </div>

      <!-- Card 4 -->
      <div
        class="relative bg-white/80 p-6 rounded-2xl shadow-md text-center transition transform hover:-translate-y-1 hover:shadow-xl group"
      >
        <div
          class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-t-2xl"
        ></div>
        <div class="lg:text-4xl text-3xl font-bold text-green-700 mb-2 mt-2">
          24/7
        </div>
        <div class="text-gray-600 font-medium">Support Available</div>
      </div>
    </div>
  </section>

    </div>
  </section>
</template>

<script setup>
import CountUp from "vue-countup-v3";
import { onMounted } from "vue";

onMounted(() => {
  const canvas = document.getElementById("impactParticles");
  const ctx = canvas.getContext("2d");
  let particles = [];

  const resize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };
  window.addEventListener("resize", resize);
  resize();

  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    });
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(animate);
  };
  animate();
});
</script>




