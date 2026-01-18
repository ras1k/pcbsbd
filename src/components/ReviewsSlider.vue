<template>
  <section class="bg-violet-50 py-20 overflow-hidden">
    <div class="container mx-auto px-4">

      <!-- Section header -->
      <div class="text-center mb-12">
        <h3 class="text-3xl sm:text-4xl font-bold text-violet-900">
          Trusted by Real Customers
        </h3>
        <p class="text-violet-700 mt-2">
          Verified Facebook recommendations
        </p>
      </div>

      <!-- Slider -->
      <div
        class="relative overflow-hidden"
        @mouseenter="pause = true"
        @mouseleave="pause = false"
      >
        <div
          ref="track"
          class="flex gap-8"
          :style="{ transform: `translateX(-${offset}px)` }"
        >
          <div
            v-for="(review, index) in duplicatedReviews"
            :key="index"
            class="min-w-[320px] max-w-[320px] bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 flex-shrink-0 hover:shadow-xl transition"
          >
            <div class="flex items-center mb-4">
              <img
                :src="review.image"
                class="w-12 h-12 rounded-full border border-violet-200 mr-3"
              />
              <div>
                <h4 class="font-semibold text-violet-900">
                  {{ review.name }}
                </h4>
                <p class="text-sm text-violet-600">
                  {{ review.role }}
                </p>
              </div>
            </div>

            <p class="text-gray-700 text-sm leading-relaxed line-clamp-4">
              “{{ review.comment }}”
            </p>

            <span class="inline-block mt-4 text-xs text-green-600 font-semibold">
              👍 Verified Facebook Review
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const reviews = [
  {
    name: 'Ishmam Zaman Arno',
    role: 'Student',
    comment:
      'They are honestly the best service out there. Very nice to talk with and very picky.',
    image: '/src/assets/images/people.jpg',
  },
  {
    name: 'Dewan Nafiul Islam Noor',
    role: 'Job Holder',
    comment:
      'High-end PC build with professional guidance. Totally worth it.',
    image: '/src/assets/images/people.jpg',
  },
  {
    name: 'Wasif A Khoda',
    role: 'Student',
    comment:
      'Friendly service and excellent laptop recommendation.',
    image: '/src/assets/images/people.jpg',
  },
  {
    name: 'তাহাসিনা মিম সোমা',
    role: 'Student',
    comment:
      'After weeks of research I finally found my dream laptop. Highly recommended!',
    image: '/src/assets/images/people.jpg',
  },
]

/* Duplicate reviews for infinite effect */
const duplicatedReviews = computed(() => [...reviews, ...reviews])

const offset = ref(0)
const pause = ref(false)
const cardWidth = 352 // card width + gap

onMounted(() => {
  setInterval(() => {
    if (!pause.value) {
      offset.value += 0.4
      if (offset.value >= reviews.length * cardWidth) {
        offset.value = 0
      }
    }
  }, 16) // ~60fps smooth scroll
})
</script>
