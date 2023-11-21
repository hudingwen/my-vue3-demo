<script setup>

import Son1 from './components/Son1.vue';
import Son2 from './components/Son2.vue';

import { useCounterStore } from '@/store/counter.js'
const counterStore = useCounterStore();



console.log(counterStore)
</script>

<template>
  <h1>{{ counterStore.count }}</h1>
  <h1>{{ counterStore.msg }}</h1>
  <son-1></son-1>
  <son-2></son-2>
</template>

<style scoped></style>
