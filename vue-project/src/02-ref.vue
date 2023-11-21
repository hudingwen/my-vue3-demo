<script setup>
import { reactive } from 'vue';
const state = reactive({ count: 100 })
const setCount = () => {
  state.count++
}

import { ref } from 'vue';
const count = ref(0)
const setCount2 = () => {
  count.value++
}
</script>

<template>
  <div>reactive:{{ state.count }}</div>
  <button @click="setCount">+1</button>


  <div>ref:{{ count }}</div>
  <button @click="setCount2">+1</button>
</template>