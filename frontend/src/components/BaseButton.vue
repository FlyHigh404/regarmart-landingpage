<template>
  <button
    :class="[ 
      'flex items-center justify-center font-medium transition',
      'w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg py-[8px] px-[20px] rounded-[8px] gap-[6px]',
      variant === 'green' && 'text-white bg-gradient-to-br from-[#6EC568] to-[#26A81D] hover:opacity-90',
      variant === 'outline' && 'bg-gray-100 hover:bg-gray-200 text-black'
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