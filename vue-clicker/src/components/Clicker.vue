<template>
  <div class="clicker">
    <p>Счёт: {{ count }}</p>
    <slot name="button" :increment="increment"></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const emit = defineEmits(['button-clicked'])
const increment = (step = 1) => {
  count.value += step
  emit('button-clicked', step)
}
</script>