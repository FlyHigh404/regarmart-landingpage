<template>
  <component
    :is="href ? 'a' : 'button'"  
    :href="href"                
    :target="href ? '_blank' : null" 
    :class="[ 
      'flex items-center justify-center font-medium transition',
      'w-full py-[8px] px-[20px] rounded-[8px] gap-[6px] whitespace-nowrap',
      variant === 'green' && 'text-white bg-gradient-to-br from-[#6EC568] to-[#26A81D] hover:opacity-90',
      variant === 'outline' && 'bg-gray-100 hover:bg-gray-200 text-black'
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'green'
  },
  href: {         
    type: String,
    default: null
  }
})
</script>