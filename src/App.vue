<template>
  <div>
    <AppLayout>
      <router-view />
    </AppLayout>
    <Toaster />
  </div>
</template>

<script setup>
import AppLayout from '@/layout/AppLayout.vue'
import Toaster from '@/components/ui/toast/Toaster.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    duration: 1000, // animation duration
    once: true,     // only animate once on scroll
  })
})

</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
</style>
