<script setup>
import Clicker from './components/Clicker.vue'

const onButtonClicked = (step, index) => {
  alert(`Кликер ${index + 1} clicked!`)
}
</script>

<template>
  <h1>Vue Introduction - Кликер</h1>
  <div class="container">
    <Clicker
      v-for="(_, index) in 100"
      :key="index"
      @button-clicked="(step) => onButtonClicked(step, index)"
    >
      <template #button="{ increment }">
        <button @click="increment(index + 1)">+{{ index + 1 }}</button>
      </template>
    </Clicker>
  </div>
</template>

<style>
.container { display: flex; flex-wrap: wrap; }
</style>