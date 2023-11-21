<script setup>
import { useCounterStore } from '@/store/counter.js'
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore();

//解构store -使用storeToRefs就行响应式还原
const { count,msg } = storeToRefs(counterStore)

</script>
<template>
  <div>我是son1 - {{ counterStore.count }} -- {{ counterStore.double }}</div>

  <button @click="counterStore.addCount">+</button>

  
  <h1>{{ count }}</h1>
  <h1>{{ msg }}</h1>
</template>