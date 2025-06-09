<template>
  <footer class="bg-violet-950 text-white px-6 sm:px-10 lg:px-20">
    <div class="container mx-auto w-full">
      <!-- Top Nav Row -->
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-4 px-0 py-6 border-b border-violet-800"
      >
        <nav
          class="flex flex-wrap justify-center md:justify-start space-x-4 text-sm sm:text-base font-semibold"
        >
          <router-link to="/" class="hover:text-violet-400 transition">Home</router-link>
          <router-link to="/about" class="hover:text-violet-400 transition">About</router-link>
          <router-link to="/contact" class="hover:text-violet-400 transition">Contact Us</router-link>
        </nav>
        <img
          src="@/assets/pc/cover-2.jpg"
          alt="Logo"
          class="h-14 sm:h-20 object-contain"
        />
        <nav
          class="flex flex-wrap justify-center md:justify-end space-x-4 text-sm sm:text-base font-semibold"
        >
          <router-link to="/whyUs" class="hover:text-violet-400 transition">Why Us</router-link>
          <router-link to="/builds" class="hover:text-violet-400 transition">Builds</router-link>
          <router-link to="/team" class="hover:text-violet-400 transition">Our Team</router-link>
          <router-link to="/blogs" class="hover:text-violet-400 transition">Blogs</router-link>
        </nav>
      </div>

      <!-- Main Footer Grid -->
      <div
        class="py-10 flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-8 w-full"
      >
        <!-- Left: Company Info -->
        <div class="w-full lg:w-1/3 text-center lg:text-left">
          <h3 class="text-xl font-bold mb-2">Build Your Dream PC</h3>
          <p class="text-sm text-gray-300 mb-4">
            Building PCs with passion and precision.
          </p>
          <div class="flex justify-center lg:justify-start space-x-4">
            <a href="#" class="text-gray-300 hover:text-white"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="#" class="text-gray-300 hover:text-white"
              ><i class="fab fa-twitter"></i
            ></a>
            <a href="#" class="text-gray-300 hover:text-white"
              ><i class="fab fa-linkedin-in"></i
            ></a>
            <a href="#" class="text-gray-300 hover:text-white"
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
        </div>

        <!-- Center: Newsletter -->
        <div class="w-full lg:w-1/3 text-center">
          <p class="mb-2 text-sm">Join our newsletter for new updates</p>
          <input
            type="email"
            placeholder="Email"
            class="w-full p-2 rounded-t-md text-black focus:outline-none"
          />
          <button
            class="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 rounded-b-md"
          >
            SUBSCRIBE
          </button>
        </div>

        <!-- Right: Gallery -->
        <div
          class="w-full lg:w-1/3 flex flex-col items-center lg:items-center text-center lg:ps-8 ps-0"
        >
          <h3 class="text-xl font-bold flex items-center justify-center mb-3">
            Gallery
          </h3>
          <!-- <img src="@/assets/pc/pc-2.jpg" alt=""> -->
          <div class="flex flex-wrap justify-center lg:justify-end gap-2">
            <div
              v-for="i in 6"
              :key="i"
              class="w-14 h-14 rounded"
            >
              <img
                :src="`/src/assets/pc/pc-${i}.jpg`"
                alt="Gallery Image"
                class="w-full h-full object-cover rounded"
              />
          </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
