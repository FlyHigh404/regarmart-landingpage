<template>
  <button
    :class="['button', size, variant, { 'has-icon': hasIcon, 'is-disabled': isDisabled }]"
    :disabled="isDisabled"
  >
    <span v-if="hasIcon" class="icon-slot">
      <slot name="icon"></slot>
    </span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    variant: {
      type: String,
      default: 'solid',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasIcon() {
      return !!this.$slots.icon;
    },
  },
};
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.solid {
  background-image: linear-gradient(to right, #6EC568, #26A81D);
}

.button:hover:not(.is-disabled) {
  background-image: linear-gradient(to right, #26A81D, #6EC568);
}

.button.is-disabled {
  cursor: not-allowed;
  opacity: 0.5;
  background-image: none; 
  background-color: #ccc; 
}

.medium {
  padding: 16px 32px;
  font-size: 24px;
}
</style>