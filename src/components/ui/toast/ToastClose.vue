<script setup lang="ts">
import { ToastClose } from 'radix-vue'
import { XIcon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'


const props = defineProps<{
  class?: string
}>()
</script>

<template>
 <ToastClose v-bind="props" :class="cn('absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 group-[.primary]:text-green-500 group-[.primary]:hover:text-green-300 group-[.primary]:focus:ring-green-400 group-[.primary]:focus:ring-offset-green-600', props.class)">
   <XIcon class="h-4 w-4 dark:text-gray-900" />
</ToastClose>

</template>
