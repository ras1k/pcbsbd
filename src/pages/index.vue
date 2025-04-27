<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Featured Builds Section -->
    <FeaturedBuilds />

    <!-- Why Choose Us Section -->
    <WhyChooseUs />

    <!-- Contact CTA Section -->
    <ContactCTA />
  </div>
</template>

<script setup>
import HeroSection from '/src/components/HeroSection.vue'
import AboutSection from '/src/components/AboutSection.vue'
import FeaturedBuilds from '/src/components/FeaturedBuilds.vue'
import WhyChooseUs from '/src/components/WhyChooseUs.vue'
import ContactCTA from '/src/components/ContactCTA.vue'
</script>
