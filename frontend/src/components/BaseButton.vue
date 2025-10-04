<template>
  <button
    :class="[ 
      'flex items-center justify-center font-medium transition',
      'w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg py-[8px] px-[20px] rounded-[8px] gap-[6px]',
      variant === 'green' && 'text-white bg-[linear-gradient(117deg,#16a34a,#22c55e)] hover:opacity-90',
      variant === 'outline' && 'bg-white text-green-600 border border-green-600 hover:bg-green-50'
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'green'
  }
})
</script>