<!-- Reusable TeamCard Component -->
<script>
export default {
  name: 'TeamCard',
  props: ['img', 'name', 'role', 'desc', 'color'],
  template: `
    <div
      class="group relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
    >
      <div :class="'absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ' + color"></div>
      <div class="overflow-hidden flex justify-center mt-6">
        <img :src="img" :alt="name" class="w-32 h-32 object-cover rounded-full border-4 border-violet-200 group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div class="p-6">
        <h3 class="text-2xl font-bold text-violet-900 mb-2">{{ name }}</h3>
        <p class="text-violet-700 font-semibold">{{ role }}</p>
        <p class="text-gray-600 mt-2">{{ desc }}</p>
      </div>
    </div>
  `,
}
</script>

<style scoped>
#our-team {
  position: relative;
}
</style>