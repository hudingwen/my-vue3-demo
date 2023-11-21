<script setup>
import { useCounterStore } from '@/store/counter.js'
const counterStore = useCounterStore();
</script>
<template>
  <div>我是son2 - {{ counterStore.msg }}</div>
  
  <button @click="counterStore.subCount">-</button>
</template>