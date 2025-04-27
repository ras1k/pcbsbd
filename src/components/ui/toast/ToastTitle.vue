<script setup lang="ts">
import { ToastTitle, type ToastTitleProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { CheckCircleIcon } from 'lucide-vue-next';

const props = defineProps<ToastTitleProps & { class?: string }>()
</script>

<template>
  <ToastTitle v-bind="props" :class="cn('text-sm dark:text-gray-900 flex gap-2 font-semibold [&+div]:text-xs', props.class)">
    <slot />
<!-- <ion-icon name="checkmark-circle-outline" class="text-2xl"></ion-icon> -->
    <CheckCircleIcon  />
  </ToastTitle>
</template>
