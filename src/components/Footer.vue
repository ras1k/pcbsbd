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
          <router-link to="/builds" class="hover:text-violet-400 transition">Builds</router-link>
         
           <router-link to="/whyUs" class="hover:text-violet-400 transition">Why Us</router-link>
        </nav>
        <img
          src="@/assets/pc/cover-2.jpg"
          alt="Logo"
          class="h-14 sm:h-20 object-contain rounded-lg shadow-lg mx-auto md:mx-0"
        />
        <nav
          class="flex flex-wrap justify-center md:justify-end space-x-4 text-sm sm:text-base font-semibold"
        >
        <router-link to="/team" class="hover:text-violet-400 transition">Our Team</router-link>
        <router-link to="/contact" class="hover:text-violet-400 transition">Contact</router-link>
          <router-link to="/terms-and-conditions" class="hover:text-violet-400 transition">T&amp;C</router-link>
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
 <div class="flex space-x-4 mt-2">
              <a href="https://www.facebook.com/share/1AKn8ZzVFq/" target="_blank" class="text-gray-300 hover:text-violet-300"><i class="fab fa-facebook"></i></a>
              <a href="https://x.com/PCBSBD" target="_blank" class="text-gray-300 hover:text-violet-300"><i class="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/pcbsbd?igsh=amV4enRsNXRudGYw" target="_blank" class="text-gray-300 hover:text-violet-300"><i class="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/pc-building-solutions/" target="_blank" class="text-gray-300 hover:text-violet-300"><i class="fab fa-linkedin"></i></a>
              <a href="https://youtube.com/@pcbuildingsolutions?si=e799iwpBN03ZjGiJ" target="_blank" class="text-gray-300 hover:text-violet-300"><i class="fab fa-youtube"></i></a>
            </div>
        </div>

        <!-- Center: Newsletter -->
        <div class="w-full lg:w-1/3 text-center">
      <p class="mb-2 text-sm">Join our newsletter for new updates</p>
      <input
        type="email"
        v-model="email"
        placeholder="Email"
        class="w-full p-2 rounded-t-md text-black focus:outline-none placeholder: text-center placeholder:text-gray-500"
        :class="{ 'border-2 border-red-500': emailError }"
        
      />
      <p v-if="emailError" class="text-red-400 text-xs mt-1">{{ emailError }}</p>
      <button
        @click="subscribe"
        :disabled="isSubmitting"
        class="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 rounded-b-md flex items-center justify-center gap-2 disabled:bg-violet-400"
      >
        <span v-if="!isSubmitting">SUBSCRIBE</span>
        <span v-else class="flex items-center gap-2">
          <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </span>
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
      v-for="(img, index) in imgs"
      :key="index"
      class="w-14 h-14 rounded"
    >
      <img
        :src="img"
        alt="Gallery Image"
        class="w-full h-full object-cover rounded"
      />
    </div>
  </div>
        </div>
      </div>
      
    </div>

  </footer>
   <div class="text-center bg-violet-900 text-white py-5">
        All Right Reserved
  
        <span class="text-lg font-bold italic">PC Building Solutions Bangladesh</span>
        &copy;
        {{ new Date().getFullYear() }}
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from "vue-toast-notification";
import img1 from '@/assets/pc/pc-1.jpg';
import img2 from '@/assets/pc/pc-2.jpg';
import img3 from '@/assets/pc/pc-3.jpg';
import img4 from '@/assets/pc/pc-4.jpg';
import img5 from '@/assets/pc/pc-5.jpg';
import img6 from '@/assets/pc/pc-6.jpg';

const toast = useToast()
const route = useRoute();


const imgs = ref([
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
]);

const email = ref('');
const isSubmitting = ref(false);
const emailError = ref('');

const validateEmail = (email) => {
  // Regular expression for basic email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const subscribe = async () => {
  emailError.value = '';
  
  if (!email.value) {
    emailError.value = 'Please enter your email address';
    return;
  }
  
  if (!validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email address';
    return;
  }
  
  isSubmitting.value = true;
  
  // Simulate API call with a delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  toast.success('You have successfully subscribed to our newsletter!');
  email.value = '';
  isSubmitting.value = false;
};
</script>