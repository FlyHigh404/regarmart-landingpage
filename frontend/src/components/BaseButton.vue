<template>
  <button
    :class="[ 
      'flex justify-center items-center font-medium transition whitespace-nowrap',
      'w-[220px] py-[8px] px-[20px] rounded-[8px] gap-[6px]',
      variant === 'green' && 'text-white bg-gradient-to-br from-[#6EC568] to-[#26A81D] hover:opacity-90',
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
